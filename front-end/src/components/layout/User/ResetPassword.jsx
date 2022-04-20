import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../child/Loader';
import { clearErrors, resetPasswordAction } from '../../../actions/userAction';
import styled from 'styled-components';
import { useAlert } from 'react-alert';
import { useParams, useNavigate } from 'react-router-dom';
const ResetPasswordContainerStyled = styled.div`
  background-color: rgb(241, 241, 241);
`
const ResetPasswordWrapTitleStyled = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`
const ResetPasswordTitleStyled = styled.h2`
  color: #666;
`
const AddressStyled = styled.h5`
  padding: 30px;
`
const ResetPasswordWrapStyled = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ResetPasswordFormWrapStyled = styled.form`
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
const ResetPassword = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();
    const [active, setActive] = useState(true);
    const { token } = useParams();

    const { error, success, loading } = useSelector((state) => state.forgotPassword);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const myForm = new FormData();
        myForm.set('password', password);
        myForm.set('confirmPassword', confirmPassword);
        dispatch(resetPasswordAction(token, myForm));
    }
    useEffect(() =>{
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }

        if(success){
            alert.success("Mật khẩu đã được thay đổi");
            navigate('/login', {replace: true});
        }
    },[dispatch, error, alert, navigate, success])

  return (
    <>
        {loading ? <Loader /> : 
        (
        <ResetPasswordContainerStyled>
                <AddressStyled>Home / Reset Password</AddressStyled>
            <ResetPasswordWrapStyled>
                <ResetPasswordWrapTitleStyled>
                    <ResetPasswordTitleStyled style={{fontSize: active && '34px', color: active && '#000'}}>Thay đổi mật khẩu</ResetPasswordTitleStyled>
                </ResetPasswordWrapTitleStyled>
                <ResetPasswordFormWrapStyled onSubmit={handleSubmit}>
                    <InputWrapStyled>
                        <InputTitleStyled>Nhập mật khẩu:</InputTitleStyled>
                        <InputStyled
                            type='password' 
                            placeholder='Nhập mật khẩu...'
                            required
                            onChange = {(e) => setPassword(e.target.value)}
                        />
                    </InputWrapStyled>
                    <InputWrapStyled>
                        <InputTitleStyled>Nhập lại mật khẩu:</InputTitleStyled>
                        <InputStyled
                            type='password' 
                            placeholder='Nhập lại mật khẩu...'
                            required
                            onChange = {(e) => setConfirmPassword(e.target.value)}
                        />
                    </InputWrapStyled>
                <SubmitBtnStyled type='submit' value="Thay đổi mật khẩu"/>
                </ResetPasswordFormWrapStyled>
            </ResetPasswordWrapStyled>
        </ResetPasswordContainerStyled>
        )}
    </>
  )
}

export default ResetPassword