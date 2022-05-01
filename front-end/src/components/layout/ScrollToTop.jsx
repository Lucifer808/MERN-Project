import React, {useState, useEffect} from 'react';
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
    const [arrow, setArrow] = useState('/Arrow.png');
    useEffect(()=>{
        const behaviorScroll = () =>{
            setScrollState(window.pageYOffset > 200)
        }
        window.addEventListener('scroll', behaviorScroll)
        return ()=>{
            window.removeEventListener('scroll', behaviorScroll)
        }
    })
    const toTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
        setScrollState(false);
    }
    return (
        <>
            <ToTopStyled scrollState={scrollState} onClick={()=>toTop()}>
            <img src={arrow} alt=""/>
            </ToTopStyled>
        </>
    )
}

export default ScrollToTop
