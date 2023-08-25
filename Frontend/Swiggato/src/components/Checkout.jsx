import React from "react";
import { motion } from "framer-motion";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { placeOrder } from "../actions/orderActions";

const Checkout = ({ total }) => {
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
        stripeKey="pk_test_51NiLNKSGlfDG9mkWCYCcZE8XsfUfi2N7BW97xaTEdtOd6wGxOmr4Fv77GeztpkgyCZuX52awSdGoF1Q8TVtTYlkO00KiYvioAj"
        currency="INR"
      >
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="mt-6 w-full rounded-md bg-orange-500 py-1.5 font-medium text-blue-50 hover:bg-orange-600"
        >
          Check out
        </motion.button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
