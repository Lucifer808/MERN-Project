import React from 'react';
import styled from 'styled-components';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
const ContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 160px;
    margin: 30px;
    border: 1px solid lightgray;
` 
const WrapperStyled = styled.div`
`
const ServiceTitleStyled = styled.h4`
    margin-top: 20px;
`
const ServiceSubTitleStyled = styled.span``
const Services = () => {
    return (
        <>
        <ContainerStyled id='services'>
            <WrapperStyled>
                <RocketLaunchOutlinedIcon style={{fontSize: '40px', color: '#d69d00'}} />
                <ServiceTitleStyled>Miễn phí giao hàng</ServiceTitleStyled>
                <ServiceSubTitleStyled>Áp dụng cho đơn hàng trên 300,000 VND</ServiceSubTitleStyled>
            </WrapperStyled>
            <WrapperStyled>
                <AutorenewOutlinedIcon style={{fontSize: '40px', color: '#d69d00'}} />
                <ServiceTitleStyled>Đổi trả trong 90 ngày</ServiceTitleStyled>
                <ServiceSubTitleStyled>Nếu sản phẩm gặp vấn đề</ServiceSubTitleStyled>
            </WrapperStyled>
            <WrapperStyled>
                <CreditCardOutlinedIcon style={{fontSize: '40px', color: '#d69d00'}} />
                <ServiceTitleStyled>Thanh toán an toàn</ServiceTitleStyled>
                <ServiceSubTitleStyled>Thanh toán an toàn 100%</ServiceSubTitleStyled>
            </WrapperStyled>
            <WrapperStyled>
                <PhoneInTalkOutlinedIcon style={{fontSize: '40px', color: '#d69d00'}} />
                <ServiceTitleStyled>Phục vụ 24/7</ServiceTitleStyled>
                <ServiceSubTitleStyled>Luôn sẵn sàng phục vụ khách hàng</ServiceSubTitleStyled>
            </WrapperStyled>
            <WrapperStyled>
                <RedeemOutlinedIcon style={{fontSize: '40px', color: '#d69d00'}} />
                <ServiceTitleStyled>Dịch vụ quà tặng</ServiceTitleStyled>
                <ServiceSubTitleStyled>Hỗ trợ dịch vụ quà tặng</ServiceSubTitleStyled>
            </WrapperStyled>
        </ContainerStyled>
        </>
    )
}

export default Services
