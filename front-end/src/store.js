import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReducer, productDetailsReducer, newReviewReducer, newproductsReducer, productReducer, productReviewsReducer, reviewReducer } from './reducers/productReducers';
import { userReducer, profileReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './reducers/userReducers';
import { cartReducer } from './reducers/cartReducers';
import { newOrderReducer, myOrdersReducer, orderDetailsReducer,allOrdersReducer, orderReducer } from './reducers/orderReducers';
import { wishListReducer } from './reducers/wishListReducers'
const reducer = combineReducers ({
    products: productsReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    newReview: newReviewReducer,
    allOrders: allOrdersReducer,
    allUsers: allUsersReducer,
    product: productReducer,
    newProduct: newproductsReducer,
    order: orderReducer,
    userDetails: userDetailsReducer,
    productReviews: productReviewsReducer,
    review: reviewReducer,
    wishList: wishListReducer
});

const initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
        shippingInfo: localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {},
    },
    wishList: {
        wishListItems: localStorage.getItem("wishListItems")
        ? JSON.parse(localStorage.getItem("wishListItems"))
        : []
    }
};

const middlewear = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewear)));

export default store;