import React, {useState} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import styled, {keyframes} from 'styled-components';
import img1 from '../../../assets/img/slider/trending.jpg';
import img2 from '../../../assets/img/slider/3.jpg';
import img3 from '../../../assets/img/slider/trending3.jpg';
import img4 from '../../../assets/img/slider/trending4.jpg';
import img5 from '../../../assets/img/slider/trending5.jpg';
import img6 from '../../../assets/img/slider/trending6.jpg';
import img7 from '../../../assets/img/slider/trending7.jpg';
import img8 from '../../../assets/img/slider/trending8.jpg';
import img9 from '../../../assets/img/slider/trending9.jpg';
import img10 from '../../../assets/img/slider/trending10.jpg';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import ReactStars from 'react-rating-stars-component';
const Up = keyframes `
    from{
        top: 0px;
    }to{
        top: -50px;
        background-color: #fff;
    }
`
const Container = styled.div `
    height: 580px;
    width: 100%;
    flex: 2;
    display: flex;
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
    position: relative;
    height: 400px;
    width: 1300px;
    margin: 10px;
    padding-left: 25px;
    transition: all 1s linear;
    overflow-y: hidden;
    &:hover .effect{
        animation: ${Up} ease-out 1s;
        animation-fill-mode: forwards;
    }
`
const Image = styled.img `
    height: 240px;
    width: 240px;
    position: relative;
    cursor: pointer;
`
const SlideContainer = styled.div`
    height: 416px;
    width: 870px;
    flex: 2;
    margin-left: 30px;
    margin-top: 30px;
` 
const SlideImageTitleStyled = styled.h4`
    margin-top: 20px;
    color: #5266d6;
    cursor: pointer;
    width: 240px;
    height: 40px;
    overflow: hidden;
    &:hover{
        color: rgba(252,184,0,0.8);
    }
`
const SaleOffStyled = styled.div `
    position: absolute;
    top: 0;
    width: 40px;
    height: 36px;
    color: #000;
    font-weight: bold;
    background-color: rgb(241,71,5);
    align-items: center;
    &::after{
        content: '';
        position: absolute;
        border-width: 0 20px 4px;
        border-style: solid;
        right: 0;
        color: rgb(241,71,5);
        bottom: -4px;
        border-color: transparent rgb(241,71,5) transparent rgb(241,71,5);
    }
`
const SaleOffPercent = styled.span`
    color: #fff;
`
const FeatureBarStyled = styled.div`
    position: relative;
    width: 240px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const FeatureContainer = styled.div`
    width: 240px;
    height: 240px;
    overflow: hidden;
`
const IconOverlayStyled = styled.div`
    padding: 9px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all linear .2s;
    border-radius: 50%;
    cursor: pointer;
    &:hover{
        background-color: #fcb800;
    }
`
const SlideShopStyled = styled.h5`
    border-bottom: 1px solid lightgray;
    font-weight: 400;
    font-size: 16px;
    width: 240px;
    margin-bottom: 10px;
    cursor: pointer;
`
const SlidePriceWrapStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const SlidedNewPriceStyled = styled.h4`
    color: #77a41c;
`
const SlidedOldPriceStyled = styled.h5`
    margin-left: 10px;
    color: #a1a1a1;
    text-decoration: line-through;
`
const SlideStarStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const HeadingStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    background-color: #f4f4f4;
    width: 98%;
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
const SlideTileWrapStyled = styled.div`
    height: 70px;
    width: 100%;
`
const SlideViewWrapStyled = styled.div`
    display: flex;
    align-items: center;
`
const SlideRatingCountStyled = styled.span``
const BottomSlide = ({...props}) => {
    const [active, setActive] = useState(true);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
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
            <Container id='bottomslide'>
                <SlideContainer>
                    <HeadingStyled>
                        {props.cate === "electronic" ? (
                            <HeadingTitleStyled>Thiết bị điện tử</HeadingTitleStyled>
                        ) : (
                            <HeadingTitleStyled>Thiết bị gia dụng</HeadingTitleStyled>
                        )}
                        <SlideViewWrapStyled>
                            <HeadingViewAllStyled active={active}>Sản phẩm mới</HeadingViewAllStyled>
                            <HeadingViewAllStyled>Bán chạy nhất</HeadingViewAllStyled>
                            <HeadingViewAllStyled>Phổ biến nhất</HeadingViewAllStyled>
                            <HeadingViewAllStyled>Xem tất cả</HeadingViewAllStyled>
                        </SlideViewWrapStyled>
                    </HeadingStyled>
                    <Slider {...settings}>
                        <Wrapper>
                            <FeatureContainer>
                                <Image src={img1}></Image>
                                <FeatureBarStyled className="effect">
                                    <IconOverlayStyled>
                                        <ShoppingBasketOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}} />
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <VisibilityOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <FavoriteBorderOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <InsertChartOutlinedRoundedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                </FeatureBarStyled>
                            </FeatureContainer>
                            <SlideShopStyled>Young Shop</SlideShopStyled>
                            <SlideTileWrapStyled>
                                <SlideImageTitleStyled>Apple Macbook Retina Display 12</SlideImageTitleStyled>
                                <SlideStarStyled>
                                    <ReactStars {...options}/>
                                    <SlideRatingCountStyled style={{marginLeft: '10px'}}>(02)</SlideRatingCountStyled>
                                </SlideStarStyled>
                            </SlideTileWrapStyled>
                            <SlidePriceWrapStyled>
                                <SlidedNewPriceStyled>300,000 VND</SlidedNewPriceStyled>
                                <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                            </SlidePriceWrapStyled>
                            <SaleOffStyled>
                                <SaleOffPercent>-10%</SaleOffPercent>
                            </SaleOffStyled>
                        </Wrapper>
                        <Wrapper>
                            <FeatureContainer>
                                <Image src={img2}></Image>
                                <FeatureBarStyled className="effect">
                                    <IconOverlayStyled>
                                        <ShoppingBasketOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}} />
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <VisibilityOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <FavoriteBorderOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <InsertChartOutlinedRoundedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                </FeatureBarStyled>
                            </FeatureContainer>
                            <SlideShopStyled>Young Shop</SlideShopStyled>
                            <SlideTileWrapStyled>
                                <SlideImageTitleStyled>Sound Intone I65 Earphone White Version</SlideImageTitleStyled>
                                <SlideStarStyled>
                                    <ReactStars {...options}/>
                                    <SlideRatingCountStyled style={{marginLeft: '10px'}}>(02)</SlideRatingCountStyled>
                                </SlideStarStyled>
                            </SlideTileWrapStyled>
                            <SlidePriceWrapStyled>
                                <SlidedNewPriceStyled>300,000 VND</SlidedNewPriceStyled>
                                <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                            </SlidePriceWrapStyled>
                            <SaleOffStyled>
                                <SaleOffPercent>-10%</SaleOffPercent>
                            </SaleOffStyled>
                        </Wrapper>
                        <Wrapper>
                            <FeatureContainer>
                                <Image src={img3}></Image>
                                <FeatureBarStyled className="effect">
                                    <IconOverlayStyled>
                                        <ShoppingBasketOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}} />
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <VisibilityOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <FavoriteBorderOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <InsertChartOutlinedRoundedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                </FeatureBarStyled>
                            </FeatureContainer>
                            <SlideShopStyled>Young Shop</SlideShopStyled>
                            <SlideTileWrapStyled>
                                <SlideImageTitleStyled>ASUS Chromebook Flip – 10.2 Inch</SlideImageTitleStyled>
                                <SlideStarStyled>
                                    <ReactStars {...options}/>
                                    <SlideRatingCountStyled style={{marginLeft: '10px'}}>(02)</SlideRatingCountStyled>
                                </SlideStarStyled>
                            </SlideTileWrapStyled>
                            <SlidePriceWrapStyled>
                                <SlidedNewPriceStyled>300,000 VND</SlidedNewPriceStyled>
                                <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                            </SlidePriceWrapStyled>
                            <SaleOffStyled>
                                <SaleOffPercent>-10%</SaleOffPercent>
                            </SaleOffStyled>
                        </Wrapper>
                        <Wrapper>
                            <FeatureContainer>
                                <Image src={img4}></Image>
                                <FeatureBarStyled className="effect">
                                    <IconOverlayStyled>
                                        <ShoppingBasketOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}} />
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <VisibilityOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <FavoriteBorderOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <InsertChartOutlinedRoundedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                </FeatureBarStyled>
                            </FeatureContainer>
                            <SlideShopStyled>Young Shop</SlideShopStyled>
                            <SlideTileWrapStyled>
                                <SlideImageTitleStyled>Beat Spill 2.0 Wireless Speaker – White</SlideImageTitleStyled>
                                <SlideStarStyled>
                                    <ReactStars {...options}/>
                                    <SlideRatingCountStyled style={{marginLeft: '10px'}}>(02)</SlideRatingCountStyled>
                                </SlideStarStyled>
                            </SlideTileWrapStyled>
                            <SlidePriceWrapStyled>
                                <SlidedNewPriceStyled>300,000 VND</SlidedNewPriceStyled>
                                <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                            </SlidePriceWrapStyled>
                            <SaleOffStyled>
                                <SaleOffPercent>-10%</SaleOffPercent>
                            </SaleOffStyled>
                        </Wrapper>
                        <Wrapper>
                            <FeatureContainer>
                                <Image src={img5}></Image>
                                <FeatureBarStyled className="effect">
                                    <IconOverlayStyled>
                                        <ShoppingBasketOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}} />
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <VisibilityOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <FavoriteBorderOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <InsertChartOutlinedRoundedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                </FeatureBarStyled>
                            </FeatureContainer>
                            <SlideShopStyled>Young Shop</SlideShopStyled>
                            <SlideTileWrapStyled>
                                <SlideImageTitleStyled>LG White Front Load Steam Washer</SlideImageTitleStyled>
                                <SlideStarStyled>
                                    <ReactStars {...options}/>
                                    <SlideRatingCountStyled style={{marginLeft: '10px'}}>(02)</SlideRatingCountStyled>
                                </SlideStarStyled>
                            </SlideTileWrapStyled>
                            <SlidePriceWrapStyled>
                                <SlidedNewPriceStyled>300,000 VND</SlidedNewPriceStyled>
                                <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                            </SlidePriceWrapStyled>
                            <SaleOffStyled>
                                <SaleOffPercent>-10%</SaleOffPercent>
                            </SaleOffStyled>
                        </Wrapper>
                        <Wrapper>
                            <FeatureContainer>
                                <Image src={img6}></Image>
                                <FeatureBarStyled className="effect">
                                    <IconOverlayStyled>
                                        <ShoppingBasketOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}} />
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <VisibilityOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <FavoriteBorderOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <InsertChartOutlinedRoundedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                </FeatureBarStyled>
                            </FeatureContainer>
                            <SlideShopStyled>Young Shop</SlideShopStyled>
                            <SlideTileWrapStyled>
                                <SlideImageTitleStyled>Amcrest Security Camera in White Color</SlideImageTitleStyled>
                                <SlideStarStyled>
                                    <ReactStars {...options}/>
                                    <SlideRatingCountStyled style={{marginLeft: '10px'}}>(02)</SlideRatingCountStyled>
                                </SlideStarStyled>
                            </SlideTileWrapStyled>
                            <SlidePriceWrapStyled>
                                <SlidedNewPriceStyled>300,000 VND</SlidedNewPriceStyled>
                                <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                            </SlidePriceWrapStyled>
                            <SaleOffStyled>
                                <SaleOffPercent>-10%</SaleOffPercent>
                            </SaleOffStyled>
                        </Wrapper>
                        <Wrapper>
                            <FeatureContainer>
                                <Image src={img7}></Image>
                                <FeatureBarStyled className="effect">
                                    <IconOverlayStyled>
                                        <ShoppingBasketOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}} />
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <VisibilityOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <FavoriteBorderOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <InsertChartOutlinedRoundedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                </FeatureBarStyled>
                            </FeatureContainer>
                            <SlideShopStyled>Young Shop</SlideShopStyled>
                            <SlideTileWrapStyled>
                                <SlideImageTitleStyled>EPSION Plaster Printer 2</SlideImageTitleStyled>
                                <SlideStarStyled>
                                    <ReactStars {...options}/>
                                    <SlideRatingCountStyled style={{marginLeft: '10px'}}>(02)</SlideRatingCountStyled>
                                </SlideStarStyled>
                            </SlideTileWrapStyled>
                            <SlidePriceWrapStyled>
                                <SlidedNewPriceStyled>300,000 VND</SlidedNewPriceStyled>
                                <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                            </SlidePriceWrapStyled>
                            <SaleOffStyled>
                                <SaleOffPercent>-10%</SaleOffPercent>
                            </SaleOffStyled>
                        </Wrapper>
                        <Wrapper>
                            <FeatureContainer>
                                <Image src={img8}></Image>
                                <FeatureBarStyled className="effect">
                                    <IconOverlayStyled>
                                        <ShoppingBasketOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}} />
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <VisibilityOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <FavoriteBorderOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <InsertChartOutlinedRoundedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                </FeatureBarStyled>
                            </FeatureContainer>
                            <SlideShopStyled>Young Shop</SlideShopStyled>
                            <SlideTileWrapStyled>
                                <SlideImageTitleStyled>Aroma Rice Cooker</SlideImageTitleStyled>
                                <SlideStarStyled>
                                    <ReactStars {...options}/>
                                    <SlideRatingCountStyled style={{marginLeft: '10px'}}>(02)</SlideRatingCountStyled>
                                </SlideStarStyled>
                            </SlideTileWrapStyled>
                            <SlidePriceWrapStyled>
                                <SlidedNewPriceStyled>300,000 VND</SlidedNewPriceStyled>
                                <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                            </SlidePriceWrapStyled>
                            <SaleOffStyled>
                                <SaleOffPercent>-10%</SaleOffPercent>
                            </SaleOffStyled>
                        </Wrapper>
                        <Wrapper>
                            <FeatureContainer>
                                <Image src={img9}></Image>
                                <FeatureBarStyled className="effect">
                                    <IconOverlayStyled>
                                        <ShoppingBasketOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}} />
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <VisibilityOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <FavoriteBorderOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <InsertChartOutlinedRoundedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                </FeatureBarStyled>
                            </FeatureContainer>
                            <SlideShopStyled>Young Shop</SlideShopStyled>
                            <SlideTileWrapStyled>
                                <SlideImageTitleStyled>Samsung UHD TV 24inch</SlideImageTitleStyled>
                                <SlideStarStyled>
                                    <ReactStars {...options}/>
                                    <SlideRatingCountStyled style={{marginLeft: '10px'}}>(02)</SlideRatingCountStyled>
                                </SlideStarStyled>
                            </SlideTileWrapStyled>
                            <SlidePriceWrapStyled>
                                <SlidedNewPriceStyled>300,000 VND</SlidedNewPriceStyled>
                                <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                            </SlidePriceWrapStyled>
                            <SaleOffStyled>
                                <SaleOffPercent>-10%</SaleOffPercent>
                            </SaleOffStyled>
                        </Wrapper>
                        <Wrapper>
                            <FeatureContainer>
                                <Image src={img10}></Image>
                                <FeatureBarStyled className="effect">
                                    <IconOverlayStyled>
                                        <ShoppingBasketOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}} />
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <VisibilityOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <FavoriteBorderOutlinedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                    <IconOverlayStyled>
                                        <InsertChartOutlinedRoundedIcon style={{margin: '0 10px', fontSize: '16px'}}/>
                                    </IconOverlayStyled>
                                </FeatureBarStyled>
                            </FeatureContainer>
                            <SlideShopStyled>Young Shop</SlideShopStyled>
                            <SlideTileWrapStyled>
                                <SlideImageTitleStyled>Iphone 6+ 32GB </SlideImageTitleStyled>
                                <SlideStarStyled>
                                    <ReactStars {...options}/>
                                    <SlideRatingCountStyled style={{marginLeft: '10px'}}>(02)</SlideRatingCountStyled>
                                </SlideStarStyled>
                            </SlideTileWrapStyled>
                            <SlidePriceWrapStyled>
                                <SlidedNewPriceStyled>300,000 VND</SlidedNewPriceStyled>
                                <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                            </SlidePriceWrapStyled>
                            <SaleOffStyled>
                                <SaleOffPercent>-10%</SaleOffPercent>
                            </SaleOffStyled>
                        </Wrapper>
                    </Slider>
                </SlideContainer>
            </Container>
            </>
    )
}

export default BottomSlide
