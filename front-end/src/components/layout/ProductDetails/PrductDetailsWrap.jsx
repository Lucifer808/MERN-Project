import React, { useEffect } from 'react';
import ProductSide from './ProductSide';
import RightSide from './RightSide';
import styled from 'styled-components';
const ContainerStyled = styled.div`
    display: flex;
    padding: 30px;
`
const PrductDetailsWrap = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <>
        <ContainerStyled>
            <ProductSide />
            <RightSide />
        </ContainerStyled>
        </>
    )
}

export default PrductDetailsWrap
