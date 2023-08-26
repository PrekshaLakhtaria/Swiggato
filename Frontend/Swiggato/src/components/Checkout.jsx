import React from "react";
import { motion } from "framer-motion";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderActions";
import Loading from "./Loading";
import Success from "./Success";
import Error from "./Error";

const Checkout = ({ total }) => {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  console.log("Loading :", loading);
  console.log("error :", error);
  console.log("Success :", success);

  const dispatch = useDispatch();

  const tokenHandler = (token) => {
    console.log(token);
    dispatch(placeOrder(token, total));
  };

  return (
    <div>
      <StripeCheckout
        amount={total * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey={import.meta.env.VITE_APP_STRIPE_PUBLIC_KEY}
        currency="INR"
      >
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="mt-6 w-full rounded-md bg-orange-500 py-1.5 font-medium text-blue-50 hover:bg-orange-600"
        >
          Check out
        </motion.button>
      </StripeCheckout>
      <br />
      <br />
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Your order placed successfully" />}
    </div>
  );
};

export default Checkout;
