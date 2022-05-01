import React from "react";
import { Link } from "react-router-dom";
import './sidebar.css';
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  return (
      <>
        <div className="sidebar">
        <Link to="/">
            <p>Smartshop</p>
        </Link>
        <Link to="/admin/dashboard">
            <p>
            <DashboardIcon /> Quản lý cửa hàng
            </p>
        </Link>
            <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ImportExportIcon />}
            >
            <TreeItem nodeId="1" label="Sản phẩm">
                <Link to="/admin/products">
                <TreeItem nodeId="2" label="Tất cả sản phẩm" icon={<PostAddIcon />} />
                </Link>

                <Link to="/admin/product">
                <TreeItem nodeId="3" label="Thêm sản phẩm mới" icon={<AddIcon />} />
                </Link>
            </TreeItem>
            </TreeView>
            <Link to="/admin/orders">
                <p>
                <ListAltIcon />
                Đơn hàng
                </p>
            </Link>
            <Link to="/admin/users">
                <p>
                <PeopleIcon /> Người dùng
                </p>
            </Link>
            <Link to="/admin/reviews">
                <p>
                <RateReviewIcon />
                Đánh giá & bình luận
                </p>
            </Link>
        </div>
      </>
  );
};

export default Sidebar;