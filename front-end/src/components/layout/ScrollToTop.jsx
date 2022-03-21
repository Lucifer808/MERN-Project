import React, {useState} from 'react';
import styled from 'styled-components';
// import up from '../../assets/slick-arrow/up-arrow-svgrepo-com.svg';
const ToTopStyled = styled.div`
    display: ${({scrollState}) => (scrollState ? "block" : "none")};
    position: fixed;
    bottom: 10px;
    right: 20px;
    z-index: 10;
    cursor: pointer;
    .img{
        height: 5px;
    }
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1900ff39;
    text-align: center;
`
const ScrollToTop = () => {
    const [scrollState, setScrollState] = useState(false);
    window.addEventListener('scroll',()=>{
        window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
    })
    const toTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return (
        <>
            <ToTopStyled scrollState={scrollState} onClick={()=>toTop()}>
            <img src="https://img.icons8.com/cotton/50/000000/collapse-arrow.png" alt=""/>
            </ToTopStyled>
        </>
    )
}

export default ScrollToTop
