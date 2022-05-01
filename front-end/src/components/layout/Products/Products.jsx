import React, {useEffect, useState} from 'react';
import Product from '../../child/Product';
import "slick-carousel/slick/slick.css";
import styled from 'styled-components';
import Slider from "react-slick";
import RightArrow from '../../../assets/slick-arrow/arrow1.svg';
import LeftArrow from '../../../assets/slick-arrow/arrow2.svg';
import slide1 from '../../../assets/img/slider/products1.webp';
import slide2 from '../../../assets/img/slider/products2.webp';
import slide3 from '../../../assets/img/slider/products3.webp';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import {getProduct, clearErrors} from '../../../actions/productAction';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../../child/Loader';
import {useParams} from 'react-router-dom';
import Pagination from 'react-js-pagination';
import {default as SliderMui} from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { useAlert } from 'react-alert';
const ContainerStyled = styled.div`
    padding: 30px;
    display: flex;
`
const ContainerFilterStyled = styled.div`
    flex: 1;
`
const CateStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0;
    padding: 30px;
    background-color: #f5f5f5;
`
const CateTitleStyled = styled.h3`
    margin-bottom: 20px;
    font-size: 18px;
`
const AddressLinkStyled = styled.h5``
const BrandWrapStyled = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
    font-weight: 300;
`
const BrandInputStyled = styled.input``
const BrandLabelStyled = styled.label`
    margin-left: 10px;
`
const ContainerProductsStyled = styled.div`
    flex: 4;
    width: 80%;
    height: 100%;
    padding: 30px;
    .slick-arrow{
        background-color: #000;
        position: absolute;
        background-color: transparent;
        display: flex;
        top: 50px;
        height: 20px;
        width: 20px;
        margin: 100px 34px;
        z-index: 2;
        padding: 2px;
        color: black !important;
        background-color: rgba(20, 20, 20, .2);
        border-radius: 50%;
        border: 1px solid rgba(20, 20, 20);
        transition: all .2s linear;
        &:hover{
            background-color: rgba(20, 20, 20, .8);
        }
    }
`
const SlideWrapStyled = styled.div`
    width: 100%;
    height: 300px;
`
const SlideImageStyled = styled.img`
    width: 100%;
    height: 100%;
    padding: 0 5px;
`
const SlideTitleStyled = styled.h3`
    margin: 30px 0;
`
const SortContainerStyled = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f5f5f5;
    padding: 10px;
`
const SortFoundStyled = styled.h5``
const SortWrapStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const SortSelectStyled = styled.select`
    padding: 10px;
    margin-right: 30px;
`
const SortOptionsStyled = styled.option``
const ProductsWrapStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`
const PaginationStyled = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px;
    .pagination{
        display: flex;
        justify-content: space-between;
        padding: 0;
    }
    .page-item{
        list-style-type: none;
        list-type: none;
        background-color: #fff;
        padding: 5px;
        border: 1px solid rgba(0, 0, 0, 0.178);
        transition: all .3s;
        cursor: pointer;
        margin: 0 5px;
        border-radius: 5px; 
    }
    .page-link{
        text-decoration: none;
        font: 300 16px "Roboto";
        color: rgb(80, 90, 80);
        transition: all .3s;
        padding: 0 5px;
    }
    .page-item:hover{
        background-color: rgb(230, 230, 230);
    }
    .page-link:hover .page-link{
        color: rgb(80, 80, 80);
    }
    .pageItemActive{
        background-color: #fcb800;
    }
`
const FilterBoxStyled = styled.div`
    width: 100%;
`
const CateBoxStyled = styled.ul`
    list-style-type: none;
`
const CateListItemStyled = styled.li`
    font-size: 16px;
    margin: 20px 0;
    font-weight: 300;
    transition: all .2s linear;
    &:hover {
        transform: translateX(2px) translateY(-4px);
        color: #fcb800;
        cursor: pointer;
    }
`
const RatingSortWrapStyled = styled.fieldset`
    padding: 10px 10px 0 10px;
    border: 1px solid rgba(0, 0, 0 ,0.325);
`
const categories = [
    {
        cate: "Laptop",
        title: "Laptop"
    },
    {
        cate: "Cammera",
        title: "Máy ảnh"
    },
    {
        cate: "PC",
        title: "Máy vi tính"
    },
    {
        cate: "SmartWatch",
        title: "Đồng hồ thông minh"
    },
    {
        cate: "ConsumerElectrics",
        title: "Điện tử gia dụng"
    },
    {
        cate: "Smartphone",
        title: "Điện thoại thông minh"
    },
    {
        cate: "PhoneAccessories",
        title: "Phụ kiện điện thoại"
    },
]
const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 50000000]);
    const [category, setCategory] = useState("");
    const [ratings, setRatings] = useState(0);
    const dispatch = useDispatch();
    const params = useParams();
    const keyword = params.keyword;
    const alert = useAlert();
    const {products,
        loading,
        error,
        productsCount,
        resultPerPage,
        filteredProductsCount} = useSelector((state) => state.products)
    let count = filteredProductsCount;
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
    );
    
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="nextArrow" {...props} />
    );
    const setCurrentPageNo = (e) =>{
        setCurrentPage(e)
    }
    const priceHandler = (e, newPrice)=>{
        setPrice(newPrice);
    }
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 1000,
        cssEase: "linear",
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
    };
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
          }
        dispatch(getProduct(keyword, currentPage, price, category, ratings));
    },[dispatch, keyword, currentPage, price, category, ratings, error, alert]);
    return (
        <>
        <ContainerStyled>
        <ContainerFilterStyled>
            <AddressLinkStyled>Home / Products</AddressLinkStyled>
            <FilterBoxStyled>
                <CateStyled>
                    <Typography style={{fontSize: '18px', fontWeight: '500', backgroundColor: '#f5f5f5'}}>Danh mục sản phẩm</Typography>
                    <CateBoxStyled>
                        {
                            categories.map((category, index) => (
                                <CateListItemStyled
                                    className='category-link'
                                    key={index}
                                    onClick={() => setCategory(category.cate)}
                                >
                                    {category.title}
                                </CateListItemStyled>
                            ))
                        }
                    </CateBoxStyled>
                </CateStyled>
                <Typography style={{marginBottom: '40px'}}>Giá</Typography>
                <SliderMui 
                    value={price}
                    onChange={priceHandler}
                    valueLabelDisplay="on"
                    aria-labelledby="range-slider"
                    min={0}
                    max={50000000}
                />
                <RatingSortWrapStyled>
                    <Typography component="legend">Số sao</Typography>
                    <SliderMui
                        value={ratings}
                        onChange={(e, newRating) =>{
                            setRatings(newRating);
                        }}
                        aria-labelledby="continous-slider"
                        valueLabelDisplay="auto"
                        marks
                        min={0}
                        max={5}
                    />
                </RatingSortWrapStyled>
            </FilterBoxStyled>
            <CateStyled>
                <CateTitleStyled>Thương hiệu</CateTitleStyled>
                <BrandWrapStyled>
                    <BrandInputStyled type="checkbox" value="apple" name="brand"/>
                    <BrandLabelStyled>Apple</BrandLabelStyled>
                </BrandWrapStyled>
                <BrandWrapStyled>
                    <BrandInputStyled type="checkbox" value="asus" name="brand"/>
                    <BrandLabelStyled>Asus</BrandLabelStyled>
                </BrandWrapStyled>
                <BrandWrapStyled>
                    <BrandInputStyled type="checkbox" value="acer" name="brand"/>
                    <BrandLabelStyled>Acer</BrandLabelStyled>
                </BrandWrapStyled>
                <BrandWrapStyled>
                    <BrandInputStyled type="checkbox" value="samsung" name="brand"/>
                    <BrandLabelStyled>Samsung</BrandLabelStyled>
                </BrandWrapStyled>
                <BrandWrapStyled>
                    <BrandInputStyled type="checkbox" value="dell" name="brand"/>
                    <BrandLabelStyled>Dell</BrandLabelStyled>
                </BrandWrapStyled>
                <BrandWrapStyled>
                    <BrandInputStyled type="checkbox" value="sony" name="brand"/>
                    <BrandLabelStyled>Sony</BrandLabelStyled>
                </BrandWrapStyled>
                <BrandWrapStyled>
                    <BrandInputStyled type="checkbox" value="lenovo" name="brand"/>
                    <BrandLabelStyled>Lenovo</BrandLabelStyled>
                </BrandWrapStyled>
                <BrandWrapStyled>
                    <BrandInputStyled type="checkbox" value="microsoft" name="brand"/>
                    <BrandLabelStyled>Microsoft</BrandLabelStyled>
                </BrandWrapStyled>
                <BrandWrapStyled>
                    <BrandInputStyled type="checkbox" value="msi" name="brand"/>
                    <BrandLabelStyled>MSI</BrandLabelStyled>
                </BrandWrapStyled>
                <BrandWrapStyled>
                    <BrandInputStyled type="checkbox" value="lg" name="brand"/>
                    <BrandLabelStyled>LG</BrandLabelStyled>
                </BrandWrapStyled>
                <BrandWrapStyled>
                    <BrandInputStyled type="checkbox" value="gigabyte" name="brand"/>
                    <BrandLabelStyled>Gigabyte</BrandLabelStyled>
                </BrandWrapStyled>
            </CateStyled>
        </ContainerFilterStyled>
        <ContainerProductsStyled>
        {loading ? <Loader /> : <>
            <SlideTitleStyled>Điện tử - Điện lạnh</SlideTitleStyled>
            <Slider {...settings}>  
                <SlideWrapStyled>
                        <SlideImageStyled src={slide1} alt="" />  
                </SlideWrapStyled>
                <SlideWrapStyled>
                        <SlideImageStyled src={slide2} alt="" />  
                </SlideWrapStyled>
                <SlideWrapStyled>
                        <SlideImageStyled src={slide3} alt="" />  
                </SlideWrapStyled>
            </Slider>
            <SortContainerStyled>
                {keyword ? (
                    <SortFoundStyled>Kết quả tìm kiếm theo: {keyword}</SortFoundStyled>
                ):(
                    productsCount > 0 ? (
                        <SortFoundStyled>{productsCount} sản phẩm được tìm thấy</SortFoundStyled>
                    ) : (
                        <SortFoundStyled>Không tìm thấy sản phẩm</SortFoundStyled>
                    )
                )}
                <SortWrapStyled>
                    <SortSelectStyled>
                        <SortOptionsStyled>Mới nhất</SortOptionsStyled>
                        <SortOptionsStyled>Nổi bật nhất</SortOptionsStyled>
                        <SortOptionsStyled>Xếp hạng cao nhất</SortOptionsStyled>
                        <SortOptionsStyled>Sắp xếp theo giá: Từ thấp đến cao</SortOptionsStyled>
                        <SortOptionsStyled>Sắp xếp theo giá: Từ cao đến thấp</SortOptionsStyled>
                    </SortSelectStyled>
                        <SortFoundStyled>Hiển thị:</SortFoundStyled>
                        <GridOnOutlinedIcon style={{fontSize: '20px', marginLeft: '10px', cursor: 'pointer'}}/>
                        <FormatListBulletedOutlinedIcon style={{fontSize: '20px', marginLeft: '10px', cursor: 'pointer'}}/>
                </SortWrapStyled>
            </SortContainerStyled>
            <ProductsWrapStyled>
            {products && products.map((product) =><Product product = {product} key={product._id}/>)}
            </ProductsWrapStyled>
                <PaginationStyled>
                    <Pagination 
                        activePage = {currentPage}
                        itemsCountPerPage={resultPerPage}
                        totalItemsCount={productsCount}
                        onChange={setCurrentPageNo}
                        nextPageText="Tiếp theo"
                        prevPageText="Trở lại"
                        firstPageText="Trang đầu"
                        lastPageText="Trang cuối"
                        itemClass="page-item"
                        linkClass="page-link"
                        activeClass="pageItemActive"
                        activeLinkClass="pageLinkActive"
                    />
                </PaginationStyled>
            
        </>}
        </ContainerProductsStyled>
        </ContainerStyled>
        </>
    )
}

export default Products
