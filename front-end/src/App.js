import React, {useEffect} from "react";
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
function App() {
    useEffect(() =>{
        store.dispatch(loadUser());
    }, [])
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
            </Route>
            <Route path="/password/forgot" element={<ForgotPassword />}></Route>
            <Route path="/products/:keyword" element={<ProductList />}></Route>
            <Route path="/me/password/reset/:token" element={<ResetPassword />}></Route>
            <Route path="/product/:id" element={<ProductDetails />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
        </Routes>
            <Footer />
        </>
    )
};

export default App;
