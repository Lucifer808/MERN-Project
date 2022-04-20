import React, {useState, useEffect} from 'react';
import Profile from './Profile';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, updatePassword } from '../../../actions/userAction';
import Loader from '../../child/Loader';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import { loadUser } from '../../../actions/userAction';
import { UPDATE_PASSWORD_RESET } from '../../../constants/userContants';
const ChangePasswordContainerStyled = styled.div`
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
const ChangePasswordWrapStyled = styled.form`
    flex: 3;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    padding-top: 40px;
`
const ChangePasswordListStyled = styled.div`
    display: flex;
    flex-direction: column;
    
`
const ChangePasswordLableStyled = styled.span`
    margin: 10px 0;
`
const ChangePasswordItemStyled = styled.input`
    padding: 10px;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 2px;
    width: 50%;
`
const ChangePasswordButtonStyled = styled.input`
    padding: 14px;
    margin: 20px 0;
    border: none;
    border-radius: 4px;
    background-color: #fcb800;
    color: #000;
    cursor: pointer;
    transition: .2s all linear;
    &:hover{
        color: #fff;
        background-color: rgb(34,34,34);
    }
`
const ChangePassword = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();
    const {loading, isUpdated, error} = useSelector((state) => state.profile);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("oldPassword", oldPassword);
        myForm.set("newPassword", newPassword);
        myForm.set("confirmPassword", confirmPassword);
        dispatch(updatePassword(myForm))
    }
    useEffect(() =>{
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        if(isUpdated){
            alert.success("Thay đổi mật khẩu thành công");
            dispatch(loadUser());

            navigate('/account');

            dispatch({
                type: UPDATE_PASSWORD_RESET,
            })
        }
    },[dispatch, error, alert, navigate, isUpdated])
  return (
    <>
        {loading ? <Loader /> : (
        <ChangePasswordContainerStyled>
            <Profile />
            <RightSideWrapStyled>
                <NavigateAddressWrapStyled>
                    <NavigateAddressItemStyled> Thay đổi mật khẩu</NavigateAddressItemStyled>
                </NavigateAddressWrapStyled>
                <ChangePasswordWrapStyled
                    onSubmit={handleSubmit}
                >
                    <ChangePasswordListStyled>
                        <ChangePasswordLableStyled>Nhập mật khẩu cũ: </ChangePasswordLableStyled>
                        <ChangePasswordItemStyled 
                            type='password'
                            required
                            name='oldPassword'
                            value={oldPassword}
                            onChange={e => setOldPassword(e.target.value)}
                        />
                    </ChangePasswordListStyled>
                    <ChangePasswordListStyled>
                        <ChangePasswordLableStyled>Nhập mật khẩu mới: </ChangePasswordLableStyled>
                        <ChangePasswordItemStyled 
                            type='password'
                            required
                            name='newPassword'
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                        />
                    </ChangePasswordListStyled>
                    <ChangePasswordListStyled>
                        <ChangePasswordLableStyled>Nhập lại mật khẩu mới: </ChangePasswordLableStyled>
                        <ChangePasswordItemStyled 
                            type='password'
                            required
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </ChangePasswordListStyled>
                    <ChangePasswordButtonStyled 
                        type='submit'
                        value='Thay đổi mật khẩu'
                    />
                </ChangePasswordWrapStyled>
            </RightSideWrapStyled>
        </ChangePasswordContainerStyled>
        )}
    </>
  )
}

export default ChangePassword