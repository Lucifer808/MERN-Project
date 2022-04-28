import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { getOrderDetails, clearErrors } from "../../../actions/orderAction";
import Loader from "../../child/Loader";
import { useAlert } from "react-alert";
import styled from 'styled-components';
const OrderDetailsPageStyled = styled.div`
    padding: 30px;
`
const OrderDetailsContainerStyled = styled.div`
  padding-bottom: 0%;
`
const OrderDetailsContainerBoxStyled = styled.div`
  padding: 20px;
`
const OrderDetailsInfoWrapStyled = styled.div`
  display: flex;
  margin: 10px 0;
`
const OrderDetailsInfoTitleStyled = styled.p``
const OrderDetailsInfoStyled = styled.span`
  margin: 0 10px;
  color: #575757;
`
const OrderDetailsCartItemsStyled = styled.div`
  padding: 20px 50px;
  border-top: 1px solid rgba(0, 0, 0, 0.164);
`
const OrderDetailsCartItemsContainerStyled = styled.div`
  padding: 20px;
`
const OrderDetailsCartItemsWrapStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`
const OrderDetailsCartItemsImageStyled = styled.img`
  width: 60px;
`
const OrderDetailsCartItemsTotalStyled = styled.span``
const OrderDetailsCartItemsTotalBoldStyled = styled.b`
  color: #5e5e5e;
`
const OrderDetails = () => {
  const { order, error, loading } = useSelector((state) => state.orderDetails);

  const dispatch = useDispatch();
  const alert = useAlert();
  const params = useParams();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(params.id));
  }, [dispatch, alert, error, params.id]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <OrderDetailsPageStyled>
            <OrderDetailsContainerStyled>
              <Typography style={{margin: '40px 0', color: 'tomato'}}>
                Đơn hàng #{order && order._id}
              </Typography>
              <Typography>Thông tin giao hàng</Typography>
              <OrderDetailsContainerBoxStyled>
                <OrderDetailsInfoWrapStyled>
                  <OrderDetailsInfoTitleStyled>Tên:</OrderDetailsInfoTitleStyled>
                  <OrderDetailsInfoStyled>{order.user && order.user.name}</OrderDetailsInfoStyled>
                </OrderDetailsInfoWrapStyled>
                <OrderDetailsInfoWrapStyled>
                  <OrderDetailsInfoTitleStyled>Số điện thoại:</OrderDetailsInfoTitleStyled>
                  <OrderDetailsInfoStyled>
                    {order.shippingInfo && order.shippingInfo.phoneNo}
                  </OrderDetailsInfoStyled>
                </OrderDetailsInfoWrapStyled>
                <OrderDetailsInfoWrapStyled>
                  <OrderDetailsInfoTitleStyled>Địa chỉ:</OrderDetailsInfoTitleStyled>
                  <OrderDetailsInfoStyled>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                  </OrderDetailsInfoStyled>
                </OrderDetailsInfoWrapStyled>
              </OrderDetailsContainerBoxStyled>
              <Typography> Trạng thái thanh toán</Typography>
              <OrderDetailsContainerBoxStyled>
                <OrderDetailsInfoWrapStyled>
                  <OrderDetailsInfoTitleStyled style={{color: order.paymentInfo &&
                      order.paymentInfo.status === "succeeded"
                        ? "green"
                        : "red"}}>
                    {order.paymentInfo &&
                    order.paymentInfo.status === "succeeded"
                      ? "Đã thanh toán"
                      : "Chưa thanh toán"}
                  </OrderDetailsInfoTitleStyled>
                </OrderDetailsInfoWrapStyled>

                <OrderDetailsInfoWrapStyled>
                  <OrderDetailsInfoTitleStyled>Thành tiền:</OrderDetailsInfoTitleStyled>
                  <OrderDetailsInfoStyled>{order.totalPrice && order.totalPrice.toLocaleString()}</OrderDetailsInfoStyled>
                </OrderDetailsInfoWrapStyled>
              </OrderDetailsContainerBoxStyled>

              <Typography>Trạng thái đơn hàng</Typography>
              <OrderDetailsContainerBoxStyled>
                <OrderDetailsInfoWrapStyled>
                  <OrderDetailsInfoTitleStyled style={{color: order.orderStatus && order.orderStatus === "Delivered"
                        ? "green"
                        : "red"}}>
                    {order.orderStatus && order.orderStatus}
                  </OrderDetailsInfoTitleStyled>
                </OrderDetailsInfoWrapStyled>
              </OrderDetailsContainerBoxStyled>
            </OrderDetailsContainerStyled>

            <OrderDetailsCartItemsStyled>
              <Typography>Sản phẩm:</Typography>
              <OrderDetailsCartItemsContainerStyled>
                {order.orderItems &&
                  order.orderItems.map((item) => (
                    <OrderDetailsCartItemsWrapStyled key={item.product}>
                      <OrderDetailsCartItemsImageStyled src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`} style={{
                        color: '#575757',
                        margin: '0 20px',
                        width: '60%',
                        textDecoration: 'none'}}>
                        {item.name}
                      </Link>{" "}
                      <OrderDetailsCartItemsTotalStyled>
                        {item.quantity}x {item.price.toLocaleString()} VND ={" "}
                        <OrderDetailsCartItemsTotalBoldStyled>{(item.price * item.quantity).toLocaleString()} VND</OrderDetailsCartItemsTotalBoldStyled>
                      </OrderDetailsCartItemsTotalStyled>
                    </OrderDetailsCartItemsWrapStyled>
                  ))}
              </OrderDetailsCartItemsContainerStyled>
            </OrderDetailsCartItemsStyled>
          </OrderDetailsPageStyled>
        </>
      )}
    </>
  );
};

export default OrderDetails;