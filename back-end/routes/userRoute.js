const express = require("express");
const {
    registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getUserDetail,
    updatePassword,
    updateProfile,
    getAllUser,
    getSingleUser,
    updateRole,
    deleteUser,
} = require("../controllers/userController");
const { isAuthenticatedUser, authrizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser, getUserDetail);
router.route("/me/password/reset/:token").put(resetPassword);
router.route("/me/password/forgot").post(forgotPassword);
router.route("/me/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router
    .route("/admin/users")
    .get(isAuthenticatedUser, authrizeRoles("admin"), getAllUser);
router
    .route("/admin/user/:id")
    .get(isAuthenticatedUser, authrizeRoles("admin"), getSingleUser)
    .put(isAuthenticatedUser, authrizeRoles("admin"), updateRole)
    .delete(isAuthenticatedUser, authrizeRoles("admin"), deleteUser);
module.exports = router;
