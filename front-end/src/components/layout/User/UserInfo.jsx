import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
const InfoContainerStyled = styled.div`
    display: flex;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
    margin-bottom: 30px;
`
const RightSideWrapStyled = styled.div`
    flex: 3;
    margin-left: 20px;
`
const NavigateAddressWrapStyled = styled.div`
    padding-bottom: 10px;
`
const NavigateAddressItemStyled = styled.h3`
    border-bottom: 1px solid #ccc;
    padding-bottom: 4px;
`
const InfoWrapStyled = styled.div`
    flex: 3;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    padding-top: 20px;
`
const InfoFieldWrapStyled = styled.div`
    margin-bottom: 20px;
    display: flex;
`
const InfoFieldLableStyled = styled.label``
const InfoFieldStyled = styled.h4`
    margin-left: 10px;
`
const UserInfo = () => {
  return (
    <>
        <InfoContainerStyled>
            <Profile />
            <RightSideWrapStyled>
                <NavigateAddressWrapStyled>
                    <NavigateAddressItemStyled> Thông tin tài khoản</NavigateAddressItemStyled>
                </NavigateAddressWrapStyled>
                <InfoWrapStyled>
                    <InfoFieldWrapStyled>
                        <InfoFieldLableStyled>Họ và tên:</InfoFieldLableStyled>
                        <InfoFieldStyled>Nguyễn Long Duy</InfoFieldStyled>
                    </InfoFieldWrapStyled>
                    <InfoFieldWrapStyled>
                        <InfoFieldLableStyled>Email:</InfoFieldLableStyled>
                        <InfoFieldStyled>testregister@gmail.com</InfoFieldStyled>
                    </InfoFieldWrapStyled>
                    <InfoFieldWrapStyled>
                        <InfoFieldLableStyled>Số điện thoại:</InfoFieldLableStyled>
                        <InfoFieldStyled>0412541245</InfoFieldStyled>
                    </InfoFieldWrapStyled>
                </InfoWrapStyled>
            </RightSideWrapStyled>
        </InfoContainerStyled>
    </>
  )
}

export default UserInfo