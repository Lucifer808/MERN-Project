import React from 'react';
import styled from 'styled-components';
import img from '../../../assets/img/slider/cate1.jpg';
import img2 from '../../../assets/img/slider/trending.jpg';
import img3 from '../../../assets/img/slider/trending9.jpg';
import img4 from '../../../assets/img/slider/trending10.jpg';
import img5 from '../../../assets/img/slider/trending7.jpg';
const Container = styled.div `
    width: 100%;
    height: 350px;
`
const CateWrapStyled = styled.div`
    margin: 20px 30px;
`
const CateTitleStyled = styled.h3``
const CateListStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
`
const CateItemStyled = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    width: 220px;
    height: 250px;
    border: 1px solid lightgray;
    cursor: pointer;
    transition: all linear .2s;
    &:hover{
        border: 1px solid #fcb800;
        .title{
            color: #5266d6;
        }
    }
`
const CateItemImageStyled = styled.img`
    height: 180px;
    width: 180px;
`
const CateItemTitleStyled = styled.h3`
    font-weight: 400;
    transition: all linear .4s;
`
const Categories = () => {
    return (
        <>
            <Container id='categories'>
                <CateWrapStyled>
                    <CateTitleStyled>Danh mục sản phẩm bán chạy của tháng</CateTitleStyled>
                    <CateListStyled>
                        <CateItemStyled>
                            <CateItemImageStyled src={img} alt=""/>
                            <CateItemTitleStyled className="title">Thiết bị điện gia dụng</CateItemTitleStyled>
                        </CateItemStyled>
                        <CateItemStyled>
                            <CateItemImageStyled src={img2} alt=""/>
                            <CateItemTitleStyled className="title">Máy vi tính & Laptop</CateItemTitleStyled>
                        </CateItemStyled>
                        <CateItemStyled>
                            <CateItemImageStyled src={img3} alt=""/>
                            <CateItemTitleStyled className="title">Thiết bị điện tử</CateItemTitleStyled>
                        </CateItemStyled>
                        <CateItemStyled>
                            <CateItemImageStyled src={img4} alt=""/>
                            <CateItemTitleStyled className="title">Thiết bị di động & Phụ kiện</CateItemTitleStyled>
                        </CateItemStyled>
                        <CateItemStyled>
                            <CateItemImageStyled src={img5} alt=""/>
                            <CateItemTitleStyled className="title">Thiết bị văn phòng</CateItemTitleStyled>
                        </CateItemStyled>
                    </CateListStyled>
                </CateWrapStyled>
            </Container>
            </>
    )
}

export default Categories
