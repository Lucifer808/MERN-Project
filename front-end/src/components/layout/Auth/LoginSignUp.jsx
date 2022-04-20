import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, clearErrors } from '../../../actions/userAction';
import Loader from '../../child/Loader';
import { useAlert } from 'react-alert';
const CotainerStyled = styled.div`
  background-color: rgb(241, 241, 241);
`
const LoginWrapStyled = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const LoginFormStyled = styled.form`
  height: 400px;
  width: 440px;
  background-color: #fff;
  padding: 30px;
`
const AddressStyled = styled.h5`
  padding: 30px;
`
const SignUpWrapStyled = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`
const SignUpTitleStyled = styled.h2`
  color: #666;
`
const InputWrapStyled = styled.div`
  margin-top: 10px;
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
const RememberWrapStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`
const RememberInputStyled = styled.input`
`
const RememberTitleStyled = styled.span`
  margin-left: 6px;
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
  &:hover{
    background-color: rgb(34, 34, 34);
    color: #fff;
  }
`
const TagIconContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`
const TagIconWrapStyled = styled.div`
    cursor: pointer;
    padding: 5px 10px 0 0;
`
const LoginSignUp = () => {
  const [active, setActive] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const {error, isAuthenticated, loading} = useSelector((state) => state.user);
  // const {loading} = useSelector((state) => state.profile);
  const [loginEmail, setLoginEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, password))
  }
  useEffect(() => {
    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }
    if(isAuthenticated){
      navigate('/', {replace: true});
    }
  }, [dispatch, error, isAuthenticated, navigate, alert]);
  return (
    <>
    <CotainerStyled>
        <AddressStyled>Home / Sign Up</AddressStyled>
        {loading ? <Loader /> : (
        <LoginWrapStyled>
          <SignUpWrapStyled>
            <SignUpTitleStyled style={{fontSize: active && '34px', color: active && '#000'}}>Đăng nhập</SignUpTitleStyled>
            <SignUpTitleStyled>Đăng ký</SignUpTitleStyled>
          </SignUpWrapStyled>
          <LoginFormStyled onSubmit={loginSubmit}>
            <InputWrapStyled>
              <InputTitleStyled>Tên đăng nhập</InputTitleStyled>
              <InputStyled
                type='email' 
                placeholder='Nhập email...'
                required
                value={loginEmail}
                onChange = {(e) => setLoginEmail(e.target.value)}
              />
            </InputWrapStyled>
            <InputWrapStyled>
              <InputTitleStyled>Mật khẩu</InputTitleStyled>
              <InputStyled 
                type='password' 
                placeholder='Nhập mật khẩu...'
                required
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
                />
            </InputWrapStyled>
            <RememberWrapStyled style={{margin: '0px'}}>
              <Link to='/password/forgot' style={{textDecoration: 'none'}}>
                <RememberTitleStyled style={{marginLeft: '0px'}}>Quên mật khẩu?</RememberTitleStyled>
              </Link>
            </RememberWrapStyled>
            <RememberWrapStyled>
              <RememberInputStyled type='checkbox' />
              <RememberTitleStyled>Ghi nhớ</RememberTitleStyled>
            </RememberWrapStyled>
            <SubmitBtnStyled type='submit' value="Đăng nhập"/>
            <TagIconContainerStyled>
              <TagIconWrapStyled>
                <FacebookIcon style={{fontSize: '46px', color: '#3b5999'}}/>
              </TagIconWrapStyled>
              <TagIconWrapStyled>
                <TwitterIcon style={{fontSize: '46px', color: '#55acee'}}/>
              </TagIconWrapStyled>
              <TagIconWrapStyled>
                <GoogleIcon style={{fontSize: '46px', color: '#dd4b39'}}/>
              </TagIconWrapStyled>
              <TagIconWrapStyled>
                <LinkedInIcon style={{fontSize: '46px', color: '#0077b5'}}/>
              </TagIconWrapStyled>
              <TagIconWrapStyled>
                <InstagramIcon style={{fontSize: '46px', color: 'rgb(197 63 130)'}}/>
              </TagIconWrapStyled>
            </TagIconContainerStyled>
          </LoginFormStyled>
        </LoginWrapStyled>
        )}
    </CotainerStyled>
    </>
  )
}

export default LoginSignUp