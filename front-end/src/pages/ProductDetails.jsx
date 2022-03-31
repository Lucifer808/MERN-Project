import React from 'react'
import BottomSlide from '../components/layout/Home/BottomSlide';
import ProductDetailsWrap from '../components/layout/ProductDetails/PrductDetailsWrap';
const ProductDetails = () => {
    return (
        <>
            <ProductDetailsWrap />
            <BottomSlide />
            <BottomSlide cate="electronic" />
        </>
    )
}

export default ProductDetails
