import React from "react";
import foodDatas from "../../data/foodDatas";
import Food from "../components/Food";

const Menu = () => {
  return (
      <div className="flex flex-row items-center justify-center flex-wrap gap-20 my-10 py-20 bg-gradient-to-b from-white via-orange-200 to-white">
        {foodDatas.map((foodData) => {
          return (
            <div>
              <Food foodData={foodData} />
              {/* {JSON.stringify(foodData.name)} */}
            </div>
          );
        })}
      </div>
  );
};

export default Menu;
