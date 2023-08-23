import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deletFromCart } from "../actions/cartActions";

const CartScreen = () => {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce(
    (x, item) => Number(Number(x + item.subtotalprice).toFixed(2)),
    0
  );
  var deliveryfee = 5;

  const dispatch = useDispatch();

  return (
    <div className="aboslute top-10 ">
      <div className=" bg-gray-100 pt-20 bg-gradient-to-b from-white via-orange-200 to-white">
        <h1 className=" mb-10 ml-96 text-2xl font-bold">Cart Items</h1>

        <div className=" mx-20 my-20 max-w-5xl px-6 md:flex md:space-x-6 xl:px-0 h-fit">
          <div className="rounded-lg md:w-2/3">
            {cartItems.map((item) => {
              return (
                <div
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start drop-shadow-xl"
                  key={item._id}
                >
                  <img
                    src={item.img}
                    alt="product-image"
                    className="w-[500px] h-[180px] rounded-lg"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {item.name}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">
                        ₹{item.price}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span
                          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-orange-500 hover:text-blue-50"
                          onClick={() => {
                            dispatch(addToCart(item, item.quantity - 1));
                          }}
                        >
                          {" "}
                          -{" "}
                        </span>
                        <b
                          className="flex items-center justify-center h-8 w-8 border bg-white text-xs outline-none"
                          type="number"
                        >
                          {item.quantity}
                        </b>
                        <span
                          className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-orange-500 hover:text-blue-50"
                          onClick={() => {
                            dispatch(addToCart(item, item.quantity + 1));
                          }}
                        >
                          {" "}
                          +{" "}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm">₹{item.subtotalprice}</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                          onClick={() => {
                            dispatch(deletFromCart(item));
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative bottom-[200px] left-[900px] h-[250px] mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">₹{subtotal}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Delivery fee</p>
            <p className="text-gray-700">₹{deliveryfee}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">
                ₹{subtotal + deliveryfee}
              </p>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="mt-6 w-full rounded-md bg-orange-500 py-1.5 font-medium text-blue-50 hover:bg-orange-600"
          >
            Check out
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
