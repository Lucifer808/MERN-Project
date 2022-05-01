import React from 'react';
import styled, {keyframes} from 'styled-components';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import { Rating } from "@material-ui/lab";
import {Link} from 'react-router-dom';
const ContainerStyled = styled.div`
    flex: 1;
    min-width: 25%;
    max-width: 25%;
`
const Up = keyframes `
    from{
        top: 0px;
    }to{
        top: -50px;
        background-color: #fff;
    }
`
const Wrapper = styled.div `
    position: relative;
    height: 400px;
    width: 100%;
    margin: 10px 0;
    transition: all 1s linear;
    overflow-y: hidden;
    &:hover .effect{
        animation: ${Up} ease-out 1s;
        animation-fill-mode: forwards;
    }
`
const Image = styled.img `
    height: 200px;
    width: 200px;
    position: relative;
    cursor: pointer;
`
const SlideImageTitleStyled = styled.h4`
    margin-top: 20px;
    color: #5266d6;
    cursor: pointer;
    width: 200px;
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
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const FeatureContainer = styled.div`
    width: 200px;
    height: 200px;
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
    width: 200px;
    padding-bottom: 10px;
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
const SlideTileWrapStyled = styled.div`
    height: 70px;
    width: 100%;
`
const SlideRatingCountStyled = styled.span``
const Product = ({product}) => {
    const ratingOptions = {
        value: product.ratings,
        readOnly: true,
        precision: 0.5
    }
    return (
        <>
        <ContainerStyled>
        <Link to={`/product/${product._id}`} style={{color: 'black', textDecoration: 'none'}}>
                <Wrapper>
                    <FeatureContainer>
                        <Image src={product.images[0].url}></Image>
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
                            <SlideImageTitleStyled>{product.name}</SlideImageTitleStyled>
                            <SlideStarStyled>
                                <Rating {...ratingOptions}/>
                                <SlideRatingCountStyled style={{marginLeft: '10px'}}>({product.numOfReviews} Đánh giá)</SlideRatingCountStyled>
                            </SlideStarStyled>
                        </SlideTileWrapStyled>
                            <SlidePriceWrapStyled>
                                <SlidedNewPriceStyled>{product.price.toLocaleString()} VND</SlidedNewPriceStyled>
                                <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                            </SlidePriceWrapStyled>
                            <SaleOffStyled>
                                <SaleOffPercent>-10%</SaleOffPercent>
                            </SaleOffStyled>
                </Wrapper>
            </Link>
        </ContainerStyled>
        </>
    )
}

export default Product
