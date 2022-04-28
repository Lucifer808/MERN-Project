import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, myOrders } from "../../../actions/orderAction";
import Loader from "../../child/Loader";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import LaunchIcon from "@material-ui/icons/Launch";
import styled from 'styled-components';
import Profile from './Profile';
const MyOrderContainerStyled = styled.div`
  display: flex;
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 30px;
`
const MyOrderPageStyled = styled.div`
    flex: 3;
    margin-left: 20px;
    width: 100%;
    height: 100vh;
`
const MyOrders = () => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { loading, error, orders } = useSelector((state) => state.myOrders);
  const { user } = useSelector((state) => state.user);

  const columns = [
    { field: "id", headerName: "Mã đơn hàng", minWidth: 200, flex: 1 },

    {
      field: "status",
      headerName: "Trạng thái",
      minWidth: 50,
      flex: 0.5,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Số lượng",
      type: "number",
      minWidth: 50,
      flex: 0.5,
    },

    {
      field: "amount",
      headerName: "Thành tiền",
      type: "number",
      minWidth: 50,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Hành động",
      minWidth: 100,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/order/${params.getValue(params.id, "id")}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];
  const rows = [];

  orders &&
    orders.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderItems.length,
        id: item._id,
        status: item.orderStatus,
        amount: item.totalPrice,
      });
    });

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, alert, error]);

  return (
    <>

      {loading ? (
        <Loader />
      ) : (
          <MyOrderContainerStyled>
            <Profile />
            <MyOrderPageStyled>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
                autoHeight
            />

            <Typography 
             style={{textAlign: 'center',
                padding: '5px',
                boxSizing: 'border-box',
                color: 'rgb(255, 255, 255)',
                transition: 'all 0.5s',
                backgroundColor: 'rgb(44, 44, 44)'}}
            >Đơn hàng của {user.name}</Typography>
            </MyOrderPageStyled>
          </MyOrderContainerStyled>
      )}
    </>
  );
};

export default MyOrders;