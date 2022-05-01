import React from 'react'
import styled from 'styled-components';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItemsToCart } from '../../../actions/cartAction';
import { removeItemsToWishList } from '../../../actions/wishListAction';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import { Typography } from "@material-ui/core";
const CartContainerStyled = styled.div`
  padding: 30px;
`
const AddressStyled = styled.h5``
const CartWrapStyled = styled.div``
const CartWrapTitleStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`
const CartTitleStyled = styled.h1`
  font-size: 34px;
  color: #000;
`
const CartDetailStyled = styled.table`
  width: 100%;
  padding: 10px 0;
`
const CartDetailHeadStyled = styled.tbody`
`
const CartDetailTrStyled = styled.tr`
`
const CartDetailThStyled = styled.th`
  background-color: rgb(242,242,242);
  padding: 14px 0;
`
const CartDetailTdStyled = styled.td`
  text-align: center;
`
const CartInfoStyled = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  max-height: 100px;
  margin: 10px 0;
`
const CartImageStyled = styled.img`
  width: 100px;
  height: 100px;
`
const CartProductTitleStyled = styled.p`
  font-weight: 400;
  margin: 0 10px;
  cursor: pointer;
  transition: all linear .2s;
  &:hover{
    color: #fcb800;
  }
`
const CartProductPriceStyled = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`

const NoCartContainerStyled = styled.div`
  text-align: center;
  height: 50vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const WishList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { wishListItems } = useSelector((state) => state.wishList);
  const deleteWishListItems = (id) => {
    dispatch(removeItemsToWishList(id));
  }
  return (
    <>
    {wishListItems.length === 0 ? (
          <NoCartContainerStyled>
            <RemoveShoppingCartOutlinedIcon style={{fontSize: '50px'}}/>
            <Typography style={{fontSize: '20px'}}>Không có sản phẩm trong danh sách yêu thích</Typography>
            <Link to="/products" style={{backgroundColor: 'rgb(51, 51,51)', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer',
            textDecoration: 'none', marginTop: '10px'}}>Xem sản phẩm</Link>
          </NoCartContainerStyled>
        ) : (
          <CartContainerStyled>
            <AddressStyled>Home / Wishlist</AddressStyled>
          <CartWrapStyled>
            <CartWrapTitleStyled>
              <CartTitleStyled>Danh sách sản phẩm yêu thích</CartTitleStyled>
            </CartWrapTitleStyled>
            <CartDetailStyled>
              <CartDetailHeadStyled>
                <CartDetailTrStyled>
                  <CartDetailThStyled>Sản phẩm</CartDetailThStyled>
                  <CartDetailThStyled>Giá</CartDetailThStyled>
                  <CartDetailThStyled>Hành động</CartDetailThStyled>
                </CartDetailTrStyled>
                {wishListItems && wishListItems.map((item) => (
                <CartDetailTrStyled key={item.product}>
                  <CartDetailTdStyled style={{width: '400px', height: '100px'}}>
                    <CartInfoStyled>
                      <CartImageStyled src={item.image}/>
                      <Link to={`/product/${item.product}`} style={{textDecoration: 'none', color: '#000'}}>
                        <CartProductTitleStyled>{item.name}</CartProductTitleStyled>
                      </Link>
                    </CartInfoStyled>
                  </CartDetailTdStyled>
                  <CartDetailTdStyled style={{width: '200px'}}>
                       <CartProductPriceStyled>{item.price?.toLocaleString()}</CartProductPriceStyled>
                  </CartDetailTdStyled>
                  <CartDetailTdStyled style={{width: '200px', textAlign: 'center'}}>
                       <DeleteOutlineOutlinedIcon style={{cursor: 'pointer', color: 'red'}} onClick={() => deleteWishListItems(item.product)}/>
                  </CartDetailTdStyled>
                </CartDetailTrStyled>
                ))}
              </CartDetailHeadStyled>
              </CartDetailStyled>
              </CartWrapStyled>
        </CartContainerStyled>)}
    </>
  )
}

export default WishList