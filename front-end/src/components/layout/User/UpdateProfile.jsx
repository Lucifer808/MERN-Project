import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearErrors, loadUser, updateProfile } from '../../../actions/userAction';
import { useAlert } from 'react-alert';
import { UPDATE_PROFILE_RESET } from '../../../constants/userContants';
import Loader from '../../child/Loader';
import Profile from './Profile';
const EditContainerStyled = styled.div`
  display: flex;
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 30px;
`
const EditWrapStyled = styled.form`
  flex: 3;
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding-top: 40px;
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
const UpdateProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [imageReview, setImageReview] = useState('/Profile.png');
  const [avatar, setAvatar] = useState('/Profile.png');
  const {user} = useSelector((state) => state.user);
  const {isUpdated, loading, error} = useSelector((state) => state.profile);
  const [updateData, setUpdateData] = useState({
    name: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    country: '',
  })
  const {name, firstName, lastName, phoneNumber, email, address, city, country} = updateData;
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
    myForm.set("firstName", firstName);
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

      navigate('/');

      dispatch({
        type: UPDATE_PROFILE_RESET
      })
    }
  },[dispatch, error, alert, navigate, isUpdated])
  return (
    <>
      {
        loading ? <Loader /> : (
      <EditContainerStyled>
      <Profile />
      <RightSideWrapStyled>
        <NavigateAddressWrapStyled>
                <NavigateAddressItemStyled> Cập nhật tài khoản</NavigateAddressItemStyled>
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
                    placeholder={user.firstName || 'Họ'}
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
        </EditContainerStyled>
        )
      }
    </>
  )
}

export default UpdateProfile