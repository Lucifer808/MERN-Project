import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import styled from 'styled-components';
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
const OderSuccess = styled.div`
  margin: auto;
  text-align: center;
  padding: 30px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const OrderSuccess = () => {
  return (
    <OderSuccess>
      <CheckCircleIcon 
      style={{
          fontSize: '44px',
          color: 'green'
      }}
      />

      <Typography style={{fontSize: '20px'}}>Đặt hàng thành công !</Typography>
      <Link 
        to="/orders"
        style={{backgroundColor: '#fcb800',
            color: '#000',
            border: 'none',
            padding: '10px 30px',
            cursor: 'pointer',
            textDecoration: 'none',
            margin: '20px'}}
      >Kiểm tra đơn hàng</Link>
    </OderSuccess>
  );
};

export default OrderSuccess;