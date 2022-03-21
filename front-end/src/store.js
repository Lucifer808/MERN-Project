import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer, productDetailsReducer } from './reducers/productReducers';
import { userReducer } from './reducers/userReducers';
const reducer = combineReducers ({
    products: productReducer,
    productDetails: productDetailsReducer,
    user: userReducer
});

const initialState = {};

const middlewear = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewear)));

export default store;