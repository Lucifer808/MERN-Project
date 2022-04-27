import React from 'react';
import styled from 'styled-components';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItemsToCart, removeItemsToCart } from '../../../actions/cartAction';
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
const BuyingQuantityWrapStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid lightgray;
    border-radius: 5px;
    width: 100px;
    height: 30px;
    margin-left: 60px;
`
const BackBtnStyled = styled.button`
  padding: 14px 10px;
  border-radius: 5px;
  border: none;
  background-color: #fcb800;
  color: #000;
  transition: all linear .2s;
  cursor: pointer;
  &:hover{
    background-color: #222;
    color: #fff;
  }
`
const CartDetailBottomStyled = styled.div`
  display: flex;
  justify-content: space-between;
`
const CartDetailTotalWrapStyled = styled.div`
  background-color: rgb(242,242,242);
`
const CartDetailTotalTitleWrapStyled = styled.div`
  padding: 0px 30px;
`
const CartDetailTotalTitleStyled = styled.p`
  padding: 30px 0;
  color: #999;
  border-bottom: 1px solid #ccc;
`
const CartDetailTotalHeaderStyled = styled.p`
  padding: 30px 30px 0 30px;
  font-size: 18px;
  color: #444;
`
const CartDetailTotalBottomWrapStyled = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const CartDetailTotalStyled = styled.p``
const CartDetailTotalContainerStyled = styled.div`
  width: 400px;
`
const CheckoutBtnStyled = styled.button`
  padding: 14px 10px;
  width: 100%;
  margin: 14px 0;
  font-size: 18px;
  font-weight: 400;
  border-radius: 5px;
  border: none;
  background-color: #fcb800;
  color: #000;
  transition: all linear .2s;
  cursor: pointer;
  &:hover{
    background-color: #222;
    color: #fff;
  }
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
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const increaseQuantity = (id, qty, stock) =>{
    const newQty = qty + 1;
    if(qty >= stock){
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  }
  const decreaseQuantity = (id, qty) =>{
    const newQty = qty - 1;
    if(1 >= qty){
      return;
    }
    dispatch(addItemsToCart(id, newQty))
  }
  const deleteCartItems = (id) => {
    dispatch(removeItemsToCart(id));
  }
  const checkoutHandler = () =>{
    navigate('/login?redirect=shipping', {replace: true});
  }
  return (
    <>
        {cartItems.length === 0 ? (
          <NoCartContainerStyled>
            <RemoveShoppingCartOutlinedIcon style={{fontSize: '50px'}}/>
            <Typography style={{fontSize: '20px'}}>Không có sản phẩm trong giỏ hàng</Typography>
            <Link to="/products" style={{backgroundColor: 'rgb(51, 51,51)', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer',
            textDecoration: 'none', marginTop: '10px'}}>Xem sản phẩm</Link>
          </NoCartContainerStyled>
        ) : (
          <CartContainerStyled>
            <AddressStyled>Home / Shopping Cart</AddressStyled>
          <CartWrapStyled>
            <CartWrapTitleStyled>
              <CartTitleStyled>Giỏ hàng</CartTitleStyled>
            </CartWrapTitleStyled>
            <CartDetailStyled>
              <CartDetailHeadStyled>
                <CartDetailTrStyled>
                  <CartDetailThStyled>Sản phẩm</CartDetailThStyled>
                  <CartDetailThStyled>Giá</CartDetailThStyled>
                  <CartDetailThStyled>Số lượng</CartDetailThStyled>
                  <CartDetailThStyled>Thành tiền</CartDetailThStyled>
                  <CartDetailThStyled>Hành động</CartDetailThStyled>
                </CartDetailTrStyled>
                {cartItems && cartItems.map((item) => (
                <CartDetailTrStyled key={item.product}>
                  <CartDetailTdStyled style={{width: '400px', height: '100px'}}>
                    <CartInfoStyled>
                      <CartImageStyled src={item.image}/>
                      <CartProductTitleStyled>{item.name}</CartProductTitleStyled>
                    </CartInfoStyled>
                  </CartDetailTdStyled>
                  <CartDetailTdStyled style={{width: '200px'}}>
                       <CartProductPriceStyled>{item.price?.toLocaleString()}</CartProductPriceStyled>
                  </CartDetailTdStyled>
                  <CartDetailTdStyled style={{width: '200px'}}>
                    <BuyingQuantityWrapStyled>
                      <RemoveIcon 
                        style={{cursor: 'pointer'}}
                        onClick={() => decreaseQuantity(
                          item.product,
                          item.quantity
                        )}
                        />
                          <BuyingQuantityInputStyled 
                            type="number"
                            min="0"
                            value={item.quantity}
                            readOnly
                          />
                      <AddIcon 
                        style={{cursor: 'pointer'}}
                        onClick={() => increaseQuantity(
                          item.product,
                          item.quantity,
                          item.stock
                        )}
                        />
                    </BuyingQuantityWrapStyled>
                  </CartDetailTdStyled>
                  <CartDetailTdStyled style={{width: '200px'}}>
                       <CartProductPriceStyled>{(item.price * item.quantity).toLocaleString()}</CartProductPriceStyled>
                  </CartDetailTdStyled>
                  <CartDetailTdStyled style={{width: '200px', textAlign: 'center'}}>
                       <DeleteOutlineOutlinedIcon style={{cursor: 'pointer', color: 'red'}} onClick={() => deleteCartItems(item.product)}/>
                  </CartDetailTdStyled>
                </CartDetailTrStyled>
                ))}
              </CartDetailHeadStyled>
            </CartDetailStyled>
            <CartDetailBottomStyled>
              <Link to="/products">
                <BackBtnStyled>Tiếp tục mua hàng</BackBtnStyled>
              </Link>
              <CartDetailTotalContainerStyled>
                <CartDetailTotalWrapStyled>
                  <CartDetailTotalHeaderStyled>Hóa đơn</CartDetailTotalHeaderStyled>
                  {cartItems && cartItems.map((item) => (
                    <CartDetailTotalTitleWrapStyled key={item.product}>
                      <CartDetailTotalTitleStyled>{`${item.name} x${item.quantity}`}</CartDetailTotalTitleStyled>
                    </CartDetailTotalTitleWrapStyled>
                  ))}
                  <CartDetailTotalBottomWrapStyled>
                    <CartDetailTotalStyled>Tổng giá trị</CartDetailTotalStyled>
                    <CartDetailTotalStyled style={{fontSize: '22px', color: 'red'}}>{cartItems.reduce((total, item)=> total + item.price * item.quantity, 0).toLocaleString()} VND</CartDetailTotalStyled>
                  </CartDetailTotalBottomWrapStyled>
                </CartDetailTotalWrapStyled>
                <CheckoutBtnStyled onClick={checkoutHandler}>Thanh toán</CheckoutBtnStyled>
              </CartDetailTotalContainerStyled>
            </CartDetailBottomStyled>
          </CartWrapStyled>
        </CartContainerStyled>
        )}
    </>
  )
}

export default Cart