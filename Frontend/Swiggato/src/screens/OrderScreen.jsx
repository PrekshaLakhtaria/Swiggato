import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

export const OrderScreen = () => {
  const deliveryfee = 5;
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = orderstate;

  var subtotal1 = 0;

  // orders.map((order) => {
  //   order.orderItems.map((item) => {
  //     subtotal1 = subtotal1 + item.price * item.quantity;
  //   });
  // });

  console.log("subtotaal", subtotal1);

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  return (
    <div className="my-20 bg-gradient-to-b from-white via-orange-100 to-white">
      <p className="text-center font-bold text-3xl">My Orders</p>
      <div>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {orders &&
          orders.map((order) => {
            subtotal1 = 0;
            return (
              <div key={order._id}>
                <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                  <div className="flex justify-start item-start space-y-2 flex-col">
                    <h1 className="text-2xl dark:text-white lg:text-2xl font-semibold leading-7 lg:leading-9 text-gray-800">
                      Order# {order._id}
                    </h1>
                    <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
                      Date : {order.createdAt.substring(0, 10)}
                    </p>
                  </div>
                  <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                      <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-orange-200 rounded-xl px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-orange-600">
                          <span className="uppercase">{order.username}</span>’s
                          Cart
                        </p>
                        {order.orderItems.map((item) => {
                          subtotal1 = subtotal1 + item.price * item.quantity;
                          return (
                            <div
                              className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full"
                              key={item._id}
                            >
                              <div className="pb-4 md:pb-8 w-full md:w-40">
                                <img
                                  className="w-full hidden md:block"
                                  src={item.img}
                                  alt={item.name}
                                />
                              </div>
                              <div className="border-b border-orange-00 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                <div className="w-full flex flex-col justify-start items-start space-y-8">
                                  <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                                    {item.name}
                                  </h3>
                                  <div className="flex justify-start items-start flex-col space-y-2">
                                    <p className="text-sm dark:text-white leading-none text-gray-800">
                                      <span>Category: </span> {item.category}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex justify-between space-x-8 items-start w-full">
                                  <p className="text-base dark:text-white xl:text-lg leading-6">
                                    ₹{item.price}
                                  </p>
                                  <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                                    {item.quantity}
                                  </p>
                                  <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                                    ₹{item.subtotalprice}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-orange-200 rounded-xl dark:bg-gray-800 space-y-6">
                          <h3 className="text-xl dark:text-white font-semibold leading-5 text-orange-600">
                            Summary
                          </h3>
                          <div className="flex justify-center items-center w-full space-y-4 flex-col border-orange-600 border-b pb-4">
                            <div className="flex justify-between w-full">
                              <p className="text-base dark:text-white leading-4 text-gray-800">
                                Subtotal
                              </p>
                              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                                ₹{subtotal1}
                              </p>
                            </div>
                            <div className="flex justify-between items-center w-full">
                              <p className="text-base dark:text-white leading-4 text-gray-800">
                                Derlivery fee
                              </p>
                              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                                ₹{deliveryfee}
                              </p>
                            </div>
                          </div>
                          <div className="flex justify-between items-center w-full">
                            <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
                              Total
                            </p>
                            <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
                              ₹{order.orderAmount}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-orange-200 rounded-xl dark:bg-gray-800 h-fit w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                      <h3 className="text-xl dark:text-white font-semibold leading-5 text-orange-600">
                        <span className="uppercase">{order.username}</span>'s
                        Details
                      </h3>
                      <br />
                      <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                        <div className="flex flex-col justify-start items-start flex-shrink-0">
                          <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-orange-500 w-full">
                            <img
                              className="dark:hidden"
                              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg"
                              alt="email"
                            />
                            <img
                              className="hidden dark:block"
                              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1dark.svg"
                              alt="email"
                            />
                            <p className="cursor-pointer text-sm leading-5 ">
                              {order.email}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                          <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                            <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                              <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                                Delivery Address
                              </p>
                              <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                Street : {order.shippingAddress.street}
                              </p>
                              <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                City : {order.shippingAddress.city}
                              </p>
                              <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                Pincode : {order.shippingAddress.pincode}
                              </p>
                              <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                Country : {order.shippingAddress.country}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OrderScreen;
