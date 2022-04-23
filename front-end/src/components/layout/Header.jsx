import React, {useState} from "react";
import styled, {keyframes} from "styled-components";
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import BlenderIcon from '@mui/icons-material/Blender';
import TvIcon from '@mui/icons-material/Tv';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img/slider/2.jpg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserOptions from "./Auth/UserOptions";
const ConatinerStyled = styled.div`
    height: 140px;
    background-color: #fcb800;
`;
const TopWrapperStyled = styled.div`
    padding: 30px;
    display: flex;
    align-items: center;
    height: 90px;
    border-bottom: 1px solid #d69d00;
`;
const BottomWrapperStyled = styled.div`
    padding: 25px 30px 30px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
`
const LeftSideStyled = styled.div `
`
const CenterSideStyled = styled.div `
`
const RightSideStyled = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 30px;
`
const LogoStyled = styled.h1`
    font-weight: bold;
    cursor: pointer;
`
const SearchContainerStyled = styled.form`
    margin-left: 140px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    width: 620px;
`
const SearchStyled = styled.input `
    height: 42px;
    width: 360px;
    outline: none;
    border: none;
    border-left: 0.5px solid lightgray;
    padding-left: 10px;
`
const SelectStyled = styled.select`
    border: none;
    width: 160px;
    height: 42px;
    outline: none;
    padding: 10px 20px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;
`
const OptionsStyled = styled.option`
    width: 100%;
`
const SearchBtnStyled = styled.button`
    height: 42px;
    width: 100px;
    background-color: #000;
    color: #fff;
    outline: none;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-weight: bold;
    cursor: pointer;
`
const IconWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .1s ease-in;
    &:hover{
        color: #fff;
        cursor: pointer;
    }
`
const CartIconWrapperStyled = styled.div`
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .1s ease-in;
    position: relative;
    &:hover .cart-icon{
        color: #fff;
        cursor: pointer;
    }
    &:hover .cart{
        display: block;
    }
`
const AuthStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const AuthTitleSideStyled = styled.div `
`
const AuthTitleStyled = styled.h3 `
    font-size: 16px;
    transition: all .1s ease-in;
    &:hover{
        color: #fff;
        cursor: pointer;
    }
`
const LeftBottomStyled = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    &:hover .cate{
        display: block;
    }
`
const BottomTitleStyled = styled.h3 `
    font-size: 16px;
    margin-left: 10px;
    font-weight: 400;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const CenterBottomStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const RightBottomStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const NoticeStyled = styled.span `
    position: absolute;
    background-color: #000;
    color: #fff;
    padding: 2px 6px;
    border-radius: 50%;
    font-size: 14px;
    top: 48px;
    margin-left: 18px;
    padding-bottom: 0;
`
const CartNoticeStyled = styled.span `
    position: absolute;
    background-color: #000;
    color: #fff;
    padding: 2px 6px;
    border-radius: 50%;
    font-size: 14px;
    top: 20px;
    margin-left: 18px;
    padding-bottom: 0;
`
const fadeIn = keyframes `
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const CateWrapperStyled = styled.div`
    position: absolute;
    background-color: #fff;
    left: 0;
    display: none;
    width: 260px;
    list-style-type: none;
    margin-top: 340px;
    border: 2px solid lightgray;
    z-index: 4;
    animation: ${fadeIn} ease-in .2s;
    &::before {
        content: '';
        position: absolute;
        top: -16px;
        right: 0px;
        width: 100%;
        height: 20px;
        display: block;
        background-color: transparent;
    }
`
const CateListStyled = styled.ul``
const CateListItemStyled = styled.li`
    padding: 12px 0 12px 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 400;
    list-style-type: none;
    &:hover{
        background-color: #fcb800;
    }
`
const CateListItemOptionStyled = styled.span`
    margin-left: 10px;
    font-weight: 400;
`
const BottomMoneyTitleStyled = styled.h3`
    font-size: 16px;
    margin-left: 10px;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 16px;
    position: relative;
    font-weight: 400;
    &:hover .money{
        display: block
    }
`
const MoneyWrapperStyled = styled.div`
    position: absolute;
    z-index: 2;
    margin-top: 90px;
    background-color: #fff;
    width: 100px;
    margin-right: 60px;
    border: 2px solid lightgray;
    display: none;
    animation: ${fadeIn} ease-in .2s;
`
const MoneyListStyled = styled.ul`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    list-style-type: none;
    padding: 0px 10px;
`
const MoneyListItemStyled = styled.li`
    cursor: pointer;
    margin: 10px 0;
`
const MoneyTitleStyled = styled.span`
    font-weight: 400;
`
const BottomLanguageTitleStyled = styled.div`
    font-size: 16px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    &:hover .language{
        display: block
    }
`
const LanguageWrapperStyled = styled.div`
    position: absolute;
    margin-top: 90px;
    z-index: 2;
    background-color: #fff;
    width: 130px;
    margin-right: 20px;
    border: 2px solid lightgray;
    display: none;
    animation: ${fadeIn} ease-in .2s;
`
const LanguageListStyled = styled.ul`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    list-style-type: none;
    padding: 0px 10px;
`
const LanguageListItemStyled = styled.li`
    cursor: pointer;
    margin: 10px 0;
`
const LanguageTitleStyled = styled.span``
const CartWrapperStyled = styled.div`
    display: none;
    background-color: #fff;
    position: absolute;
    width: 370px;
    height: 380px;
    border: 2px solid lightgray;
    z-index: 4;
    top: 40px;
    right: 4px;
    animation: ${fadeIn} ease-in .2s;
    &::before{
        content: '';
        position: absolute;
        height: 10px;
        top: -10px;
        width: 100%;
        background-color: transparent;
    }
`
const CartTopStyled = styled.div`
    margin: 20px;
    cursor: pointer;
    &::-webkit-scrollbar {
    display: none;
}
`
const CartListStyled = styled.ul`
    list-style-type: none;
    max-height: 240px;
    overflow: auto;
    width: 100%;
`
const CartItemStyled = styled.li`
    display: flex;
    margin-bottom: 20px;
    padding-right: 10px;
`
const CartBottomStyled = styled.div`
    margin: 0px 20px 20px 20px;
`
const CartImgStyled = styled.img`
    height: 60px;
    width: 60px;
`
const CartItemHeadStyled = styled.div`
    display: flex;
    margin-left: 4px;
`
const CartItemHeadTitleStyled = styled.h4`
    color: #5266d6;
    transition: all .1s ease-in;
    margin-bottom: 5px;
    &:hover { 
        color: #fcb800;
    }
`
const CartItemHeadPriceWrapStyled = styled.div``
const CartItemHeadPriceStyled = styled.span``
const CartItemHeadMultyplyStyled = styled.span`
    margin: 0 5px;
`
const CartItemHeadQuantityStyled = styled.span``
const CartItemHeadBtnStyled = styled.button`
    border: none;
    background-color: #fff;
    font-size: 20px;
    fon-weight: 300;
    padding-left: 4px;
    width: 20px;
    height: 20px;
    cursor: pointer;
`
const CartBottomTotalWrapStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const CartBottomTotalTitleStyled = styled.h3``
const CartBottomTotalPriceStyled = styled.span`
    color: red;
    font-weight: bold;
`
const CartBottomBtnWrapStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`
const CartBottomredirectStyled = styled.button`
    padding: 14px 26px;
    background-color: #fcb800;
    border: none;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: all .2s ease-in;
    &:hover{
        background-color: #222222;
        color: #fff;
    }
`

const Header = () => {
    const navigate = useNavigate();
    const {user, isAuthenticated} = useSelector((state) => state.user);
    const [keyword, setKeyword] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        if(keyword.trim()){
            navigate(`/products/${keyword}`);
        }else{
            navigate('/products')
        }
    }
    return (
        <>
        <ConatinerStyled id="header">
            <TopWrapperStyled>
                <LeftSideStyled>
                    <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
                        <LogoStyled>smart<b style={{ color: 'white' }}>Shop</b></LogoStyled>
                    </Link>
                </LeftSideStyled>
                <CenterSideStyled>
                    <SearchContainerStyled onSubmit={submitHandler}>
                        <SelectStyled>
                            <OptionsStyled>Tất cả</OptionsStyled>
                        </SelectStyled>
                        <SearchStyled 
                        type="text" 
                        placeholder="Tìm kiếm sản phẩm..."
                        onChange={(e) => setKeyword(e.target.value)}
                        ></SearchStyled>
                        <SearchBtnStyled type="submit">Tìm kiếm</SearchBtnStyled>   
                    </SearchContainerStyled>
                </CenterSideStyled>
                <RightSideStyled>
                    <IconWrapperStyled>
                        <InsertChartOutlinedIcon style={{fontSize: '36px'}}/>
                        <NoticeStyled>3</NoticeStyled>
                    </IconWrapperStyled>
                    <IconWrapperStyled>
                        <FavoriteBorderOutlinedIcon style={{fontSize: '36px'}}/>
                        <NoticeStyled>3</NoticeStyled>
                    </IconWrapperStyled>
                    <CartIconWrapperStyled>
                        <LocalMallOutlinedIcon className="cart-icon" style={{fontSize: '36px'}}/>
                        <CartNoticeStyled>3</CartNoticeStyled>
                        <CartWrapperStyled className="cart">
                            <CartTopStyled>
                                <CartListStyled>
                                    <CartItemStyled>
                                        <CartImgStyled src={img1} />
                                        <CartItemHeadStyled>
                                            <CartItemHeadPriceWrapStyled>
                                                <CartItemHeadTitleStyled>Grand Slam Indoor Of Show Jumping Novel</CartItemHeadTitleStyled>
                                                <CartItemHeadPriceStyled>26,000,000 VND</CartItemHeadPriceStyled>
                                                <CartItemHeadMultyplyStyled>x</CartItemHeadMultyplyStyled>
                                                <CartItemHeadQuantityStyled>2</CartItemHeadQuantityStyled>
                                            </CartItemHeadPriceWrapStyled>
                                            <CartItemHeadBtnStyled>x</CartItemHeadBtnStyled>
                                        </CartItemHeadStyled>
                                    </CartItemStyled>
                                    <CartItemStyled>
                                        <CartImgStyled src={img1} />
                                        <CartItemHeadStyled>
                                            <CartItemHeadPriceWrapStyled>
                                                <CartItemHeadTitleStyled>Grand Slam Indoor Of Show Jumping Novel</CartItemHeadTitleStyled>
                                                <CartItemHeadPriceStyled>26,000,000 VND</CartItemHeadPriceStyled>
                                                <CartItemHeadMultyplyStyled>x</CartItemHeadMultyplyStyled>
                                                <CartItemHeadQuantityStyled>2</CartItemHeadQuantityStyled>
                                            </CartItemHeadPriceWrapStyled>
                                            <CartItemHeadBtnStyled>x</CartItemHeadBtnStyled>
                                        </CartItemHeadStyled>
                                    </CartItemStyled>
                                    <CartItemStyled>
                                        <CartImgStyled src={img1} />
                                        <CartItemHeadStyled>
                                            <CartItemHeadPriceWrapStyled>
                                                <CartItemHeadTitleStyled>Grand Slam Indoor Of Show Jumping Novel</CartItemHeadTitleStyled>
                                                <CartItemHeadPriceStyled>26,000,000 VND</CartItemHeadPriceStyled>
                                                <CartItemHeadMultyplyStyled>x</CartItemHeadMultyplyStyled>
                                                <CartItemHeadQuantityStyled>2</CartItemHeadQuantityStyled>
                                            </CartItemHeadPriceWrapStyled>
                                            <CartItemHeadBtnStyled>x</CartItemHeadBtnStyled>
                                        </CartItemHeadStyled>
                                    </CartItemStyled>
                                    <CartItemStyled>
                                        <CartImgStyled src={img1} />
                                        <CartItemHeadStyled>
                                            <CartItemHeadPriceWrapStyled>
                                                <CartItemHeadTitleStyled>Grand Slam Indoor Of Show Jumping Novel</CartItemHeadTitleStyled>
                                                <CartItemHeadPriceStyled>26,000,000 VND</CartItemHeadPriceStyled>
                                                <CartItemHeadMultyplyStyled>x</CartItemHeadMultyplyStyled>
                                                <CartItemHeadQuantityStyled>2</CartItemHeadQuantityStyled>
                                            </CartItemHeadPriceWrapStyled>
                                            <CartItemHeadBtnStyled>x</CartItemHeadBtnStyled>
                                        </CartItemHeadStyled>
                                    </CartItemStyled>
                                    <CartItemStyled>
                                        <CartImgStyled src={img1} />
                                        <CartItemHeadStyled>
                                            <CartItemHeadPriceWrapStyled>
                                                <CartItemHeadTitleStyled>Grand Slam Indoor Of Show Jumping Novel</CartItemHeadTitleStyled>
                                                <CartItemHeadPriceStyled>26,000,000 VND</CartItemHeadPriceStyled>
                                                <CartItemHeadMultyplyStyled>x</CartItemHeadMultyplyStyled>
                                                <CartItemHeadQuantityStyled>2</CartItemHeadQuantityStyled>
                                            </CartItemHeadPriceWrapStyled>
                                            <CartItemHeadBtnStyled>x</CartItemHeadBtnStyled>
                                        </CartItemHeadStyled>
                                    </CartItemStyled>
                                </CartListStyled>
                            </CartTopStyled>
                            <CartBottomStyled>
                                <CartBottomTotalWrapStyled>
                                    <CartBottomTotalTitleStyled>Tổng cộng:</CartBottomTotalTitleStyled>
                                    <CartBottomTotalPriceStyled>78,000,000 VND</CartBottomTotalPriceStyled>
                                </CartBottomTotalWrapStyled>
                                <CartBottomBtnWrapStyled>
                                    <Link to='/cart' style={{textDecoration: 'none', color: 'black'}}>
                                        <CartBottomredirectStyled>Xem giỏ hàng</CartBottomredirectStyled>
                                    </Link>
                                    <CartBottomredirectStyled>Thanh toán ngay</CartBottomredirectStyled>
                                </CartBottomBtnWrapStyled>
                            </CartBottomStyled>
                        </CartWrapperStyled>
                    </CartIconWrapperStyled>
                        { isAuthenticated ? 
                        <UserOptions user={user} />
                            : 
                        (<AuthStyled>
                            <PermIdentityOutlinedIcon style={{fontSize: '42px', marginLeft: '20px'}}/>
                            <AuthTitleSideStyled>
                                <Link to='/login' style={{textDecoration: 'none', color: 'black'}}>
                                    <AuthTitleStyled>Đăng nhập</AuthTitleStyled>
                                </Link>
                                <Link to='/register' style={{textDecoration: 'none', color: 'black'}}>
                                    <AuthTitleStyled>Đăng ký</AuthTitleStyled>
                                </Link>
                            </AuthTitleSideStyled>
                        </AuthStyled>)
                        }
                </RightSideStyled>
            </TopWrapperStyled>
            <BottomWrapperStyled>
                <LeftBottomStyled>
                    <FormatListBulletedOutlinedIcon />
                    <BottomTitleStyled>Danh mục sản phẩm</BottomTitleStyled>
                    <CateWrapperStyled className="cate">
                        <CateListStyled>
                            <CateListItemStyled>
                                <DesktopWindowsIcon />
                                <CateListItemOptionStyled>Máy vi tính & Laptop</CateListItemOptionStyled>
                            </CateListItemStyled>
                            <CateListItemStyled>
                                <TvIcon />
                                <CateListItemOptionStyled>Sản phẩm công nghệ</CateListItemOptionStyled>
                            </CateListItemStyled>
                            <CateListItemStyled>
                                <BlenderIcon />
                                <CateListItemOptionStyled>Điện tử gia dụng</CateListItemOptionStyled>
                            </CateListItemStyled>
                            <CateListItemStyled>
                                <PhoneAndroidIcon />
                                <CateListItemOptionStyled>Điện thoại di động</CateListItemOptionStyled>
                            </CateListItemStyled>
                            <CateListItemStyled>
                                <HeadphonesIcon />
                                <CateListItemOptionStyled>Sản phẩm phụ kiện</CateListItemOptionStyled>
                            </CateListItemStyled>
                            <CateListItemStyled>
                                <WatchOutlinedIcon />
                                <CateListItemOptionStyled>Đồng hồ thông minh</CateListItemOptionStyled>
                            </CateListItemStyled>
                        </CateListStyled>
                    </CateWrapperStyled>
                </LeftBottomStyled>
                <CenterBottomStyled>
                    <BottomTitleStyled style={{marginRight: '10px'}}>Trang chủ</BottomTitleStyled>
                    <Link to={'/products'} style={{textDecoration: 'none', color: 'black'}}>
                        <BottomTitleStyled style={{marginRight: '10px'}}>Sản phẩm<KeyboardArrowDownOutlinedIcon /></BottomTitleStyled>
                    </Link>
                    <BottomTitleStyled>Nhà cung cấp<KeyboardArrowDownOutlinedIcon /></BottomTitleStyled>
                </CenterBottomStyled>
                <RightBottomStyled>
                    <BottomTitleStyled style={{borderRight: "2px solid #000", padding: "0px 8px", fontWeight: '400'}}>Sản phẩm đang trưng bày</BottomTitleStyled>
                    <BottomTitleStyled style={{borderRight: "2px solid #000", paddingRight: "8px", fontWeight: '400'}}>Kiểm tra đơn hàng</BottomTitleStyled>
                    <BottomMoneyTitleStyled style={{borderRight: "2px solid #000", paddingRight: "8px"}}>
                    VND
                        <MoneyWrapperStyled className="money">
                            <MoneyListStyled>
                                <MoneyListItemStyled>
                                    <MoneyTitleStyled>USD</MoneyTitleStyled>
                                </MoneyListItemStyled>
                                <MoneyListItemStyled>
                                    <MoneyTitleStyled>EURO</MoneyTitleStyled>
                                </MoneyListItemStyled>
                            </MoneyListStyled>
                        </MoneyWrapperStyled>
                    <KeyboardArrowDownOutlinedIcon />
                    </BottomMoneyTitleStyled>
                    <BottomLanguageTitleStyled><LanguageOutlinedIcon style={{marginRight: "5px", fontSize: "18px"}}/>Vietnamese
                        <LanguageWrapperStyled className="language">
                            <LanguageListStyled>
                                <LanguageListItemStyled>
                                    <LanguageTitleStyled>English</LanguageTitleStyled>
                                </LanguageListItemStyled>
                                <LanguageListItemStyled>
                                    <LanguageTitleStyled>France</LanguageTitleStyled>
                                </LanguageListItemStyled>
                            </LanguageListStyled>
                        </LanguageWrapperStyled>
                        <KeyboardArrowDownOutlinedIcon />
                    </BottomLanguageTitleStyled>
                </RightBottomStyled>
            </BottomWrapperStyled>
        </ConatinerStyled>
        </>
    );
};

export default Header;
