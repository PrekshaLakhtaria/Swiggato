import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
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
              whileTap={{ scale: 0.5 }}
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
  );
};

export default HomePage;
