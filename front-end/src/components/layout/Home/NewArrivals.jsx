import React, {useState} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import styled from 'styled-components';
import img1 from '../../../assets/img/slider/trending.jpg';
import img2 from '../../../assets/img/slider/3.jpg';
import img3 from '../../../assets/img/slider/trending3.jpg';
import img4 from '../../../assets/img/slider/trending4.jpg';
import img5 from '../../../assets/img/slider/trending5.jpg';
import img6 from '../../../assets/img/slider/trending6.jpg';
import img7 from '../../../assets/img/slider/trending7.jpg';
import img8 from '../../../assets/img/slider/trending8.jpg';
import ReactStars from 'react-rating-stars-component';
const Container = styled.div `
    height: 400px;
    width: 100%;
`
const Wrapper = styled.div `
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
`
const HeadingStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    background-color: #f4f4f4;
    width: 100%;
    margin-bottom: 20px;
`
const HeadingTitleStyled = styled.h3`
    margin: 10px 0 10px 10px;
    font-weight: 400;
`
const HeadingViewAllStyled = styled.h4`
    font-weight: 300;
    margin: 10px 20px 10px 20px;
    cursor: pointer;
    color: ${({active}) => active ? '#fcb800' : ''};
    font-weight: ${({active}) => active ? '400' : ''};
`
const Image = styled.img `
    height: 90px;
    width: 90px;
    cursor: pointer;
    display: flex;
`
const SlideContainer = styled.div`
    margin: 30px;
` 
const SlideImageTitleStyled = styled.h4`
    margin-top: 20px;
    color: #5266d6;
    cursor: pointer;
    height: 40px;
    width: 190px;
    &:hover{
        color: rgba(252,184,0,0.8);
    }
`
const FeatureContainer = styled.div`
    width: 90px;
    height: 100px;
`
const SlidedNewPriceStyled = styled.h4`
    color: #77a41c;
    font-size: 14px;
`
const SlidedOldPriceStyled = styled.h5`
    margin-top: 2px;
    color: #a1a1a1;
    font-size: 12px;
    text-decoration: line-through;
`
const SlideStarStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const SlideTileWrapStyled = styled.div`
    margin-right: 80px;
    margin-bottom: 40px;
`
const SlideViewWrapStyled = styled.div`
    display: flex;
    align-items: center;
`
const PriceWrapWtyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const NewArrivals = () => {
    const [active, setActive] = useState(true)
    const settings = {
        className: "center",
        centerMode: true,
        infinite: false,
        centerPadding: "30px",
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 2
    };
    const options = {
        edit: false,
        color: 'rgba(20, 20, 20, .4)',
        activeColor: '#fcb800',
        size: window.innerWidth < 600 ? 15 : 20,
        value: 4.5,
        isHalf: true
    }
    return (
        <>
            <Container id='newarrivals'>
                <SlideContainer>
                    <HeadingStyled>
                            <HeadingTitleStyled>Sản phẩm mới nổi bật</HeadingTitleStyled>
                        <SlideViewWrapStyled>
                            <HeadingViewAllStyled active={active}>Thiết bị điện tử</HeadingViewAllStyled>
                            <HeadingViewAllStyled>Điện tử gia dụng</HeadingViewAllStyled>
                            <HeadingViewAllStyled>Máy vi tính & Laptop</HeadingViewAllStyled>
                            <HeadingViewAllStyled>Xem tất cả</HeadingViewAllStyled>
                        </SlideViewWrapStyled>
                    </HeadingStyled>
                    <Slider {...settings} >
                        <Wrapper>
                                <FeatureContainer>
                                    <Image src={img1}></Image>
                                </FeatureContainer>
                                <SlideTileWrapStyled>
                                    <SlideImageTitleStyled>Apple Macbook Retina Display 12</SlideImageTitleStyled>
                                    <SlideStarStyled>
                                        <ReactStars {...options} />
                                    </SlideStarStyled>
                                    <PriceWrapWtyled>
                                        <SlidedNewPriceStyled>300,000 VND</SlidedNewPriceStyled>
                                        <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                                    </PriceWrapWtyled>
                                </SlideTileWrapStyled>
                            <FeatureContainer>
                                <Image src={img2}></Image>
                            </FeatureContainer>
                            <SlideTileWrapStyled>
                                <SlideImageTitleStyled>Sound Intone I65 Earphone White Version</SlideImageTitleStyled>
                                <SlideStarStyled>
                                    <ReactStars {...options} />
                                </SlideStarStyled>
                                <SlidedNewPriceStyled>300,000 VND</SlidedNewPriceStyled>
                                <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                            </SlideTileWrapStyled>
                            <FeatureContainer>
                                <Image src={img3}></Image>
                            </FeatureContainer>
                            <SlideTileWrapStyled>
                                <SlideImageTitleStyled>ASUS Chromebook Flip – 10.2 Inch</SlideImageTitleStyled>
                                <SlideStarStyled>
                                    <ReactStars {...options} />
                                </SlideStarStyled>
                                <SlidedNewPriceStyled>300,000 VND</SlidedNewPriceStyled>
                                <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                            </SlideTileWrapStyled>
                            <FeatureContainer>
                                <Image src={img4}></Image>
                            </FeatureContainer>
                            <SlideTileWrapStyled>
                                <SlideImageTitleStyled>Beat Spill 2.0 Wireless Speaker – White</SlideImageTitleStyled>
                                <SlideStarStyled>
                                    <ReactStars {...options} />
                                </SlideStarStyled>
                                <SlidedNewPriceStyled>300,000 VND</SlidedNewPriceStyled>
                                <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                            </SlideTileWrapStyled>
                        </Wrapper>
                        <Wrapper>
                            <FeatureContainer>
                                <Image src={img5}></Image>
                            </FeatureContainer>
                            <SlideTileWrapStyled>
                                <SlideImageTitleStyled>LG White Front Load Steam Washer</SlideImageTitleStyled>
                                <SlideStarStyled>
                                    <ReactStars {...options} />
                                </SlideStarStyled>
                                <SlidedNewPriceStyled>300,000 VND</SlidedNewPriceStyled>
                                <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                            </SlideTileWrapStyled>
                            <FeatureContainer>
                                <Image src={img6}></Image>
                            </FeatureContainer>
                            <SlideTileWrapStyled>
                                <SlideImageTitleStyled>Amcrest Security Camera in White Color</SlideImageTitleStyled>
                                <SlideStarStyled>
                                    <ReactStars {...options} />
                                </SlideStarStyled>
                                <SlidedNewPriceStyled>300,000 VND</SlidedNewPriceStyled>
                                <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                            </SlideTileWrapStyled>
                            <FeatureContainer>
                                <Image src={img7}></Image>
                            </FeatureContainer>
                            <SlideTileWrapStyled>
                                <SlideImageTitleStyled>EPSION Plaster Printer 2</SlideImageTitleStyled>
                                <SlideStarStyled>
                                    <ReactStars {...options} />
                                </SlideStarStyled>
                                <SlidedNewPriceStyled>300,000 VND</SlidedNewPriceStyled>
                                <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                            </SlideTileWrapStyled>
                            <FeatureContainer>
                                <Image src={img8}></Image>
                            </FeatureContainer>
                            <SlideTileWrapStyled>
                                <SlideImageTitleStyled>Aroma Rice Cooker</SlideImageTitleStyled>
                                <SlideStarStyled>
                                    <ReactStars {...options} />
                                </SlideStarStyled>
                                <SlidedNewPriceStyled>300,000 VND</SlidedNewPriceStyled>
                                <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                            </SlideTileWrapStyled>
                        </Wrapper>
                    </Slider>
                </SlideContainer>
            </Container>
            </>
    )
}

export default NewArrivals
