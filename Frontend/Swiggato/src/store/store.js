import {combineReducers} from 'redux'

// import { applyMiddleware } from 'redux'

import {configureStore} from '@reduxjs/toolkit'

import thunk from 'redux-thunk'

// import {composeWithDevTools} from '@redux-devtools/extension'

import { getAllFoodReducer } from '../reducers/foodReducers'
import { cartReducer } from '../reducers/cartReducers'

const finalReducer = combineReducers({
    getAllFoodReducer : getAllFoodReducer,
    cartReducer : cartReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

console.log("cart store "+cartItems[0]);

const initialState = {
    cartReducer : {
        cartItems : cartItems
    }
}
console.log("initial state:"+initialState);

// const composeEnhancers = composeWithDevTools({})

const store = configureStore({
    middleware: [thunk],
    reducer: finalReducer, 
    initialState})

export default store