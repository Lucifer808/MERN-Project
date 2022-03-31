import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Loader from '../../child/Loader';
import { useSelector, useDispatch } from 'react-redux';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { Link } from 'react-router-dom';
import {clearErrors, loadUser, updateProfile} from '../../../actions/userAction';
import {useAlert} from 'react-alert';
import { UPDATE_PROFILE_RESET } from '../../../constants/userContants';
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
`
const CateWrapStyled = styled.div`
  flex: 1;
  background-color: #fff;
  margin-right: 20px;
  padding: 40px 10px;
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
const RightSideWrapStyled = styled.div`
  flex: 3;
  margin-left: 20px;
`
const EditWrapStyled = styled.form`
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
`
const NavigateAddressWrapStyled = styled.div`
  padding-bottom: 10px;
`
const NavigateAddressItemStyled = styled.h3`
  border-bottom: 1px solid #ccc;
  padding-bottom: 4px;
`
const InputWrapStyled = styled.div`
  margin-bottom: 20px;
`
const InputHalfWrapStyled = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`
const InputFullWidthStyled = styled.input`
  width: 100%;
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 2px;
  outline: none;
  &:focus{
    outline: 1px solid #fcb800;
  }
`
const InputHalfWidthStyled = styled.input`
  width: 420px;
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 2px;
  outline: none;
  &:focus{
    outline: 1px solid #fcb800;
  }
`
const SubmitBtnStyled = styled.input`
  font-weight: 500;
  padding: 16px 20px;
  border-radius: 5px;
  border: none;
  background-color: #fcb800;
  color: #000;
  cursor: pointer;
  transition: all .2s linear;
  &:hover{
    background-color: rgb(34, 34, 34);
    color: #fff;
  }
`
const ImageReviewStyled = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`
const InputImageReview = styled.input``
const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [imageReview, setImageReview] = useState('/Profile.png');
  const [avatar, setAvatar] = useState('/Profile.png');
  const {user} = useSelector((state) => state.user);
  const {isUpdated, loading, error} = useSelector((state) => state.profile);
  const [updateData, setUpdateData] = useState({
    name: '',
    fristName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    country: '',
  })
  const {name, fristName, lastName, phoneNumber, email, address, city, country} = updateData;
  const updateDataChange = (e) =>{
    if(e.target.name === 'avatar'){
      const reader = new FileReader();
      reader.onload = () =>{
        if(reader.readyState === 2){
          setImageReview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);   
    }else{
      setUpdateData({...updateData, [e.target.name]: e.target.value});
    }
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("fristName", fristName);
    myForm.set("lastName", lastName);
    myForm.set("phoneNumber", phoneNumber);
    myForm.set("email", email);
    myForm.set("address", address);
    myForm.set("city", city);
    myForm.set("country", country);
    myForm.set("avatar", avatar);
    dispatch(updateProfile(myForm));
  }
  useEffect(() =>{
    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }
    if(isUpdated){
      alert.success('Cập nhật thông tin thành công!');
      dispatch(loadUser());

      navigate('/account');

      dispatch({
        type: UPDATE_PROFILE_RESET
      })
    }
  },[dispatch, error, alert, navigate, isUpdated])
  return (
    <>
        {loading ?
          <Loader />
          :
          (
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
                    <NavigateTitleStyled>Thông tin tài khoản</NavigateTitleStyled>
                  </NavigateItemStyled>
                </Link>
                <Link to="/notifications" style={{color: 'black', textDecoration: 'none'}}>
                  <NavigateItemStyled>
                    <NotificationsActiveOutlinedIcon />
                    <NavigateTitleStyled>Thông báo</NavigateTitleStyled>
                  </NavigateItemStyled>
                </Link>
                <Link to="/order" style={{color: 'black', textDecoration: 'none'}}>
                  <NavigateItemStyled>
                    <DescriptionOutlinedIcon />
                    <NavigateTitleStyled>Đơn hàng</NavigateTitleStyled>
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
            <RightSideWrapStyled>
              <NavigateAddressWrapStyled>
                <NavigateAddressItemStyled>Thông tin tài khoản</NavigateAddressItemStyled>
              </NavigateAddressWrapStyled>
              <EditWrapStyled 
                encType='multipart/form-data'
                onSubmit={handleSubmit}
                >
                <InputWrapStyled>
                  <InputFullWidthStyled
                    name='name'
                    onChange={updateDataChange}
                    placeholder={user.name || 'Tên tài khoản'}
                  />
                </InputWrapStyled>
                <InputHalfWrapStyled>
                  <InputHalfWidthStyled 
                    name='firstName'
                    onChange={updateDataChange}
                    placeholder={user.fristName || 'Họ'}
                  />
                  <InputHalfWidthStyled 
                    name='lastName'
                    onChange={updateDataChange}
                    placeholder={user.lastName || 'Tên'}
                  />
                </InputHalfWrapStyled>
                <InputHalfWrapStyled>
                  <InputHalfWidthStyled
                    name='phoneNumber'
                    onChange={updateDataChange}
                    placeholder={user.phoneNumber || 'Số điện thoại'}
                  />
                  <InputHalfWidthStyled
                    name='email'
                    onChange={updateDataChange}
                    placeholder={user.email || 'Địa chỉ email'}
                  />
                </InputHalfWrapStyled>
                <InputWrapStyled>
                  <InputFullWidthStyled
                    name='address'
                    onChange={updateDataChange}
                    placeholder={user.address || 'Địa chỉ'}
                  />
                </InputWrapStyled>
                <InputHalfWrapStyled>
                  <InputHalfWidthStyled
                    name='city'
                    onChange={updateDataChange}
                    placeholder={user.city || 'Thành phố'}
                  />
                  <InputHalfWidthStyled
                    name='country'
                    onChange={updateDataChange}
                    placeholder={user.country || 'Quốc gia'}
                  />
                </InputHalfWrapStyled>
                <InputWrapStyled style={{display: 'flex', alignItems: 'center'}}>
                  <ImageReviewStyled 
                    alt='Image Reivew' 
                    src={imageReview} 
                  />
                  <InputImageReview 
                    type='file' 
                    style={{marginLeft: '10px', border: 'none'}}
                    accept='image/*'
                    name='avatar'
                    onChange={updateDataChange}
                    />
                </InputWrapStyled>
                <SubmitBtnStyled value='Cập nhật thông tin' type='submit'/>
              </EditWrapStyled>
            </RightSideWrapStyled>
          </ProfileWrapperStyled>
        </ProfileContainerStyled>
          )
        }
    </>
  )
}

export default Profile