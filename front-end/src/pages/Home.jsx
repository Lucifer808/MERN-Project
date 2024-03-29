import React from 'react'
import Banner from '../components/layout/Home/Banner';
import Services from '../components/layout/Home/Services';
import Trending from '../components/layout/Home/Trending';
import ScrollToTop from '../components/layout/ScrollToTop';
import SlideImage from '../components/layout/Home/SlideImage';
import Categories from '../components/layout/Home/Categories';
import BottomSlide from '../components/layout/Home/BottomSlide';
import NewArrivals from '../components/layout/Home/NewArrivals';
const Home = () => {
    return (
        <>
            <ScrollToTop />
            <Banner />
            <Services />
            <Trending />
            <SlideImage slide="top"/>
            <Categories />
            <BottomSlide cate="electronic"/>
            <BottomSlide />
            <SlideImage/>
            <NewArrivals />
        </>
    )
}

export default Home
