import axios from "axios";

export const getAllFoods = () => async (dispatch) => {
  dispatch({ type: "GET_FOODS_REQUEST" });

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_SERVER_DOMAIN}/api/foods/getallfoods`
    );
    // console.log(response);
    dispatch({ type: "GET_FOODS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_FOODS_FAILED", payload: error });
  }
};
