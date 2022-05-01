import React from 'react'
import styled, {keyframes} from 'styled-components';
import PublicIcon from '@mui/icons-material/Public';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import img from '../../../assets/img/slider/product-ads.png';
import img1 from '../../../assets/img/slider/trending.jpg';
import ReactStars from 'react-rating-stars-component';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import { Link } from 'react-router-dom';
const Up = keyframes `
    from{
        top: 0px;
    }to{
        top: -50px;
        background-color: #fff;
    }
`
const ContainerStyled = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`
const TopSideWrapStyled = styled.div`
    width: 100%;
    background-color: rgb(241,241,241);
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 14px;
`
const TitleWrapStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const TitleStyled = styled.span`
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
`
const PartnerWrapStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 20px 0;  
`
const PartnerTitleStyled = styled.span`
    font-size: 14px;
    font-weight: 400;
    margin-left: 10px;
`
const BannerWrapStyled = styled.div`
    margin-bottom: 60px;
`
const BannerStyled = styled.img`
    object-fit: cover;
`
const SameBrandWrap = styled.div`
    width: 100%;
    height: 1000px;
    border: 1px solid #ccc;
    padding: 10px;
    border-style: hidden solid solid solid;
`
const SameBrandTitleWrapStyled = styled.div`
    padding: 20px 10px;
    background-color: rgb(241, 241, 241);
    border: 1px solid #ccc;
    border-style: solid solid hidden solid;
`
const SameBrandTitleStyled = styled.h3`
    font-size: 16px;
`
const Wrapper = styled.div `
    position: relative;
    height: 400px;
    width: 100%;
    margin: 60px 0;
    border: 1px solid #ccc;
    padding: 10px;
    transition: all 1s linear;
    overflow-y: hidden;
    &:hover  .effect{
        animation: ${Up} ease-out 1s;
        animation-fill-mode: forwards;
    }
`
const Image = styled.img `
    height: 240px;
    width: 100%;
    object-fit: cover;
    position: relative;
    cursor: pointer;
`
const SlideImageTitleStyled = styled.h4`
    margin-top: 20px;
    color: #5266d6;
    cursor: pointer;
    width: 100%;
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
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const FeatureContainer = styled.div`
    width: 100%;
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
    width: 100%;
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
const SlideStarStyled = styled.div``
const SlideTileWrapStyled = styled.div`
    height: 70px;
    width: 100%;
`
const RightSide = () => {
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
        <ContainerStyled>
            <TopSideWrapStyled>
                <TitleWrapStyled>
                    <PublicIcon />
                    <TitleStyled>Giao hàng nhanh chóng trên toàn quốc</TitleStyled>
                </TitleWrapStyled>
                <TitleWrapStyled>
                    <RotateLeftIcon />
                    <TitleStyled>Đổi trả hàng miễn phí trong vòng 7 ngày</TitleStyled>
                </TitleWrapStyled>
                <TitleWrapStyled>
                    <AttachMoneyIcon />
                    <TitleStyled>Cung cấp đầy đủ hóa đơn cho giao dịch</TitleStyled>
                </TitleWrapStyled>
                <TitleWrapStyled>
                    <CreditCardIcon />
                    <TitleStyled>Thanh toán trực tuyến hoặc khi nhận hàng</TitleStyled>
                </TitleWrapStyled>
            </TopSideWrapStyled>
            <PartnerWrapStyled>
                <WarehouseIcon />
                <PartnerTitleStyled>Trở thành đối tác của chúng tôi? <Link to="/">Đăng kí ngay</Link></PartnerTitleStyled>
            </PartnerWrapStyled>
            <BannerWrapStyled>
                <BannerStyled src={img} />
            </BannerWrapStyled>
                <SameBrandTitleWrapStyled>
                    <SameBrandTitleStyled>Sản phẩm cùng thương hiệu</SameBrandTitleStyled>
                </SameBrandTitleWrapStyled>
            <SameBrandWrap>
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
                            <SlidePriceWrapStyled>
                                <SlidedNewPriceStyled>300,000 VND</SlidedNewPriceStyled>
                                <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                            </SlidePriceWrapStyled>
                            <SlideTileWrapStyled>
                                <SlideImageTitleStyled>Apple Macbook Retina Display 12</SlideImageTitleStyled>
                                <SlideStarStyled>
                                    <ReactStars {...options} />
                                </SlideStarStyled>
                            </SlideTileWrapStyled>
                            <SaleOffStyled>
                                <SaleOffPercent>-10%</SaleOffPercent>
                            </SaleOffStyled>            
                </Wrapper>
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
                            <SlidePriceWrapStyled>
                                <SlidedNewPriceStyled>300,000 VND</SlidedNewPriceStyled>
                                <SlidedOldPriceStyled>350,000 VND</SlidedOldPriceStyled>
                            </SlidePriceWrapStyled>
                            <SlideTileWrapStyled>
                                <SlideImageTitleStyled>Apple Macbook Retina Display 12</SlideImageTitleStyled>
                                <SlideStarStyled>
                                    <ReactStars {...options} />
                                </SlideStarStyled>
                            </SlideTileWrapStyled>
                            <SaleOffStyled>
                                <SaleOffPercent>-10%</SaleOffPercent>
                            </SaleOffStyled>            
                </Wrapper>
            </SameBrandWrap>
        </ContainerStyled>
        </>
    )
}

export default RightSide
