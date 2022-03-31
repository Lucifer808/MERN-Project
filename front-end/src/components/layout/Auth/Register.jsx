import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../actions/userAction';
import Loader from '../../child/Loader';
import {useNavigate} from 'react-router-dom';
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
  height: 600px;
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
const InputImgWrapStyled = styled.div`
  display: flex;
  align-items: center;
`
const InputTitleStyled = styled.h4`
  font-weight: 500;
`
const InputStyled = styled.input`
  margin: 10px 0;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  outline: none;
  &::placeholder{
    width: 240px;
  }  
`
const InputImgStyled = styled.input ``
const RememberWrapStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0  ;
`
const RememberInputStyled = styled.input``
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
const ImageDefaultStyled = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin-right: 10px;
  border: .5px solid #ccc;
`
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loading, error, isAuthenticated} = useSelector((state) => state.user)
  const [active, setActive] = useState(true);
  const [imageReview, setImageReview] = useState("/Profile.png");
  const [avatar, setAvatar] = useState("/Profile.png");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  })
  const {name, email, password} = user;
  const registerDataChange = (e) =>{
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
      setUser({...user, [e.target.name]: e.target.value})
    }
  }
  const registerSubmit = (e) =>{
    e.preventDefault();
    
    const myForm = new FormData();
    myForm.set('name', name);
    myForm.set('email', email);
    myForm.set('password', password);
    myForm.set('avatar', avatar);
    dispatch(register(myForm));
  }
  useEffect(() => {
    if(error){
      console.log(error)
    }
    if(isAuthenticated){
      navigate('/login', {replace: true});
    }
  }, [dispatch, navigate, error, isAuthenticated]);
  return (
    <>
    <CotainerStyled>
        <AddressStyled>Home / Sign Up</AddressStyled>
        { loading ? <Loader /> : (
          <LoginWrapStyled>
          <SignUpWrapStyled>
            <SignUpTitleStyled style={{fontSize: active && '34px', color: active && '#000'}}>Đăng ký</SignUpTitleStyled>
            <SignUpTitleStyled>Đăng nhập</SignUpTitleStyled>
          </SignUpWrapStyled>
          <LoginFormStyled
            encType='multipart/form-data'
            onSubmit={registerSubmit}
          >
            <InputWrapStyled>
              <InputTitleStyled>Tên đăng nhập</InputTitleStyled>
              <InputStyled
                type='text' 
                placeholder='Nhập email ...'
                name="email"
                required
                value={email}
                onChange={registerDataChange}
              />
            </InputWrapStyled>
            <InputWrapStyled>
              <InputTitleStyled>Họ và tên</InputTitleStyled>
              <InputStyled 
                type='text' 
                placeholder='Nhập họ và tên...'
                name="name"
                required
                value={name}
                onChange={registerDataChange}
                />
            </InputWrapStyled>
            <InputWrapStyled>
              <InputTitleStyled>Mật khẩu</InputTitleStyled>
              <InputStyled 
                type='password' 
                placeholder='Nhập mật khẩu...'
                name='password'
                required
                value={password}
                onChange={registerDataChange}
              />
            </InputWrapStyled>
            {/* <InputWrapStyled>
              <InputTitleStyled>Nhập lại mật khẩu</InputTitleStyled>
              <InputStyled 
                type='password' 
                placeholder='Nhập lại mật khẩu...'
                name='confirmPassword'
                />
            </InputWrapStyled> */}
            <InputImgWrapStyled>
              <ImageDefaultStyled src={imageReview} alt="Avatar Review"/>
              <InputImgStyled 
                type='file' 
                accept='image/*'
                name='avatar'
                onChange={registerDataChange}
                />
            </InputImgWrapStyled>
            <RememberWrapStyled>
              <RememberInputStyled type='checkbox' />
              <RememberTitleStyled>Tôi đồng ý với các điều khoản & chính sách</RememberTitleStyled>
            </RememberWrapStyled>
            <SubmitBtnStyled type='submit' value="Đăng ký"/>
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

export default Register