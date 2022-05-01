const express = require("express");
const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductDetail,
    createProductReview,
    getAllReviews,
    deleteReview,
    getAdminProducts
} = require("../controllers/productController");
const router = express.Router();
const { isAuthenticatedUser, authrizeRoles } = require("../middleware/auth");

router.route("/products").get(getAllProducts);

router
  .route("/admin/products")
  .get(isAuthenticatedUser, authrizeRoles("admin"), getAdminProducts);

router
    .route("/admin/product/new")
    .post(isAuthenticatedUser, authrizeRoles("admin"), createProduct);

router
    .route("/admin/product/:id")
    .put(isAuthenticatedUser, authrizeRoles("admin"), updateProduct)
    .delete(isAuthenticatedUser, authrizeRoles("admin"), deleteProduct);
router.route("/product/:id").get(getProductDetail);
router.route("/review").put(isAuthenticatedUser, createProductReview);
router
    .route("/reviews")
    .get(getAllReviews)
    .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
