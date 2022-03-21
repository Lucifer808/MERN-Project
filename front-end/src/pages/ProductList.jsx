import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import styled from 'styled-components';
import Products from '../components/layout/Products/Products';
const ContainerStyled = styled.div`
`
const ProductList = () => {
    return (
        <ContainerStyled>
            <Header />
            <Products />
            <Footer />
        </ContainerStyled>
    )
}

export default ProductList
