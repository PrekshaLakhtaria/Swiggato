// import { applyMiddleware } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "../reducers/cartReducers";
// import {composeWithDevTools} from '@redux-devtools/extension'
import { getAllFoodReducer } from "../reducers/foodReducers";

const finalReducer = combineReducers({
  getAllFoodReducer: getAllFoodReducer,
  cartReducer: cartReducer,
});

// const composeEnhancers = composeWithDevTools({})

const store = configureStore({
  middleware: [thunk],
  reducer: finalReducer,
});

export default store;
