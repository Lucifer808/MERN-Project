import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import RightArrow from '../../../assets/slick-arrow/arrow1.svg';
import LeftArrow from '../../../assets/slick-arrow/arrow2.svg';
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../assets/img/slider/slide1.jpg';
import img2 from '../../../assets/img/slider/slide2.jpg';
import img3 from '../../../assets/img/slider/slide3.jpeg';
import styled from 'styled-components';
import side1 from '../../../assets/img/slider/promotion-1.jpg';
import side2 from '../../../assets/img/slider/promotion-2.jpg';
const Container = styled.div `
    height: 466px;
    width: 860px;
    flex: 2;
    display: flex;
    z-index: 1;
    .slick-arrow{
        background-color: #000;
        position: absolute;
        background-color: transparent;
        display: flex;
        top: 50px;
        height: 30px;
        width: 30px;
        margin: 160px 24px;
        z-index: 2;
        color: black !important;
        transition: all .2s linear;
        &:hover{
            background-color: yellow;
        }
    }
`
const Wrapper = styled.div `
    height: 416px;
    width: 870px;
`
const Image = styled.img `
    height: 100%;
    width: 100%;
    position: relative;
`
const SideImgSlide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    margin-left: 40px;
    height: 416px;
`
const ImageSlide = styled.img`
    width: 380px;
    height: 154px;
`
const SlideContainer = styled.div`
    height: 416px;
    width: 870px;
    flex: 2;
    margin-left: 30px;
    margin-top: 30px;
`
const Banner = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
    );
    
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="nextArrow" {...props} />
    );
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 4500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: "linear",
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
    };
    return (
        <>
        <Container id='banner'>
            <SlideContainer>
                <Slider {...settings}>
                <Wrapper>
                    <Image src={img1}></Image>
                </Wrapper>
                <Wrapper>
                    <Image src={img2}></Image>
                </Wrapper>
                <Wrapper>
                    <Image src={img3}></Image>
                </Wrapper>
                </Slider>
            </SlideContainer>
            <SideImgSlide>
                <ImageSlide src={side1}></ImageSlide>
                <ImageSlide src={side2}></ImageSlide>
            </SideImgSlide>
        </Container>
        </>
    )
}

export default Banner
