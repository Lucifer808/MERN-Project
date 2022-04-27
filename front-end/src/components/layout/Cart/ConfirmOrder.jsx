import React from 'react';
import CheckoutSteps from './CheckoutSteps';
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { Typography } from "@material-ui/core";
const ConfirmOrderContainerStyled = styled.div`
  height: 100vh;
  background-color: white;
  display: grid;
  grid-template-columns: 6fr 3fr;
  padding: 30px;
`
const ConfirmOrderWrapStyled = styled.div``
const ConfirmOrderAreaStyled = styled.div`
  padding-bottom: 0%;
  margin: 20px 0;
`
const ConfirmShippingAreaBoxStyled = styled.div`
  margin: 10px;
`
const ConfirmShippingWrapStyled = styled.div`
  display: flex;
  margin: 10px 0;
`
const ConfirmShippingTitleStyled = styled.p`
  font-weight: 500;
`
const ConfirmShippingInfoStyled = styled.span`
  margin-left: 10px;
  color: #575757;
`
const ConfirmCartItemsStyled = styled.div`
  padding: 10px 0;
`
const ConfirmCartItemsContainerStyled = styled.div`
  margin: 20px;
  max-height: 200px;
  overflow-y: auto;
`
const ConfirmCartItemsWrapStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`
const ConfirmCartitemsImageStyled = styled.img`
  width: 80px;
`
const ConfirmCartitemsTitleStyled = styled.p`
  font-weight: 400;
  margin: 0 10px;
  cursor: pointer;
  transition: all linear .2s;
  &:hover{
    color: #fcb800;
  }
`
const ConfirmCartItemsTotalStyled = styled.span`
  color: #5e5e5e;
`
const ConfirmCartItemsTotalBoldStyled = styled.b``
const ConfirmCartOrderSummeryContainerStyled = styled.div`
  padding: 10px;
  border-left: 1px solid rgba(0, 0, 0, 0.247);
`
const ConfirmCartOrderSummeryWrapStyled = styled.div`
  padding: 30px;
`
const ConfirmCartOrderSummeryInfoWrapStyled = styled.div``
const ConfirmCartOrderSummeryInfoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`
const ConfirmCartOrderSummeryTitleStyled = styled.p``
const ConfirmCartOrderSummerySpanStyled = styled.span`
  color: rgba(0, 0, 0, 0.692);
`
const ConfirmCartOrderSummeryTotalWrapStyled = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.363);
  padding: 30px 0;
`
const ConfirmCartOrderSummeryTotalStyled = styled.p``
const ConfirmCartOrderSummeryTotalBoldStyled = styled.b``
const ConfirmCartOrderSummeryTotalSpanStyled = styled.span``
const ConfirmCartOrderSummeryBtnStyled = styled.button`
  border: none;
  background-color: #fcb800;
  color: #000;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  transition: all 0.5s;
  outline: none;
  margin: 10px;
  border-radius: 2px;
  &:hover{
      background-color: #222;
      color: #fff;
  }
`
const ConfirmOrder = () => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 100000 ? 0 : 20000;

  const tax = subtotal * 0.15;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    navigate("/process/payment");
  };
  return (
    <>
      <CheckoutSteps activeStep={1} />
      <ConfirmOrderContainerStyled>
        <ConfirmOrderWrapStyled>
          <ConfirmOrderAreaStyled>
            <Typography style={{fontSize: '26px'}}>Thông tin giao hàng</Typography>
            <ConfirmShippingAreaBoxStyled>
              <ConfirmShippingWrapStyled>
                <ConfirmShippingTitleStyled>Họ và tên:</ConfirmShippingTitleStyled>
                <ConfirmShippingInfoStyled>{user.name}</ConfirmShippingInfoStyled>
              </ConfirmShippingWrapStyled>
              <ConfirmShippingWrapStyled>
                <ConfirmShippingTitleStyled>Số điện thoại:</ConfirmShippingTitleStyled>
                <ConfirmShippingInfoStyled>{shippingInfo.phoneNo}</ConfirmShippingInfoStyled>
              </ConfirmShippingWrapStyled>
              <ConfirmShippingWrapStyled>
                <ConfirmShippingTitleStyled>Địa chỉ:</ConfirmShippingTitleStyled>
                <ConfirmShippingInfoStyled>{address}</ConfirmShippingInfoStyled>
              </ConfirmShippingWrapStyled>
            </ConfirmShippingAreaBoxStyled>
          </ConfirmOrderAreaStyled>
          <ConfirmCartItemsStyled>
            <Typography style={{fontSize: '26px'}}>Giỏ hàng:</Typography>
            <ConfirmCartItemsContainerStyled>
              {cartItems && 
                cartItems.map((item) =>(
                  <ConfirmCartItemsWrapStyled key={item.product}>
                    <ConfirmCartitemsImageStyled src={item.image} alt="Product"/>
                    <Link to={`/product/${item.product}`} style={{textDecoration: 'none', color: '#000'}}>
                      <ConfirmCartitemsTitleStyled>
                      {item.name}
                      </ConfirmCartitemsTitleStyled>
                    </Link>{" "}
                    <ConfirmCartItemsTotalStyled>
                      {item.quantity}x {item.price} VND = {" "}
                      <ConfirmCartItemsTotalBoldStyled>{ item.price * item.quantity } VND</ConfirmCartItemsTotalBoldStyled>
                    </ConfirmCartItemsTotalStyled>
                  </ConfirmCartItemsWrapStyled>
                ))
              }
            </ConfirmCartItemsContainerStyled>
          </ConfirmCartItemsStyled>
        </ConfirmOrderWrapStyled>
        <ConfirmCartOrderSummeryContainerStyled>
              <ConfirmCartOrderSummeryWrapStyled>
                <Typography style={{textAlign: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.267)', fontSize: '26px', padding: '10px'}}>Chi tiết hóa đơn</Typography>
                  <ConfirmCartOrderSummeryInfoWrapStyled>
                    <ConfirmCartOrderSummeryInfoStyled>
                      <ConfirmCartOrderSummeryTitleStyled>Tổng tiền:</ConfirmCartOrderSummeryTitleStyled>
                      <ConfirmCartOrderSummerySpanStyled>{subtotal} VND</ConfirmCartOrderSummerySpanStyled>
                    </ConfirmCartOrderSummeryInfoStyled>
                    <ConfirmCartOrderSummeryInfoStyled>
                      <ConfirmCartOrderSummeryTitleStyled>Chi phí vận chuyển:</ConfirmCartOrderSummeryTitleStyled>
                      <ConfirmCartOrderSummerySpanStyled>{shippingCharges} VND</ConfirmCartOrderSummerySpanStyled>
                    </ConfirmCartOrderSummeryInfoStyled>
                    <ConfirmCartOrderSummeryInfoStyled>
                      <ConfirmCartOrderSummeryTitleStyled>Thuế:</ConfirmCartOrderSummeryTitleStyled>
                      <ConfirmCartOrderSummerySpanStyled>{tax} VND</ConfirmCartOrderSummerySpanStyled>
                    </ConfirmCartOrderSummeryInfoStyled>
                  </ConfirmCartOrderSummeryInfoWrapStyled>
                  <ConfirmCartOrderSummeryTotalWrapStyled>
                    <ConfirmCartOrderSummeryTotalStyled>
                      <ConfirmCartOrderSummeryTotalBoldStyled>
                        Thành tiền: 
                      </ConfirmCartOrderSummeryTotalBoldStyled>
                    </ConfirmCartOrderSummeryTotalStyled>
                    <ConfirmCartOrderSummeryTotalSpanStyled>{totalPrice} VND</ConfirmCartOrderSummeryTotalSpanStyled>
                  </ConfirmCartOrderSummeryTotalWrapStyled>
                  <ConfirmCartOrderSummeryBtnStyled onClick={proceedToPayment}>Tiến hành thanh toán</ConfirmCartOrderSummeryBtnStyled>
              </ConfirmCartOrderSummeryWrapStyled>
        </ConfirmCartOrderSummeryContainerStyled>
      </ConfirmOrderContainerStyled>
    </>
  )
}

export default ConfirmOrder