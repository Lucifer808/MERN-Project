import React, { useEffect, useRef } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { createOrder, clearErrors } from "../../../actions/orderAction";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const PaymentContainerStyled = styled.div`
  display: grid;
  place-items: center;
  background-color: rgb(255, 255, 255);
  height: 65vh;
  margin: 20px;
`
const PaymentFormStyled = styled.form`
  width: 22%;
  height: 100%;
`
const PaymentInputWrapStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`
const PaymentInputStyled = styled.div`
  padding: 10px 30px;
  padding-right: 10px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.267);
  border-radius: 4px;
  outline: none;
`
const PaymentBtnStyled = styled.input`
  border: none;
  background-color: #fcb800;
  color: #000;
  width: 100%;
  padding: 16px;
  cursor: pointer;
  transition: all 0.5s;
  outline: none;
  border-radius: 2px;
  &:hover{
      background-color: #222;
      color: #fff;
  }
`
const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/v1/payment/process",
        paymentData,
        config
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country,
            },
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;

        alert.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };

          dispatch(createOrder(order));

          navigate("/success");
        } else {
          alert.error("Xảy ra lỗi khi thực hiện thanh toán!");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      alert.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);

  return (
    <>
      <CheckoutSteps activeStep={2} />
      <PaymentContainerStyled>
        <PaymentFormStyled onSubmit={(e) => submitHandler(e)}>
          <Typography 
            style={{color: 'rgba(0, 0, 0, 0.753)',
              borderBottom: '1px solid rgba(0, 0, 0, 0.13)',
              padding: '10px 0',
              textAlign: 'center',
              width: '50%',
              margin: 'auto',
              fontSize: '26px'}}
          >Card Info</Typography>
          <PaymentInputWrapStyled>
            <CreditCardIcon 
            style={{position: 'absolute',
            transform: 'translateX(2px)',
            fontSize: '16px',
            color: 'rgba(0, 0, 0, 0.623)',
            margin: '0 6px'}}
            />
            <PaymentInputStyled>
              <CardNumberElement />
            </PaymentInputStyled>
          </PaymentInputWrapStyled>
          <PaymentInputWrapStyled>
            <EventIcon 
            style={{position: 'absolute',
            transform: 'translateX(2px)',
            fontSize: '16px',
            color: 'rgba(0, 0, 0, 0.623)',
            margin: '0 6px'}}
            />
            <PaymentInputStyled>
              <CardExpiryElement />
            </PaymentInputStyled>
          </PaymentInputWrapStyled>
          <PaymentInputWrapStyled>
            <VpnKeyIcon 
            style={{position: 'absolute',
            transform: 'translateX(2px)',
            fontSize: '16px',
            color: 'rgba(0, 0, 0, 0.623)',
            margin: '0 6px'}}            
            />
            <PaymentInputStyled>
              <CardCvcElement />
            </PaymentInputStyled>
          </PaymentInputWrapStyled>

          <PaymentBtnStyled
            type="submit"
            value={`Thanh toán - ${orderInfo && orderInfo.totalPrice} VND`}
            ref={payBtn}
          />
        </PaymentFormStyled>
      </PaymentContainerStyled>
    </>
  );
};

export default Payment;