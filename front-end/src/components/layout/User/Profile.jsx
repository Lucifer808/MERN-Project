import React from 'react';
import styled from 'styled-components';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ProfileContainerStyled = styled.div`
  padding: 30px 30px 60px 30px;
  background-color: rgb(241, 241, 241);
  margin-bottom: 30px;
`
const AddressNavigateStyled = styled.h5`
  padding-bottom: 30px;
`
const ProfileWrapperStyled = styled.div`
  display: flex;
  flex: 2;
`
const CateWrapStyled = styled.div`
  background-color: #fff;
  margin-right: 20px;
  padding: 40px;
  border-radius: 5px;
`
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
const NavigateWrapStyled = styled.div`
  margin: 20px 0 0 0;
  width: 260px;
  border: .5px solid #ccc;
  border-bottom: none;
  .active {
    background-color: #fcb800;
  }
`
const NavigateItemStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 10px;
  border-bottom: .25px solid #ccc;
  cursor: pointer;
  &:hover{
    background-color: #fcb800;
    color: #fff;
  }
`
const NavigateTitleStyled = styled.span`
  margin-left: 5px;
`

const Profile = () => {
  const {user} = useSelector((state) => state.user);
  return (
    <>
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
              <NavigateWrapStyled>
                <Link to="/me/update" style={{color: 'black', textDecoration: 'none'}}>
                  <NavigateItemStyled>
                    <PermIdentityOutlinedIcon />
                    <NavigateTitleStyled>Cập nhật tài khoản</NavigateTitleStyled>
                  </NavigateItemStyled>
                </Link>
                <Link to="/me/password/update" style={{color: 'black', textDecoration: 'none'}}>
                  <NavigateItemStyled>
                    <NotificationsActiveOutlinedIcon />
                    <NavigateTitleStyled>Thay đổi mật khẩu</NavigateTitleStyled>
                  </NavigateItemStyled>
                </Link>
                <Link to="/orders" style={{color: 'black', textDecoration: 'none'}}>
                  <NavigateItemStyled>
                    <DescriptionOutlinedIcon />
                    <NavigateTitleStyled>Kiểm tra đơn hàng</NavigateTitleStyled>
                  </NavigateItemStyled>
                </Link>
                <Link to="/address" style={{color: 'black', textDecoration: 'none'}}>
                  <NavigateItemStyled>
                    <RoomOutlinedIcon />
                    <NavigateTitleStyled>Thông tin địa chỉ</NavigateTitleStyled>
                  </NavigateItemStyled>
                </Link>
                <Link to="/wishlist" style={{color: 'black', textDecoration: 'none'}}>
                  <NavigateItemStyled>
                    <FavoriteBorderOutlinedIcon />
                    <NavigateTitleStyled>Danh sách yêu thích</NavigateTitleStyled>
                  </NavigateItemStyled>
                </Link>
                  <NavigateItemStyled>
                    <PowerSettingsNewOutlinedIcon />
                    <NavigateTitleStyled>Đăng xuất</NavigateTitleStyled>
                  </NavigateItemStyled>
            </NavigateWrapStyled>
            </CateWrapStyled>
          </ProfileWrapperStyled>
        </ProfileContainerStyled>
    </>
  )
}

export default Profile