import React from "react";

import aboutus from "../assets/aboutus.jpg";
import invertedcomma from "../assets/inverted_comma.png";

const AboutusScreen = () => {
  return (
    <div className="bg-gradient-to-b from-white via-orange-100 to-white">
      <div className="flex flex-row gap-10 justify-between mx-12 my-40 ">
        <div className="flex flex-col m-20 justify-center w-880">
          <h1 className="text-4xl">
            <span className="underline underline-offset-8 decoration-orange-500">
              Who
            </span>{" "}
            are we?
          </h1>
          <p className="mt-10 text-justify">
            Launched in 2023, Our technology platform connects customers,
            restaurant partners and delivery partners, serving their multiple
            needs. Customers use our platform to search and discover
            restaurants, read and write customer generated reviews and view and
            upload photos, order food delivery, book a table and make payments
            while dining-out at restaurants. On the other hand, we provide
            restaurant partners with industry-specific marketing tools which
            enable them to engage and acquire customers to grow their business
            while also providing a reliable and efficient last mile delivery
            service. We also operate a one-stop procurement solution, Hyperpure,
            which supplies high quality ingredients and kitchen products to
            restaurant partners. We also provide our delivery partners with
            transparent and flexible earning opportunities.
          </p>
        </div>
        <img className="h-510 w-656 mx-10 rounded-b-full" src={aboutus}></img>
      </div>
      <div className="flex flex-col bg-orange-400 p-12 text-justify mb-40">
        <img src={invertedcomma} className="h-26 w-32"></img>
        <p className="text-white text-4xl font-sans font-extralight mb-10 mt-5">
          Our mission is to elevate the quality of life for the urban consumer
          with unparalleled convenience. Convenience is what makes us tick. It's
          what makes us get out of bed and say, "Let's do this."
        </p>
      </div>
    </div>
  );
};

export default AboutusScreen;
