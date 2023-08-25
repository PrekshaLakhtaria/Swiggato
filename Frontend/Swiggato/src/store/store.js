// import { applyMiddleware } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "../reducers/cartReducers";
import { placeOrderReducer } from "../reducers/orderReducers";
// import {composeWithDevTools} from '@redux-devtools/extension'
import { getAllFoodReducer } from "../reducers/foodReducers";
import {
  registerUserReducer,
  loginUserReducer,
} from "../reducers/userReducers";

const finalReducer = combineReducers({
  getAllFoodReducer: getAllFoodReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
});

// const composeEnhancers = composeWithDevTools({})

const store = configureStore({
  middleware: [thunk],
  reducer: finalReducer,
});

export default store;
