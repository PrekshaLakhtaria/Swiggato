import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/userAction";

const Header = () => {
  const cartstate = useSelector((state) => state.cartReducer);
  // console.log("length : ", cartstate.cartItems.length);

  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  // console.log("name: ", currentUser.name);

  const dispatch = useDispatch();

  return (
    <header className="w-screen z-60 p-6 px-16">
      {/* for tablet and desktop */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex items-center">
          <a href="/">
            <p className="absolute z-20 top-16 font-sans font-bold text-3xl">
              SWIGGATO
            </p>
          </a>
          <span className="relative z-10 -top-6 left-12 font-sans font-extrabold text-9xl text-orange-500">
            s
          </span>
        </div>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-lg text-gray-600 hover:text-orange-500 duration-100 transition-all ease-in-out cursor-pointer">
              <a href="/">Home</a>
            </li>
            <li className="text-lg text-gray-600 hover:text-orange-500 duration-100 transition-all ease-in-out cursor-pointer">
              <a href="/menu">Food Menu</a>
            </li>
            <li className="text-lg text-gray-600 hover:text-orange-500 duration-100 transition-all ease-in-out cursor-pointer">
              <a href="/aboutus">About Us</a>
            </li>
          </ul>

          <div className="relative flex items-center justify-center">
            <a href="/cart">
              <MdShoppingBasket className="text-2xl text-gray-600 cursor-pointer" />
            </a>
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
              <p className="text-xs font-semibold">
                {cartstate.cartItems.length}
              </p>
            </div>
          </div>

          {currentUser ? (
            <div>
              {/* <a className="text-orange-600 uppercase hover:cursor-pointer">
                {currentUser.username}
              </a> */}
              <div className="group relative cursor-pointer py-2">
                <div className="flex items-center justify-between space-x-5 bg-white px-4">
                  <a className="menu-hover my-2 py-2 text-base font-medium text-orange-600 lg:mx-4 uppercase">
                    Welcome, {currentUser.username}
                  </a>
                  <span>
                    <svg
                      className="-ml-5 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>
                <div className="invisible absolute z-50 flex w-full flex-col bg-orange-50 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                  <a
                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-orange-500 md:mx-2"
                    href="/orders"
                  >
                    Orders
                  </a>

                  <a
                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-orange-500 md:mx-2"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <a href="/login">
              <BiUserCircle className="w-10 min-w-[40px] h-10 min-h-[40px] text-gray-600 drop-shadow-xl hover:text-orange-500 duration-100 transition-all ease-in-out cursor-pointer" />
            </a>
          )}
        </div>
      </div>

      {/* for mobile */}
      <div className="flex md:hidden bg-sky-500 w-full h-full p-4"></div>
    </header>
  );
};

export default Header;
