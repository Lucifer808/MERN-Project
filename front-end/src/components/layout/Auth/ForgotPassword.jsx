import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loader from '../../child/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { forgotPassword } from '../../../actions/userAction';
import { useAlert } from 'react-alert';
import { clearErrors } from '../../../actions/userAction';
const CotainerStyled = styled.div`
  background-color: rgb(241, 241, 241);
`
const AddressStyled = styled.h5`
  padding: 30px;
`
const ForgotPasswordWrapStyled = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ForgotPasswordTitleWrapStyled = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`
const ForgotPasswordTitleStyled = styled.h2`
  color: #666;
`
const ForgotPasswordFormStyled = styled.form`
  width: 440px;
  background-color: #fff;
  padding: 30px;
`
const InputTitleStyled = styled.h4`
  font-weight: 500;
`
const InputStyled = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  outline: none;
  width: 100%;
  &::placeholder{
    width: 240px;
  }  
`
const SubmitBtnStyled = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fcb800;
  font-weight: 600;
  cursor: pointer;
  transition: .2s all linear;
  margin-top: 20px;
  &:hover{
    background-color: rgb(34, 34, 34);
    color: #fff;
  }
`
const InputWrapStyled = styled.div`
  margin-top: 10px;
`
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const {loading, error, message} = useSelector((state) => state.forgotPassword); 
  const [email, setEmail] = useState('');
  const [active, setActive] = useState(true);
  const forgotPasswordSubmit = (e) =>{
    e.preventDefault();
    const myForm = new FormData();
    myForm.set('email', email);
    dispatch(forgotPassword(myForm));
  }
  useEffect(() =>{
    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }
    if(message){
      alert.success(message);
    }
  },[dispatch, error, alert, message])
  return (
    <>
      <CotainerStyled>
        <AddressStyled>Home / Forgot Password</AddressStyled>
        {loading ? <Loader /> : (
        <ForgotPasswordWrapStyled>
          <ForgotPasswordTitleWrapStyled>
            <ForgotPasswordTitleStyled style={{fontSize: active && '34px', color: active && '#000'}}>Quên mật khẩu</ForgotPasswordTitleStyled>
          </ForgotPasswordTitleWrapStyled>
          <ForgotPasswordFormStyled onSubmit={forgotPasswordSubmit}>
            <InputWrapStyled>
              <InputTitleStyled>Nhập email:</InputTitleStyled>
              <InputStyled
                type='email' 
                placeholder='Nhập email...'
                required
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
              />
            </InputWrapStyled>
            <SubmitBtnStyled type='submit' value="Xác thực tài khoản"/>
          </ForgotPasswordFormStyled>
        </ForgotPasswordWrapStyled>
        )}
      </CotainerStyled>
    </>
  )
}

export default ForgotPassword