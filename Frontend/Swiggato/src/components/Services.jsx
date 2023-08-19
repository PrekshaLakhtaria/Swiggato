import React from "react";

import service1 from "../assets/services1.jpg";
import service2 from "../assets/services2.jpg";
import service3 from "../assets/services3.jpg";

const Services = () => {
  return (
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
            Experience Swiggato's superfast delivery for food delivered fresh &
            on time
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
