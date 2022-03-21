import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Loader from '../../child/Loader';
import { useSelector } from 'react-redux';
const ProfileContainerStyled = styled.div`
  padding: 30px;
`
const AddressNavigateStyled = styled.h5`
  padding-bottom: 30px;
`
const ProfileWrapperStyled = styled.div``
const CateWrapStyled = styled.div``
const ReviewWrapStyled = styled.div`
  display: flex;
  align-items: center;
`
const ReviewStyled = styled.div`
  margin-left: 10px;
`
const ReviewTitleStyled = styled.span`
`
const ReviewEmailStyled = styled.h5`
  margin-top: 4px;
`
const ProfileImageStyled = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
`
const Profile = () => {
  const navigate = useNavigate();
  const {user, loading} = useSelector((state) => state.user);
  return (
    <>
        <Header />
        <ProfileContainerStyled>
          <AddressNavigateStyled>Trang chủ / Thông tin cá nhân</AddressNavigateStyled>
          <ProfileWrapperStyled>
            <CateWrapStyled>
              <ReviewWrapStyled>
                <ProfileImageStyled src={user.avatar.url} />
                <ReviewStyled>
                  <ReviewTitleStyled>Xin chào</ReviewTitleStyled>
                  <ReviewEmailStyled>{user.email}</ReviewEmailStyled>
                </ReviewStyled>
              </ReviewWrapStyled>
            </CateWrapStyled>
          </ProfileWrapperStyled>
        </ProfileContainerStyled>
        <Footer />
    </>
  )
}

export default Profile