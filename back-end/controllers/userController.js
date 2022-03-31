const User = require("../models/userModel");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const cloudinary = require("cloudinary");
// Register User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: "avatars",
        width: 150,
        crop: "scale"
    })
    const { name, email, password } = req.body;
    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
        },
    });
    sendToken(user, 201, res);
});

// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    // Checking
    if (!email || !password) {
        return next(new ErrorHandler("Vui lòng nhập email và password", 400));
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Email không hợp lệ", 401));
    }

    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Mật khẩu không chính xác", 401));
    }
    sendToken(user, 200, res);
});

// Logout
exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Đăng xuất thành công",
    });
});
// Forgot Password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return next(new ErrorHandler("Tài khoản không tồn tại", 404));
    }
    // Get ResetPasswordToken
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get(
        "host"
    )}/api/v1/password/reset/${resetToken}`;

    const message = `Đường dẫn để thay đổi mật khẩu : \n\n ${resetPasswordUrl} \n\n Nếu như bạn không phải là người thực hiện yêu cầu vui lòng bỏ qua mail này !`;

    try {
        await sendEmail({
            email: user.email,
            subject: `Lấy lại mật khẩu`,
            message,
        });
        res.status(200).json({
            success: true,
            message: `Email đã được gửi đến ${user.email} thành công`,
        });
    } catch (err) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });
        return next(new ErrorHandler(err.message, 500));
    }
});

// Reset password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
        return next(new ErrorHandler("Thay đổi mật khẩu thất bại", 400));
    }
    if (req.body.password !== req.body.confirmPassword) {
        return next(
            new ErrorHandler("Mất khẩu không khớp. Vui lòng nhập lại !", 400)
        );
    }
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    sendToken(user, 200, res);
});

// Get User Detial
exports.getUserDetail = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    });
});
// Update Password User
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");
    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Mật khẩu không chính xác", 401));
    }
    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(
            new ErrorHandler("Mất khẩu không khớp. Vui lòng nhập lại !", 400)
        );
    }
    user.password = req.body.newPassword;
    await user.save();
    sendToken(user, 200, res);
});
// Update User Profile
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        fristName: req.body.fristName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country
    };
    // Cloudary (* not complete)
    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({ success: true });
});
// Get All Users (admin)
exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({ success: true, users });
});
// Get Single User (admin)
exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(
            new ErrorHandler("Người dùng không tồn tại vui lòng kiểm tra lại !")
        );
    }
    res.status(200).json({ success: true, user });
});
// Update User Role (admin)
exports.updateRole = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
    };
    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    if (!user) {
        return next(new ErrorHandler("Tài khoản không tồn tại", 401));
    }
    res.status(200).json({ success: true });
});
// Delete User (admin)
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
    // Remove clound later (* nor complete)
    const user = await User.findByIdAndUpdate(req.params.id);
    if (!user) {
        return next(new ErrorHandler("Tài khoản không tồn tại", 401));
    }
    await user.remove();
    res.status(200).json({
        success: true,
        message: "Tài khoản được xóa thành công !",
    });
});
