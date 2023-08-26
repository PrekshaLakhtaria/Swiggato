const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");

dotenv.config({ path: "../config/.env" });

const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Order = require("../models/orderModel");

router.post("/placeorder", async (req, res) => {
  const { token, total, currentUser, cartItems } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.paymentIntents.create(
      {
        amount: total * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
        payment_method_types: ["card"],
        payment_method_options: {
          card: {
            request_three_d_secure: "any",
          },
        },
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      const newOrder = new Order({
        username: currentUser.username,
        email: currentUser.email,
        userid: currentUser._id,
        orderItems: cartItems,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pincode: token.card.address_zip,
        },
        orderAmount: total,
        transactionId: payment.id,
      });
      newOrder.save();
      res.send({ message: "Payment done ", payment });
    } else {
      res.send("Payment failed");
    }

    // const paymentIntent = await stripe.paymentIntents.confirm(payment.id, {
    //   payment_method: "pm_card_visa",
    // });

    // if (paymentIntent) {
    //   res.send({ message: "Payment intent :", paymentIntent });
    // } else {
    //   res.send("Payment failed");
    // }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong", error });
  }
});

router.post("/getuserorders", async (req, res) => {
  const { userid } = req.body;
  try {
    const orders = await Order.find({ userid: userid }).sort({ _id: -1 });
    res.send(orders);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

module.exports = router;
