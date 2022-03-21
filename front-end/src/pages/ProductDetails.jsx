import React from 'react'
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import BottomSlide from '../components/layout/Home/BottomSlide';
import ProductDetailsWrap from '../components/layout/ProductDetails/PrductDetailsWrap';
const ProductDetails = () => {
    return (
        <div>
            <Header />
            <ProductDetailsWrap />
            <BottomSlide />
            <BottomSlide cate="electronic" />
            <Footer />
        </div>
    )
}

export default ProductDetails
