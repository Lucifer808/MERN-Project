import React, {useState} from 'react'
import styled from 'styled-components';
import ReactStars from 'react-rating-stars-component';
import img1 from '../../../assets/img/vendor/apple.jpg';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
const ReviewContainerStyled = styled.div`
    margin: 20px 0;
`
const ReviewLeftSideWrapStyled = styled.div`
    display: flex;
    margin: 10px 0;
`
const ReviewRightSideWrapStyled = styled.div``
const ReviewTitleWrapStyled = styled.div`
    margin-left: 10px;
`
const ReviewAvatarStyled = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`
const ReviewNameStyled = styled.h4`
    font-weight: 400;
`
const ReviewContentStyled = styled.h4`
    font-weight: 400;
`
const ReviewActionContainerStyled = styled.div`
    display: flex;
`
const ReviewActionWrapStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2px 4px;
    margin: 10px 10px 10px 0;
    border: 1px solid #32a6f6;
    border-radius: 5px;
    cursor: pointer;
`
const ReviewActionStyled = styled.h4`
    color: #32a6f6;
    margin: 0 4px;
    font-size: 14px;
`
const ReviewShowMoreBtnStyled = styled.button``
const ProductReviewCard = ({review}) => {
    const [showMore, setShowMore] = useState(false);
    const options = {
        edit: false,
        color: 'rgba(20, 20, 20, .4)',
        activeColor: '#fcb800',
        size: window.innerWidth < 600 ? 15 : 20,
        value: review.rating,
        isHalf: true
    }
    return (
        <>
        <ReviewContainerStyled>
            <ReviewLeftSideWrapStyled>
                <ReviewAvatarStyled src={img1} />
                <ReviewTitleWrapStyled>
                    <ReviewNameStyled>{review.name}</ReviewNameStyled>
                    <ReactStars {...options} />
                </ReviewTitleWrapStyled>
            </ReviewLeftSideWrapStyled>
            <ReviewRightSideWrapStyled>
                <ReviewContentStyled>{showMore ? review.comment :`${review.comment.slice(0, 500)}` }
                    {   review.comment.length >= 500 &&
                        <ReviewShowMoreBtnStyled onClick={() => setShowMore(!showMore)}>{showMore ? 'Thu gọn' : '...'}</ReviewShowMoreBtnStyled>
                    }
                </ReviewContentStyled>
                <ReviewActionContainerStyled>
                    <ReviewActionWrapStyled>
                        <ThumbUpAltOutlinedIcon style={{fontSize: '14px',color: '#32a6f6'}} />
                        <ReviewActionStyled>Hữu ích</ReviewActionStyled>
                    </ReviewActionWrapStyled>
                    <ReviewActionWrapStyled>
                        <ChatBubbleOutlineOutlinedIcon style={{fontSize: '14px',color: '#32a6f6'}} />
                        <ReviewActionStyled>Trả lời</ReviewActionStyled>
                    </ReviewActionWrapStyled>
                </ReviewActionContainerStyled>
            </ReviewRightSideWrapStyled>
        </ReviewContainerStyled>
        </>
    )
}

export default ProductReviewCard
