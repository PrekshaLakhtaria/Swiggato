import React from "react";
import { MdShoppingBasket} from "react-icons/md";
import {BiUserCircle} from "react-icons/bi"


const Header = () => {
  return (
    <header className="w-screen z-60 p-6 px-16">
      {/* for tablet and desktop */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex items-center ">
          <p className="absolute z-20 font-sans font-bold text-3xl">SWIGGATO</p>
          <span className="relative z-10 -top-5 left-12 font-sans font-extrabold text-9xl text-orange-500">
            s
          </span>
        </div>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-lg text-orange-500 underline hover:text-orange-500 duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-lg text-gray-600 hover:text-orange-500 duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-lg text-gray-600 hover:text-orange-500 duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
          </ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-2xl text-gray-600 cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
              <p className="text-xs font-semibold">2</p>
            </div>
          </div>

          <BiUserCircle className="w-10 min-w-[40px] h-10 min-h-[40px] text-gray-600 drop-shadow-xl hover:text-orange-500 duration-100 transition-all ease-in-out cursor-pointer"/>
        </div>
      </div>
      

      {/* for mobile */}
      <div className="flex md:hidden bg-sky-500 w-full h-full p-4"></div>
    </header>
  );
};

export default Header;
