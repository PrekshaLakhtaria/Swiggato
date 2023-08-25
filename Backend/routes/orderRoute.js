const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51NiLNKSGlfDG9mkW5Tx0y04ouBKicBBtDRxOYwZ7hXl7g1lOUsCZXtymrCfU9pyDHLX5rWS7XCdjKaQNRgi29mXG00EWQGJ0Yb"
);

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
        // payment_method_options: [card][request_three_d_secure][any],
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      res.send("Payment done");
    } else {
      res.send("Payment failed");
    }

    // const paymentIntent = await stripe.paymentIntents.confirm(payment.id, {
    //   payment_method: "pm_card_visa",
    // });

    // if (paymentIntent) {
    //   res.send(paymentIntent);
    // } else {
    //   res.send("Payment failed");
    // }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong", error });
  }
});

module.exports = router;
