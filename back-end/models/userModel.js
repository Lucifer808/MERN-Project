const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Vui lòng nhập tên"],
        maxlength: [30, "Tên có tối đa 30 kí tự"],
    },
    firstName: {
        type: String,
        maxlength: [10, "Họ có tối đa 10 kí tự"]
    },
    lastName: {
        type: String,
        maxlength: [10, "Tên có tối đa 10 kí tự"]
    },
    phoneNumber: {
        type: String,
        maxlength: [11, "Số điện thoại có tối đa 11 kí tự"]
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    email: {
        type: String,
        required: [true, "Vui lòng nhập email"],
        unique: true,
        validate: [validator.isEmail, "Vui lòng nhập đúng email"],
    },
    password: {
        type: String,
        required: [true, "Vui lòng nhập mật khẩu"],
        minlength: [8, "Mật khẩu phải có ít nhất 8 kí tự"],
        select: false,
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    role: {
        type: String,
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

// JWT
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// Compare Password
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Generating Password
userSchema.methods.getResetPasswordToken = function () {
    // Generating Token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    return resetToken;
};
module.exports = mongoose.model("User", userSchema);
