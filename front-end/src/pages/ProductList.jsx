import React from 'react';
import styled from 'styled-components';
import Products from '../components/layout/Products/Products';
const ContainerStyled = styled.div`
`
const ProductList = () => {
    return (
        <>
            <ContainerStyled>
                <Products />
            </ContainerStyled>
        </>
    )
}

export default ProductList
