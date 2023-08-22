import React from "react";
import { motion } from "framer-motion";

import service1 from "../assets/services1.jpg";
import service2 from "../assets/services2.jpg";
import service3 from "../assets/services3.jpg";

const HomePage = () => {
  return (
    <>
      {/* landin page */}
      <div className="w-screen">
        {/* for tablet and desktop */}
        <div className="md:flex flex-col w-[100vw] h-[750px] items-center gap-4 ">
          <div className="absolute w-[100vw] h-[750px] bg-[url('./assets/bg2.png')] bg-cover z-40">
            <div className="relative top-40 left-32">
              <p className="text-6xl text-orange-500">Are you Hungry?</p>
              <p className="relative top-5 text-3xl">Don't wait !!</p>
              <p className="relative top-6 text-xl">
                Let start to order food now!
              </p>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="relative top-10 text-xl border-2 border-orange-500 rounded-3xl p-4"
              >
                CHECKOUT MENU
              </motion.button>
            </div>
          </div>
        </div>

        {/* for mobile */}
        <div className="flex md:hidden bg-sky-500 w-full h-full p-4"></div>
      </div>

      {/* Services */}
      <div className="flex flex-row items-center justify-center my-36 gap-20">
        <div className="flex flex-col items-center justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img src={service1} alt="Service1" />

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                SEARCH ONLINE
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Search your favourite foods through our menu.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img src={service2} alt="Service2" />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                ORDER NOW
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Order in for yourself or for the group, with no restrictions on
              order value
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img src={service3} alt="Service3" />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                DELIVERY
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Experience Swiggato's superfast delivery for food delivered fresh
              & on time
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
