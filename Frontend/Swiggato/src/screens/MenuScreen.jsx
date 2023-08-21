import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import foodDatas from "../../data/foodDatas";
import Food from "../components/Food";
import { getAllFoods } from "../actions/foodActions";

const MenuScreen = () => {
  const dispatch = useDispatch();

  const foodsState = useSelector((state) => state.getAllFoodReducer);

  const { foods, error, loading } = foodsState;

  useEffect(() => {
    dispatch(getAllFoods());
  }, []);

  return (
    <div className="flex flex-row items-center justify-center flex-wrap gap-20 my-10 py-10 bg-gradient-to-b from-white via-orange-200 to-white">
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Something went wrong!!</h1>
      ) : (
        foods.map((foodData) => {
          return (
            <div key={foodData._id}>
              <Food foodData={foodData}/>
              {/* {JSON.stringify(foodData.name)} */}
            </div>
          );
        })
      )}
    </div>
  );
};

export default MenuScreen;
