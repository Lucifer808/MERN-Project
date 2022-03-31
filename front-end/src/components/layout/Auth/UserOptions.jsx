import React, {useState} from 'react';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import styled, {keyframes} from 'styled-components';
import {useDispatch} from 'react-redux';
import {logout} from '../../../actions/userAction';
import {Link} from 'react-router-dom';
import { useAlert } from 'react-alert';
const fadeIn = keyframes `
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const LoginIconStyled = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
`
const LoginNameStyled = styled.span``
const LoginedWrapStyled = styled.div`
    display: flex;
    align-items: center;
`
const LoginedContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover .loginCate{
        display: block;
    }
`
const LoginCateWrapperStyled = styled.div`
    position: absolute;
    background-color: #fff;
    right: 60px;
    display: none;
    width: 220px;
    list-style-type: none;
    margin-top: ${props => props.role === 'admin' ? '280px' : '240px'};
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
const LoginCateListStyled = styled.ul``
const LoginCateListItemStyled = styled.li`
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
const LoginedTagContainerStyled = styled.div`
    padding: 12px 0 12px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    list-style-type: none;
`
const LoginCateListItemOptionStyled = styled.span`
    margin-left: 6px;
    font-weight: 400;
`
const LogoutLineStyled = styled.div`
    background-color: #ccc;
    width: 100%;
    height: 1px;
`
const LogoutStyled = styled.span`
    margin-left: 10px;
    font-weight: 400;
` 
const CountNotificationWrapStyled = styled.div`
    display: flex;
    align-items: center;
`
const CountNotificationStyled = styled.span`
    margin-right: 10px;
    background-color: red;
    padding: 4px 8px;
    border-radius: 50%;
    color: #fff;
    font-size: 12px;
`
const UserOptions = ({user}) => {
  const dispatch = useDispatch();
  const [imageReview, setImageReview] = useState("/Profile.png");
  const alert = useAlert();
  const LogoutHandle = () =>{
    dispatch(logout());
    alert.success('Đăng xuất thành công');
  }
  return (
    <>
      <LoginedContainerStyled>
        {user.avatar?.url ? 
        <LoginIconStyled src={user.avatar?.url} />
        :
        <LoginIconStyled src={imageReview} />
        }
        <LoginedWrapStyled>
        <LoginNameStyled>{user.name}</LoginNameStyled>
        <KeyboardArrowDownOutlinedIcon />
            </LoginedWrapStyled>
        <LoginCateWrapperStyled className='loginCate' role={user.role}>
          <LoginCateListStyled>
              <Link to='/account' style={{textDecoration: 'none', color: 'black'}}>
                <LoginCateListItemStyled>
                  <AccountBoxOutlinedIcon />
                  <LoginCateListItemOptionStyled>Thông tin cá nhân</LoginCateListItemOptionStyled>
                </LoginCateListItemStyled>
              </Link>
              <LoginedTagContainerStyled>
                <CountNotificationWrapStyled>
                  <NotificationsOutlinedIcon />
                  <LoginCateListItemOptionStyled>Thông báo</LoginCateListItemOptionStyled>
                </CountNotificationWrapStyled>
                  <CountNotificationStyled>2</CountNotificationStyled>
              </LoginedTagContainerStyled>
              <LoginedTagContainerStyled>
                <CountNotificationWrapStyled>
                  <EmailOutlinedIcon />
                  <LoginCateListItemOptionStyled>Tin nhắn</LoginCateListItemOptionStyled>
                </CountNotificationWrapStyled>
                <CountNotificationStyled>2</CountNotificationStyled>
              </LoginedTagContainerStyled>
              { user.role === "admin" ? (
                <LoginCateListItemStyled>
                <WarehouseOutlinedIcon />
                <LoginCateListItemOptionStyled>Quản lý cửa hàng</LoginCateListItemOptionStyled>
              </LoginCateListItemStyled>
              ):''}
                <LogoutLineStyled />
              <LoginCateListItemStyled>
                <LogoutStyled onClick={LogoutHandle}>Đăng xuất</LogoutStyled>
              </LoginCateListItemStyled>
          </LoginCateListStyled>
        </LoginCateWrapperStyled>
      </LoginedContainerStyled>
    </>
  )
}

export default UserOptions