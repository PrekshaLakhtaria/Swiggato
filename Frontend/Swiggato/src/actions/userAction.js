import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const response = await axios.post(
      `http://localhost:5000/api/users/register`,
      user
    );
    console.log("REquest action ..........", response);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    console.log("ERROR..............", error);
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};
