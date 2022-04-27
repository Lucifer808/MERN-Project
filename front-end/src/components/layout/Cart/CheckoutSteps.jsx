import React from 'react';
import styled from 'styled-components';
import { Typography, Stepper, StepLabel, Step } from "@material-ui/core";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
const CheckoutSteps = ({ activeStep }) => {
    const steps = [
        {
            label: <Typography>Chi tiết vận chuyển</Typography>,
            icon: <LocalShippingIcon /> 
        },
        {
            label: <Typography>Xác nhận đơn hàng</Typography>,
            icon: <LibraryAddCheckIcon />
        },
        {
            label: <Typography>Thanh toán</Typography>,
            icon: <AccountBalanceIcon />
        }
    ]
    const stepStyles = {
        boxSizing: 'border-box'
    }
  return (
    <>
        <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activeStep >= index ? "tomato" : "rgba(0, 0, 0, 0.649)",
              }}
              icon={item.icon}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  )
}

export default CheckoutSteps