import React,  {useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import { image } from '../../../Static/dummydata';
import ReactStars from 'react-rating-stars-component';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../../actions/productAction';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProductReviewCard from './ProductReviewCard';
import Loader from '../../child/Loader';
const WrapperStyled = styled.div`
    display: flex;
    flex: 4;
    width: 100%;
    margin-bottom: 10px;
    .custom-indicator li {
        width: 50px;
        height: 50px;
        filter: grayscale(80%);
    }
    .custom-indicator li.slick-active {
        filter: grayscale(0%);
    }
`
const ContainerStyled = styled.div`
    width: 80%;
    padding-right: 30px;
`
const ProductSideAddressStyled = styled.h5`
    padding-bottom: 30px;
    flex: 4;
`
const ProductSideContainerStyled = styled.div`
    width: 340px;
    height: 340px;
`
const ProductSideWrapStyled = styled.div`
    width: 340px;
    height: 340px;
`
const ProductSideImageStyled = styled.img``
const ProductSideInfoWrap = styled.div`
    padding-left: 30px;
`
const ProductSideTitleWrapStyled = styled.div`
    border-bottom: 1px solid lightgray;
`
const TopSideTitleStyled = styled.h3`
    font-size: 20px;
    font-weight: 400;
    overflow: hidden;
`
const TopSideBrandWrapStyled = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const TopSideBrandStyled = styled.h5``
const TopSideRatingWrapStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 4px 8px;
    letter-spacing: 1px;
`
const TopSideBrandNameStyled = styled.span`
    color: #4277ce;
    font-size: 16px;
    font-weight: 400;
    padding-right: 8px;
    border-right: 1px solid lightgray;
`
const TopSideCountStyled = styled.span``
const InfoWrapStyled = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid lightgray;
`
const PriceWrapStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const NewPriceStyled = styled.h4`
    font-size: 20px;
    color: red;
`
const OldPriceStyled = styled.h5`
    padding: 4px 0 0 8px;
    text-decoration: line-through;
    font-weight: 300;
`
const SoldByWrapStyled = styled.div`
    margin: 20px 0;
`
const SoldByTitleStyled = styled.h5`
    font-size: 16px;
    font-weight: 400;
`
const SoldByNameStyled = styled.span`
    color: #4277ce;
    font-size: 18px;
    font-weight: 500;
    padding-right: 8px;
`
const DescContainerStyled = styled.div``
const DescWrapStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const DescDotStyled = styled.div`
    height: 6px;
    width: 6px;
    margin: 14px 0; 
    background-color: #888;
    border-radius: 50%;
`
const DescTitleStyled = styled.span`
    margin-left: 10px;
    font-weight: 300;
`
const BuyingContainerStyled = styled.div`
    margin: 20px 0;
    border-bottom: 1px solid lightgray;
    padding-bottom: 20px;
`
const BuyingTitleStyled = styled.h4`
    font-weight: 400;
    font-size: 18px;
`
const BuyingQuantityWrapStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid lightgray;
    border-radius: 5px;
    width: 100px;
    height: 30px;
    margin-top: 10px;
`
const BuyingQuantityInputStyled = styled.input`
    outline: none;
    border: none;
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
    padding: 4px;
    width: 50px;
    text-align: center;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`
const BuyingBtnStyled = styled.button`
    margin-top: 10px;
    padding: 14px 70px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    background-color: #fcb800;
    border: none;
    border-radius: 5px;
    transition: all .2s linear;
    &:hover {
        background-color: #222;
        color: #fff;
    }
`
const TagContainerStyled = styled.div``
const TagReportStyled = styled.h5`
    font-size: 14px;
    text-decoration: underline;
    font-weight: 400;
    cursor: pointer;
    color: #6e6660;
`
const TagIdStyled = styled.h4`
    margin: 5px 0;
    font-weight: 400;
`
const TagCateTitleStyled = styled.h4`
    margin: 5px 0;
    font-weight: 400;
`
const TageCateDescStyled = styled.span`
    color: #4277ce;
    cursor: pointer;
    transition: all .4s linear;
    &:hover{
        color: #fcb800;
    }
`
const TagIconContainerStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const TagIconWrapStyled = styled.div`
    cursor: pointer;
    padding: 5px 10px 0 0;
`
const ProductDescWrap = styled.div`
    padding-right: 30px;
    overflow: auto;
`
const ProductDescContentWrapStyled = styled.div`
    margin: 20px 0;
`
const ProductDescContentStyle = styled.p`
    font-weight: 300;
    font-size: 17px;
    padding: 5px 0;
`
const ProductDescListStyled = styled.ul`
    list-style-type: circle;
    padding-left: 20px;
`
const ProductDescItemStyled = styled.li`
    margin: 10px 0;
    font-weight: 300;
    font-size: 17px;
`
const ProductSpecWrapStyled = styled.div``
const ProductSpecTableStyled = styled.table`
    border: 1px solid lightgray;
    border-collapse: collapse;
    width: 100%;
`
const ProductSpecTableBodyStyled = styled.tbody`
`
const ProductSpecTableTrStyled = styled.tr`
`
const ProductSpecTableTdStyled = styled.td`
    border: 1px solid lightgray;
    padding: 20px 10px;
    font-weight: 300;
    font-size: 17px;
`
const ProductReviewWrapStyled = styled.div`
`
const ProductReviewStyled = styled.form`
`
const ProductReviewInputStyled = styled.textarea``
const ProductReviewBtnStyled = styled.button``
const ProductReviewsWrapStyled = styled.div``
const ProductReviewsNotification = styled.p``
const ProductSide = () => {
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductDetails(params.id))
    },[dispatch, params.id])
    const {product, loading} = useSelector((state) => state.productDetails);
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function(i) {
            return (
                <div>
                    <img 
                    src={image[i]}
                    alt="" 
                    style={{width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px'}}/>
                </div>
            )
        },
        dotsClass: "slick-dots custom-indicator",
        arrows: false
    };
    const options = {
        edit: false,
        color: 'rgba(20, 20, 20, .4)',
        activeColor: '#fcb800',
        size: window.innerWidth < 600 ? 15 : 20,
        value: product.ratings,
        isHalf: true
    }
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            {loading ? <Loader /> : (
            <ContainerStyled>
            <ProductSideAddressStyled>Home / Shop / Sound Intone I65 Earphone White Version </ProductSideAddressStyled>
            <WrapperStyled>
                <ProductSideContainerStyled>
                <Slider {...settings}> 
                    {
                        image.map((item, index) => {
                            return (
                            <ProductSideWrapStyled>
                                <ProductSideImageStyled key={index} src={item} alt="" style={{width: '340px', height: '340px'}}/>
                            </ProductSideWrapStyled>
                            )
                        })
                    }
                </Slider>
                </ProductSideContainerStyled>
                <ProductSideInfoWrap>
                    <ProductSideTitleWrapStyled>
                        <TopSideTitleStyled>Sound Intone I65 Earphone White Version 1 Limited Special Edition 123</TopSideTitleStyled>
                        <TopSideBrandWrapStyled>
                            <TopSideBrandStyled>Thương hiệu: <TopSideBrandNameStyled>Asus</TopSideBrandNameStyled></TopSideBrandStyled>
                            <TopSideRatingWrapStyled>
                                <ReactStars {...options}/>
                                <TopSideCountStyled>({product.numOfReviews})</TopSideCountStyled>
                            </TopSideRatingWrapStyled>
                        </TopSideBrandWrapStyled>
                    </ProductSideTitleWrapStyled>
                    <InfoWrapStyled>
                        <PriceWrapStyled>
                            <NewPriceStyled>{product.price?.toLocaleString()} VND</NewPriceStyled>
                            <OldPriceStyled>350.000 VND</OldPriceStyled>
                        </PriceWrapStyled>
                        <SoldByWrapStyled>
                            <SoldByTitleStyled>Người bán: <SoldByNameStyled>Young Shop</SoldByNameStyled></SoldByTitleStyled>
                        </SoldByWrapStyled>
                        <DescContainerStyled>
                            <DescWrapStyled>
                                <DescDotStyled />
                                <DescTitleStyled>Unrestrained and portable active stereo speaker</DescTitleStyled>
                            </DescWrapStyled>
                            <DescWrapStyled>
                                <DescDotStyled />
                                <DescTitleStyled>Free from the confines of wires and chords</DescTitleStyled>
                            </DescWrapStyled>
                            <DescWrapStyled>
                                <DescDotStyled />
                                <DescTitleStyled>20 hours of portable capabilities</DescTitleStyled>
                            </DescWrapStyled>
                            <DescWrapStyled>
                                <DescDotStyled />
                                <DescTitleStyled>Double-ended Coil Cord with 3.5mm Stereo Plugs Included</DescTitleStyled>
                            </DescWrapStyled>
                            <DescWrapStyled>
                                <DescDotStyled />
                                <DescTitleStyled>3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</DescTitleStyled>
                            </DescWrapStyled>
                        </DescContainerStyled>
                    </InfoWrapStyled>
                    <BuyingContainerStyled>
                        <BuyingTitleStyled>Số lượng</BuyingTitleStyled>
                        <BuyingQuantityWrapStyled>
                            <RemoveIcon style={{cursor: 'pointer'}}/>
                            <BuyingQuantityInputStyled defaultValue="1" type="number" min="0"/>
                            <AddIcon style={{cursor: 'pointer'}}/>
                            <InsertChartOutlinedIcon style={{margin: '0 10px', fontSize: '30px', cursor: 'pointer'}} />
                            <FavoriteBorderOutlinedIcon style={{fontSize: '30px', cursor: 'pointer'}} />
                        </BuyingQuantityWrapStyled>
                        <BuyingTitleStyled style={{fontSize: '16px', marginTop: '10px'}}>{product.stock} sản phẩm có sẳn</BuyingTitleStyled>
                        <BuyingBtnStyled>Thêm vào giỏ hàng</BuyingBtnStyled>
                    </BuyingContainerStyled>
                    <TagContainerStyled>
                        <TagReportStyled>Báo cáo vi phạm</TagReportStyled>
                        <TagIdStyled>SKU: {product._id}</TagIdStyled>
                        <TagCateTitleStyled>Phân loại sản phẩm: <TageCateDescStyled>{product.category}</TageCateDescStyled></TagCateTitleStyled>
                        <TagCateTitleStyled>Tags: 
                        <TageCateDescStyled> công nghệ</TageCateDescStyled>,
                        <TageCateDescStyled> thiết bị không dây</TageCateDescStyled>, 
                        <TageCateDescStyled> laptop</TageCateDescStyled>
                        </TagCateTitleStyled>
                        <TagIconContainerStyled>
                            <TagIconWrapStyled>
                                <FacebookIcon style={{fontSize: '30px', color: '#3b5999'}}/>
                            </TagIconWrapStyled>
                            <TagIconWrapStyled>
                                <TwitterIcon style={{fontSize: '30px', color: '#55acee'}}/>
                            </TagIconWrapStyled>
                            <TagIconWrapStyled>
                                <GoogleIcon style={{fontSize: '30px', color: '#dd4b39'}}/>
                            </TagIconWrapStyled>
                            <TagIconWrapStyled>
                                <LinkedInIcon style={{fontSize: '30px', color: '#0077b5'}}/>
                            </TagIconWrapStyled>
                            <TagIconWrapStyled>
                                <InstagramIcon style={{fontSize: '30px', color: 'rgb(197 63 130)'}}/>
                            </TagIconWrapStyled>
                        </TagIconContainerStyled>
                    </TagContainerStyled>
                </ProductSideInfoWrap>
            </WrapperStyled>
            <ProductDescWrap>
                <Box sx={{ width: '100%' , height: '100%' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} variant='fullWidth'>
                        <Tab label="Mô tả sản phẩm" value="1" />
                        <Tab label="Thông số kĩ thuật" value="2" />
                        <Tab label="Bình luận & Đánh giá" value="3" />
                    </TabList>
                    </Box>
                    <TabPanel value="1">
                    <ProductDescContentWrapStyled>
                        <ProductDescContentStyle>
                            Apple MacBook Air (2020) M1 Chip, 13.3-inch, 16GB, 256GB SSD
                        </ProductDescContentStyle>
                    </ProductDescContentWrapStyled>
                    <ProductDescContentWrapStyled>
                        <ProductDescContentStyle>
                            Máy tính xách tay mỏng và nhẹ nhất của Apple, nay siêu mạnh mẽ với chip Apple M1. Xử lý công việc giúp bạn với CPU 8 lõi nhanh như chớp. Đưa các ứng dụng và game có đồ họa khủng lên một tầm cao mới với GPU 7 lõi. Đồng thời, tăng tốc các tác vụ máy học với Neural Engine 16 lõi. Tất cả gói gọn trong một thiết kế không quạt, giảm thiểu tiếng ồn, thời lượng pin dài nhất từ trước đến nay lên đến 18 giờ (1) MacBook Air. Vẫn cực kỳ cơ động. Mà mạnh mẽ hơn nhiều.
                        </ProductDescContentStyle>
                    </ProductDescContentWrapStyled>
                    <ProductDescContentWrapStyled>
                        <ProductDescContentStyle>
                            Tính năng nổi bật :
                        </ProductDescContentStyle>
                    <ProductDescListStyled>
                        <ProductDescItemStyled>Chip M1 do Apple thiết kế tạo ra một cú nhảy vọt về hiệu năng máy học, CPU và GPU </ProductDescItemStyled>
                        <ProductDescItemStyled>Tăng thời gian sử dụng với thời lượng pin lên đến 18 giờ (1) </ProductDescItemStyled>
                        <ProductDescItemStyled>CPU 8 lõi cho tốc độ nhanh hơn đến 3.5x, xử lý công việc nhanh chóng hơn bao giờ hết (2) </ProductDescItemStyled>
                        <ProductDescItemStyled>GPU lên đến 7 lõi với tốc độ xử lý đồ họa nhanh hơn đến 5x cho các ứng dụng và game đồ họa khủng (2) </ProductDescItemStyled>
                        <ProductDescItemStyled>Neural Engine 16 lõi cho công nghệ máy học hiện đại </ProductDescItemStyled>
                        <ProductDescItemStyled>Bộ nhớ thống nhất 16GB giúp bạn làm việc gì cũng nhanh chóng và trôi chảy </ProductDescItemStyled>
                        <ProductDescItemStyled>Ổ lưu trữ SSD siêu nhanh giúp mở các ứng dụng và tập tin chỉ trong tích tắc </ProductDescItemStyled>
                        <ProductDescItemStyled>Màn hình Retina 13.3 inch với dải màu rộng P3 cho hình ảnh sống động và chi tiết ấn tượng (3) </ProductDescItemStyled>
                        <ProductDescItemStyled>Camera FaceTime HD với bộ xử lý tín hiệu hình ảnh tiên tiến cho các cuộc gọi video đẹp hình, rõ tiếng hơn </ProductDescItemStyled>
                        <ProductDescItemStyled>Bộ ba micro phối hợp tập trung thu giọng nói của bạn, không thu tạp âm môi trường </ProductDescItemStyled>
                        <ProductDescItemStyled>Wi-Fi 6 thế hệ mới giúp kết nối nhanh hơn </ProductDescItemStyled>
                        <ProductDescItemStyled>Hai cổng Thunderbolt / USB 4 để sạc và kết nối phụ kiện </ProductDescItemStyled>
                        <ProductDescItemStyled>Bàn phím Magic Keyboard có đèn nền và Touch ID giúp mở khóa và thanh toán an toàn hơn </ProductDescItemStyled>
                        <ProductDescItemStyled>macOS Big Sur với thiết kế mới đầy táo bạo cùng nhiều cập nhật quan trọng cho các ứng dụng Safari, Messages và Maps </ProductDescItemStyled>
                        <ProductDescItemStyled>Hiện có màu vàng kim, xám bạc và bạc </ProductDescItemStyled>
                    </ProductDescListStyled>
                    </ProductDescContentWrapStyled>
                    <ProductDescContentWrapStyled>
                        <ProductDescContentStyle>
                            Hiện có sẵn các lựa chọn để nâng cấp. 
                        </ProductDescContentStyle>
                        <ProductDescContentStyle>
                            (1) Thời lượng pin khác nhau tùy theo cách sử dụng và cấu hình. Truy cập apple.com/batteries để biết thêm thông tin. 
                        </ProductDescContentStyle>
                        <ProductDescContentStyle>
                            (2) So với thế hệ máy trước. 
                        </ProductDescContentStyle>
                        <ProductDescContentStyle>
                            (3) Kích thước màn hình tính theo đường chéo. 
                        </ProductDescContentStyle>
                    </ProductDescContentWrapStyled>
                    <ProductDescContentWrapStyled>
                        <ProductDescContentStyle>
                            Thông tin bảo hành: 
                        </ProductDescContentStyle>
                        <ProductDescContentStyle>
                            Bảo hành: 12 tháng kể từ ngày kích hoạt sản phẩm. 
                        </ProductDescContentStyle>
                        <ProductDescContentStyle>
                            Kích hoạt bảo hành tại: https://checkcoverage.apple.com/vn/en/ 
                        </ProductDescContentStyle>
                    </ProductDescContentWrapStyled>
                    <ProductDescContentWrapStyled>
                        <ProductDescContentStyle>
                            Hướng dẫn kiểm tra địa điểm bảo hành gần nhất: 
                        </ProductDescContentStyle>
                        <ProductDescContentStyle>
                            Bước 1: Truy cập vào đường link https://getsupport.apple.com/?caller=grl&locale=en_VN 
                        </ProductDescContentStyle>
                        <ProductDescContentStyle>
                            Bước 2: Chọn sản phẩm. 
                        </ProductDescContentStyle>
                        <ProductDescContentStyle>
                            Bước 3: Điền Apple ID, nhập mật khẩu. 
                        </ProductDescContentStyle>
                        <ProductDescContentStyle>
                        Sau khi hoàn tất, hệ thống sẽ gợi ý những trung tâm bảo hành gần nhất. 
                        </ProductDescContentStyle>
                    </ProductDescContentWrapStyled>
                    </TabPanel>
                    <TabPanel value="2">
                        <ProductSpecWrapStyled>
                            <ProductSpecTableStyled>
                                <ProductSpecTableBodyStyled>
                                    <ProductSpecTableTrStyled>
                                        <ProductSpecTableTdStyled>Thương hiệu</ProductSpecTableTdStyled>
                                        <ProductSpecTableTdStyled>Apple</ProductSpecTableTdStyled>
                                    </ProductSpecTableTrStyled>
                                    <ProductSpecTableTrStyled>
                                        <ProductSpecTableTdStyled>Màu</ProductSpecTableTdStyled>
                                        <ProductSpecTableTdStyled>Xám, Bạc</ProductSpecTableTdStyled>
                                    </ProductSpecTableTrStyled>
                                    <ProductSpecTableTrStyled>
                                        <ProductSpecTableTdStyled>Cổng kết nối</ProductSpecTableTdStyled>
                                        <ProductSpecTableTdStyled>USB 3.1 (3.1 Gen 2) Type-C,Thunderbolt 3</ProductSpecTableTdStyled>
                                    </ProductSpecTableTrStyled>
                                    <ProductSpecTableTrStyled>
                                        <ProductSpecTableTdStyled>CPU</ProductSpecTableTdStyled>
                                        <ProductSpecTableTdStyled>Apple M1</ProductSpecTableTdStyled>
                                    </ProductSpecTableTrStyled>
                                    <ProductSpecTableTrStyled>
                                        <ProductSpecTableTdStyled>RAM</ProductSpecTableTdStyled>
                                        <ProductSpecTableTdStyled>16 GB</ProductSpecTableTdStyled>
                                    </ProductSpecTableTrStyled>
                                    <ProductSpecTableTrStyled>
                                        <ProductSpecTableTdStyled>Ổ cứng</ProductSpecTableTdStyled>
                                        <ProductSpecTableTdStyled>256 GB SSD</ProductSpecTableTdStyled>
                                    </ProductSpecTableTrStyled>
                                    <ProductSpecTableTrStyled>
                                        <ProductSpecTableTdStyled>Card màn hình</ProductSpecTableTdStyled>
                                        <ProductSpecTableTdStyled>Card tích hợp, 8 nhân GPU</ProductSpecTableTdStyled>
                                    </ProductSpecTableTrStyled>
                                    <ProductSpecTableTrStyled>
                                        <ProductSpecTableTdStyled>Đặc biệt</ProductSpecTableTdStyled>
                                        <ProductSpecTableTdStyled>Có đèn bàn phím</ProductSpecTableTdStyled>
                                    </ProductSpecTableTrStyled>
                                    <ProductSpecTableTrStyled>
                                        <ProductSpecTableTdStyled>Hệ điều hành</ProductSpecTableTdStyled>
                                        <ProductSpecTableTdStyled>Mac OS</ProductSpecTableTdStyled>
                                    </ProductSpecTableTrStyled>
                                    <ProductSpecTableTrStyled>
                                        <ProductSpecTableTdStyled>Thiết kế</ProductSpecTableTdStyled>
                                        <ProductSpecTableTdStyled>Vỏ kim loại nguyên khối</ProductSpecTableTdStyled>
                                    </ProductSpecTableTrStyled>
                                    <ProductSpecTableTrStyled>
                                        <ProductSpecTableTdStyled>Kích thước, trọng lượng</ProductSpecTableTdStyled>
                                        <ProductSpecTableTdStyled>Dài 304.1 mm - Rộng 212.4 mm - Dày 15.6 mm - Nặng 1.4 kg</ProductSpecTableTdStyled>
                                    </ProductSpecTableTrStyled>
                                    <ProductSpecTableTrStyled>
                                        <ProductSpecTableTdStyled>Thời điểm ra mắt</ProductSpecTableTdStyled>
                                        <ProductSpecTableTdStyled>2020</ProductSpecTableTdStyled>
                                    </ProductSpecTableTrStyled>
                                </ProductSpecTableBodyStyled>
                            </ProductSpecTableStyled>
                        </ProductSpecWrapStyled>
                    </TabPanel>
                    <TabPanel value="3">
                        <ProductReviewWrapStyled>
                            <ProductReviewStyled>
                                <ProductReviewInputStyled cols="100" rows="5" type="text" placeholder="Nhập bình luận tại đây..."/>
                                <ProductReviewBtnStyled>Bình luận</ProductReviewBtnStyled>
                            </ProductReviewStyled>
                            {product.reviews && product.reviews[0] ? (
                                <ProductReviewsWrapStyled>
                                    {product.reviews && 
                                        product.reviews.map((review, index)=><ProductReviewCard key={index} review={review} />)
                                    }
                                </ProductReviewsWrapStyled>
                            ):(
                                <ProductReviewsNotification>Không có bình luận nào về sản phẩm</ProductReviewsNotification>
                            )}
                        </ProductReviewWrapStyled>
                    </TabPanel>
                </TabContext>
                </Box>
            </ProductDescWrap>
        </ContainerStyled>
        )}
        </>
    )
}

export default ProductSide
