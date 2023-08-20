import {combineReducers} from 'redux'

// import { applyMiddleware } from 'redux'

import {configureStore} from '@reduxjs/toolkit'

import thunk from 'redux-thunk'

// import {composeWithDevTools} from '@redux-devtools/extension'

import { getAllFoodReducer } from '../reducers/foodReducers'

const finalReducer = combineReducers({
    getAllFoodReducer : getAllFoodReducer
})

const initialState = {}

// const composeEnhancers = composeWithDevTools({})

const store = configureStore({
    middleware: [thunk],
    reducer: finalReducer, 
    initialState})

export default store