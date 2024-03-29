import React, {useEffect, useState} from "react";
import "./App.css";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import LoginSignUp from './components/layout/Auth/LoginSignUp';
import Register from "./components/layout/Auth/Register";
import { Routes, Route } from "react-router-dom";
import UserInfo from "./components/layout/User/UserInfo";
import UpdateProfile from "./components/layout/User/UpdateProfile";
import ChangePassword from "./components/layout/User/ChangePassword";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import store from './store';
import ForgotPassword from "./components/layout/Auth/ForgotPassword";
import { loadUser } from "./actions/userAction";
import ProtectedRoute from "./components/route/ProtectedRoute";
import ResetPassword from "./components/layout/User/ResetPassword";
import Cart from "./components/layout/Cart/Cart";
import Shipping from "./components/layout/Cart/Shipping";
import ConfirmOrder from "./components/layout/Cart/ConfirmOrder";
import axios from 'axios';
import { useSelector } from 'react-redux';
import Payment from "./components/layout/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./components/layout/Cart/OrderSuccess";
import MyOrders from "./components/layout/User/MyOrders";
import OrderDetails from "./components/layout/Order/OrderDetails";
import Dashboard from "./components/layout/admin/Dashboard";
import ProductListAdmin from "./components/layout/admin/ProductListAdmin";
import NewProduct from "./components/layout/admin/NewProduct";
import UpdateProduct from "./components/layout/admin/UpdateProduct";
import OrderList from "./components/layout/admin/OrderList";
import ProcessOrder from "./components/layout/admin/ProcessOrder";
import UsersList from "./components/layout/admin/UsersList";
import UpdateUser from "./components/layout/admin/UpdateUser";
import ProductReviews from "./components/layout/admin/ProductReviews"
import WishList from "./components/layout/WishList/WishList";
function App() {
    const { isAuthenticated } = useSelector((state) => state.user);

    const [stripeApiKey, setStripeApiKey] = useState("");

    async function getStripeApiKey() {
        const { data } = await axios.get("/api/v1/stripeapikey");
        console.log(data);
        setStripeApiKey(data.stripeApiKey);
    }
    useEffect(() =>{
        store.dispatch(loadUser());
    }, [])
    useEffect(() =>{
        getStripeApiKey();
    }, [isAuthenticated]);
    return(
        <>
            <Header />
        <Routes>
            <Route path="/" index element={<Home/>}></Route>
            <Route path="/products" element={<ProductList />}></Route>
            <Route path="/login" element={<LoginSignUp />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route element={<ProtectedRoute />}>
                <Route path="/account" element={<UserInfo />}></Route>
                <Route path="/me/update" element={<UpdateProfile />}></Route>
                <Route path="/me/password/update" element={<ChangePassword />}></Route>
                <Route path="/order/confirm" element={<ConfirmOrder />}></Route>
                {stripeApiKey && (
                        <Route 
                            path="/process/payment" 
                            element={
                            <Elements stripe={loadStripe(stripeApiKey)}>
                                <Payment />
                            </Elements>}>
                        </Route>
                )}
                <Route path="/success" element={<OrderSuccess />}></Route>
                <Route path="/orders" element={<MyOrders />}></Route>
                <Route path="/order/:id" element={<OrderDetails />}></Route>
                <Route path="/admin/dashboard" element={<Dashboard />}></Route>
                <Route path="/admin/products" element={<ProductListAdmin />}></Route>
                <Route path="/admin/product" element={<NewProduct />}></Route>
                <Route path="/admin/product/:id" element={<UpdateProduct />}></Route>
                <Route path="/admin/orders" element={<OrderList />}></Route>
                <Route path="/admin/order/:id" element={<ProcessOrder />}></Route>
                <Route path="/admin/users" element={<UsersList />}></Route>
                <Route path="/admin/user/:id" element={<UpdateUser />}></Route>
                <Route path="/admin/reviews" element={<ProductReviews />}></Route>
            </Route>
            <Route path="/login/shipping" element={<Shipping />}></Route>
            <Route path="/password/forgot" element={<ForgotPassword />}></Route>
            <Route path="/products/:keyword" element={<ProductList />}></Route>
            <Route path="/me/password/reset/:token" element={<ResetPassword />}></Route>
            <Route path="/product/:id" element={<ProductDetails />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/wishlist" element={<WishList />}></Route>
        </Routes>
            <Footer />
        </>
    )
};

export default App;
