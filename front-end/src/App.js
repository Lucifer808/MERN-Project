import React from "react";
import "./App.css";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import LoginSignUp from './components/layout/Auth/LoginSignUp';
import Register from "./components/layout/Auth/Register";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/layout/User/Profile";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
const App = () => {
    return(
        <>
            <Header />
        <Routes>
            <Route path="/" index element={<Home/>}></Route>
            <Route path="/products" element={<ProductList />}></Route>
            <Route path="/login" element={<LoginSignUp />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/account" element={<Profile />}></Route>
            <Route path="/products/:keyword" element={<ProductList />}></Route>
            <Route path="/product/:id" element={<ProductDetails />}></Route>
        </Routes>
            <Footer />
        </>
    )
};

export default App;
