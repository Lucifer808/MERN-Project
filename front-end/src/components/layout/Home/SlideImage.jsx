import React from 'react';
import styled from 'styled-components';
import img1 from '../../../assets/img/slider/midslide.jpeg';
import img2 from '../../../assets/img/slider/midslide2.jpeg';
import img3 from '../../../assets/img/slider/promotion-1.jpg';
import img4 from '../../../assets/img/slider/botslide.jpeg';
import img5 from '../../../assets/img/slider/slide3.jpeg';
const MidBannerWrapStyled = styled.div`
    height: 320px;
    width: 100%;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const MidBannerImageStyled = styled.img`
    width: 100%;
    height: 216px;
`
const BottomBannerStyled = styled.img``
const SlideImage = ({...props}) => {
    return (
        <>
        <div id='slideimage'>
            {props.slide === "top" ? (
                <MidBannerWrapStyled>
                    <MidBannerImageStyled src={img1} alt=""/>
                    <MidBannerImageStyled src={img2} alt=""/>
                    <MidBannerImageStyled src={img3} alt=""/>
                </MidBannerWrapStyled>
            ) : (
                <MidBannerWrapStyled>
                    <BottomBannerStyled style={{width: '800px', height: '250px'}} src={img5} alt=""/>
                    <BottomBannerStyled style={{width: '550px', height: '250px'}} src={img4} alt=""/>
                </MidBannerWrapStyled>
            )}
        </div>
        </>
    )
}

export default SlideImage
