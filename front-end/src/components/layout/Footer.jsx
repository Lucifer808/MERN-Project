import React from "react";
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import payment1 from '../../assets/img/slider/pay1.jpg';
import payment2 from '../../assets/img/slider/pay2.jpg';
import payment3 from '../../assets/img/slider/pay3.jpg';
import payment4 from '../../assets/img/slider/pay4.jpg';
import payment5 from '../../assets/img/slider/pay5.jpg';
const ContainerStyled = styled.div`
    width: 100%;
    height: 630px;
`
const NewsletterWrapStyled = styled.div`
    margin: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
`
const NewsletterTitleWrapStyled = styled.div`
    margin: 80px 0;
`
const NewsletterTopTitleStyled = styled.h2``
const NewsletterSubTitleStyled = styled.span`
    font-weight: 300;
`
const NewsletterInputWrapStyled = styled.div`
    margin: 80px 0;
`
const NewsletterInputStyled = styled.input`
    height: 50px;
    width: 580px;
    outline: none;
    padding: 0 10px;
    border: 0.5px solid lightgray;
    &:focus {
        outline: 1px solid #fcb800;
    }
`
const NewsletterBtnStyled = styled.button`
    height: 50px;
    width: 160px;
    font-size: 16px;
    cursor: pointer;
    background-color: #fcb800;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-weight: 600;
`
const FooterWrapStyled = styled.div`
    width: 100%;
    height: 100%;
`
const FooterContactContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 40px 30px;
    border-bottom: 1px solid lightgray;
`
const FooterContactWrapStyled = styled.div`
    margin: 30px 0 60px 0;
`
const FooterContactTitle = styled.h4`

`
const FooterContactSubTitle = styled.h5`
    margin-top: 20px;
    font-weight: 400;
    font-size: 16px;
`
const FootertContactEmailStyled = styled.h5`
    font-weight: 400;
    margin: 10px 0;
    &:hover{
        color: #fcb800;
        cursor: pointer;
    }
`
const FooterContactStyled = styled.h5`
    font-weight: 400;
    margin: 20px 0;
    cursor: pointer;
    &:hover{
        color: #fcb800;
    }
`
const FooterIconWrap = styled.div``
const FooterCateStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const FooterCateWrapStyled = styled.div`
    margin: 60px 0;
`
const FooterCateTitleStyled = styled.h4`
    margin: 10px 30px;
    font-weight: 500;
`
const FooterSubTitleStyled = styled.h5`
    font-weight: 400;
    margin: 0 10px;
    cursor: pointer;
    &:hover{
        color: #fcb800;
    }
`
const FooterCopyrightStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px; 
`
const FooterCopyrightTitleStyled = styled.h3`
    margin: 0 20px;
    font-weight: 400;
    font-size: 16px;
`
const FooterPaymentWrapStyled = styled.div`
    display: flex;
    align-items: center;
    margin-right: 30px;
`
const FooterPaymentIconStyled = styled.img`
    margin: 0 10px;
`
const Footer = () => {
    return(
        <>
            <ContainerStyled id='footer'>
                <NewsletterWrapStyled>
                    <NewsletterTitleWrapStyled>
                        <NewsletterTopTitleStyled>Nhận thông báo</NewsletterTopTitleStyled>
                        <NewsletterSubTitleStyled>Nhập email để nhận thông tin về sản phẩm mới và khuyến mãi</NewsletterSubTitleStyled>
                    </NewsletterTitleWrapStyled>
                    <NewsletterInputWrapStyled>
                        <NewsletterInputStyled placeholder="Nhập Email để nhận được thông báo sớm nhất..." />
                        <NewsletterBtnStyled>Đăng kí</NewsletterBtnStyled>
                    </NewsletterInputWrapStyled>
                </NewsletterWrapStyled>
                <FooterWrapStyled>
                    <FooterContactContainerStyled>
                        <FooterContactWrapStyled>
                            <FooterContactTitle>Thông tin liên hệ</FooterContactTitle>
                            <FooterContactSubTitle>Phục vụ 24/7</FooterContactSubTitle>
                            <FooterContactSubTitle style={{color: '#fcb800', fontSize: '22px'}}>1800 97 97 69</FooterContactSubTitle>
                            <FooterContactSubTitle>Khu II, đường 3/2, p. Xuân Khánh, q. Ninh Kiều, TPCT</FooterContactSubTitle>
                            <FootertContactEmailStyled>cskhtest9@gmail.com</FootertContactEmailStyled>
                            <FooterIconWrap>
                                <FacebookIcon style={{cursor: 'pointer', marginRight: '10px'}} />
                                <TwitterIcon style={{cursor: 'pointer', margin: '0 10px'}} />
                                <GoogleIcon style={{cursor: 'pointer', margin: '0 10px'}} />
                                <InstagramIcon style={{cursor: 'pointer', margin: '0 10px'}} />
                            </FooterIconWrap>
                        </FooterContactWrapStyled>
                        <FooterContactWrapStyled>
                            <FooterContactTitle>Chuyển hướng nhanh</FooterContactTitle>
                            <FooterContactStyled>Kì hạn và điều kiện</FooterContactStyled>
                            <FooterContactStyled>Giao hàng</FooterContactStyled>
                            <FooterContactStyled>Chính sách đổi trả</FooterContactStyled>
                            <FooterContactStyled>Câu hỏi thường gặp</FooterContactStyled>
                        </FooterContactWrapStyled>
                        <FooterContactWrapStyled>
                            <FooterContactTitle>Về chúng tôi</FooterContactTitle>
                            <FooterContactStyled>Thông tin về chúng tôi</FooterContactStyled>
                            <FooterContactStyled>Các liên kết</FooterContactStyled>
                            <FooterContactStyled>Liên hệ</FooterContactStyled>
                            <FooterContactStyled>Chính sách cộng tác</FooterContactStyled>
                        </FooterContactWrapStyled>
                        <FooterContactWrapStyled>
                            <FooterContactTitle>Kinh doanh</FooterContactTitle>
                            <FooterContactStyled>Bài viết của tôi</FooterContactStyled>
                            <FooterContactStyled>Thủ tục thanh toán</FooterContactStyled>
                            <FooterContactStyled>Tài khoản của tôi</FooterContactStyled>
                            <FooterContactStyled>Cửa hàng</FooterContactStyled>
                        </FooterContactWrapStyled>
                    </FooterContactContainerStyled>
                    <FooterCateWrapStyled>
                        <FooterCateStyled>
                            <FooterCateTitleStyled>Điện tử tiêu dùng:</FooterCateTitleStyled>
                            <FooterSubTitleStyled>Máy điều hòa</FooterSubTitleStyled>
                            <FooterSubTitleStyled>Thiết bị âm thanh</FooterSubTitleStyled>
                            <FooterSubTitleStyled>Thiết bị điện tử ô tô</FooterSubTitleStyled>
                            <FooterSubTitleStyled>Thiết bị văn phòng</FooterSubTitleStyled>
                            <FooterSubTitleStyled>TV</FooterSubTitleStyled>
                            <FooterSubTitleStyled>Máy giặt</FooterSubTitleStyled>
                        </FooterCateStyled>
                        <FooterCateStyled>
                            <FooterCateTitleStyled>Máy vi tính & công nghệ:</FooterCateTitleStyled>
                            <FooterSubTitleStyled>Máy tính để bàn</FooterSubTitleStyled>
                            <FooterSubTitleStyled>Máy tính xác tay</FooterSubTitleStyled>
                            <FooterSubTitleStyled>Điện thoại thông minh</FooterSubTitleStyled>
                            <FooterSubTitleStyled>Máy tính bảng</FooterSubTitleStyled>
                            <FooterSubTitleStyled>Tay cầm chơi game</FooterSubTitleStyled>
                            <FooterSubTitleStyled>Loa không dây</FooterSubTitleStyled>
                        </FooterCateStyled>
                        <FooterCateStyled>
                            <FooterCateTitleStyled>Điện tử gia dụng:</FooterCateTitleStyled>
                            <FooterSubTitleStyled>Máy điều hòa</FooterSubTitleStyled>
                            <FooterSubTitleStyled>Thiết bị âm thanh</FooterSubTitleStyled>
                            <FooterSubTitleStyled>Thiết bị điện tử ô tô</FooterSubTitleStyled>
                            <FooterSubTitleStyled>Thiết bị văn phòng</FooterSubTitleStyled>
                            <FooterSubTitleStyled>TV 4K Ultra HD</FooterSubTitleStyled>
                            <FooterSubTitleStyled>TV LED</FooterSubTitleStyled>
                            <FooterSubTitleStyled>TV OLED</FooterSubTitleStyled>
                        </FooterCateStyled>
                        <FooterCateStyled>
                            <FooterCateTitleStyled>Phụ kiện:</FooterCateTitleStyled>
                            <FooterSubTitleStyled>Sạc không dây Iphone</FooterSubTitleStyled>
                            <FooterSubTitleStyled>Tai nghe Sony</FooterSubTitleStyled>
                            <FooterSubTitleStyled>Tai nghe không dây Iphone</FooterSubTitleStyled>
                            <FooterSubTitleStyled>Dây sạc Samsung</FooterSubTitleStyled>
                            <FooterSubTitleStyled>Cổng chuyển đổi Type-C sang USB-C</FooterSubTitleStyled>
                        </FooterCateStyled>
                    </FooterCateWrapStyled>
                    <FooterCopyrightStyled>
                            <FooterCopyrightTitleStyled>&copy; smartShop. Bản quyền bởi Nguyễn Long Duy</FooterCopyrightTitleStyled>
                            <FooterPaymentWrapStyled>
                                <FooterCopyrightTitleStyled>Chúng tôi hỗ trợ các phương thức thanh toán: </FooterCopyrightTitleStyled>
                                <FooterPaymentIconStyled src={payment1}/>
                                <FooterPaymentIconStyled src={payment2}/>
                                <FooterPaymentIconStyled src={payment3}/>
                                <FooterPaymentIconStyled src={payment4}/>
                                <FooterPaymentIconStyled src={payment5}/>
                            </FooterPaymentWrapStyled>
                    </FooterCopyrightStyled>
                </FooterWrapStyled>
            </ContainerStyled>
        </>
    ) 
};

export default Footer;
