import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./processOrder.css";
import { Typography } from "@material-ui/core";
import SideBar from "./Sidebar";
import {
  getOrderDetails,
  clearErrors,
  updateOrder,
} from "../../../actions/orderAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../child/Loader";
import { useAlert } from "react-alert";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import { Button } from "@material-ui/core";
import { UPDATE_ORDER_RESET } from "../../../constants/orderConstants";
import { useParams } from "react-router-dom";

const ProcessOrder = () => {
  const shippingStatus = [
    {
      value: "Approved",
      title: "Xác nhận đơn hàng" 
    },
    {
      value: "Shipping",
      title: "Đang giao hàng" 
    },
    {
      value: "Done",
      title: "Đã nhận hàng" 
    },
    {
      value: "Declined",
      title: "Hủy đơn hàng" 
    },
  ]
  const params = useParams();

  const { order, error, loading } = useSelector((state) => state.orderDetails);
  const { error: updateError, isUpdated } = useSelector((state) => state.order);

  const updateOrderSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("status", status);

    dispatch(updateOrder(params.id, myForm));
  };

  const dispatch = useDispatch();
  const alert = useAlert();

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Order Updated Successfully");
      dispatch({ type: UPDATE_ORDER_RESET });
    }

    dispatch(getOrderDetails(params.id));
  }, [dispatch, alert, error, params.id, isUpdated, updateError]);

  return (
    <>
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          {loading ? (
            <Loader />
          ) : (
            <div
              className="confirmOrderPage"
            >
              <div>
                <div className="confirmshippingArea">
                  <Typography style={{fontSize: '20px'}}>Thông tin giao hàng</Typography>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <p>Tên khách hàng:</p>
                      <span>{order.user && order.user.name}</span>
                    </div>
                    <div>
                      <p>Số điện thoại:</p>
                      <span>
                        {order.shippingInfo && order.shippingInfo.phoneNo}
                      </span>
                    </div>
                    <div>
                      <p>Địa chỉ:</p>
                      <span>
                        {order.shippingInfo &&
                          `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                      </span>
                    </div>
                  </div>

                  <Typography style={{fontSize: '20px'}}>Trạng thái thanh toán</Typography>
                  <div className="orderDetailsPaymentBox">
                    <div>
                      <p
                        className={
                          order.paymentInfo &&
                          order.paymentInfo.status === "succeeded"
                            ? "greenColor"
                            : "redColor"
                        }
                      >
                        {order.paymentInfo &&
                        order.paymentInfo.status === "succeeded"
                          ? "Đã thanh toán"
                          : "Chưa thanh toán"}
                      </p>
                    </div>

                      <Typography style={{fontSize: '20px'}}>Trạng thái đơn hàng</Typography>
                    <div>
                      <p
                        className={
                          order.orderStatus && order.orderStatus !== "Declined"
                            ? "greenColor"
                            : "redColor"
                        }
                      >
                        {order.orderStatus && order.orderStatus}
                      </p>
                    </div>
                  </div>

                  <div className="orderDetailsStatusBox">
                    <div>
                      <p>Thành tiền:</p>
                      <span style={{fontSize: '18px'}}>{order.totalPrice && order.totalPrice.toLocaleString()} VND</span>
                    </div>
                  </div>
                </div>
                <div className="confirmCartItems">
                  <Typography>Sãn phẩm đã đặt:</Typography>
                  <div className="confirmCartItemsContainer">
                    {order.orderItems &&
                      order.orderItems.map((item) => (
                        <div key={item.product}>
                          <img src={item.image} alt="Product" />
                          <Link to={`/product/${item.product}`} style={{
                        color: '#575757',
                        textDecoration: 'none'}}>
                            {item.name}
                          </Link>{" "}
                          <span>
                            {item.quantity}x {item.price.toLocaleString()} VND ={" "}
                            <b>{(item.price * item.quantity).toLocaleString()} VND</b>
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              {/*  */}
              <div>
                <form
                  className="updateOrderForm"
                  onSubmit={updateOrderSubmitHandler}
                >
                  <h1>Xử lý đơn hàng</h1>

                  <div>
                    <AccountTreeIcon />
                    <select onChange={(e) => setStatus(e.target.value)}>
                      <option value="">-- Chọn --</option>
                      {shippingStatus.map((item, index) => (
                        <option key={index} value={item.value}>{item.title}</option>
                      ))}
                    </select>
                  </div>

                  <Button
                    id="createProductBtn"
                    type="submit"
                    disabled={
                      loading ? true : false || status === "" ? true : false
                    }
                  >
                    Process
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProcessOrder;