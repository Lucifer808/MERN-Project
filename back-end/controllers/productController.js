const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apiFeatures");
// Add product -admin
exports.createProduct = catchAsyncError(async (req, res, next) => {
    req.body.user = req.user.id;

    const product = await Product.create(req.body);
    try {
        res.status(201).json({
            success: true,
            product,
        });
    } catch (err) {
        console.log(err);
    }
});

// Get all product
exports.getAllProducts = catchAsyncError(async (req, res) => {
    const resultPerPage = 12;
    const productsCount = await Product.countDocuments();
    const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage);
        const products = await apiFeature.query;
    res.status(200).json({
        success: true,
        products,
        productsCount,
        resultPerPage
    });
});

// Get product detail
exports.getProductDetail = catchAsyncError(async (req, res, next) => {
    let idProduct = req.params.id;
    let product = await Product.findById(idProduct);
    if (!product) {
        return next(new ErrorHandler("Sản phẩm không tồn tại", 404));
    }
    res.status(200).json({
        success: true,
        product,
    });
});
// Update product -- admin
exports.updateProduct = catchAsyncError(async (req, res, next) => {
    let idProduct = req.params.id;
    let product = await Product.findById(idProduct);
    if (!product) {
        return next(new ErrorHandler("Sản phẩm không tồn tại", 404));
    }
    product = await Product.findByIdAndUpdate(idProduct, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        success: true,
        product,
    });
});

// Delete product -- admin
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
    let idProduct = req.params.id;
    let product = await Product.findById(idProduct);
    if (!product) {
        return next(new ErrorHandler("Sản phẩm không tồn tại", 404));
    }
    await product.remove();
    res.status(200).json({
        success: true,
        message: "Sản phẩm được xóa thành công",
    });
});
// Create Review and Update Review
exports.createProductReview = catchAsyncError(async (req, res, next) => {
    const { rating, comment, productId } = req.body;
    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    };
    const product = await Product.findById(productId);
    const isReviewed = product.reviews.find((rev) => {
        rev.user.toString() === req.user._id;
    });

    if (isReviewed) {
        product.reviews.forEach((rev) => {
            if (rev.user.toString() === req.user._id.toString())
                (rev.rating = rating), (rev.comment = comment);
        });
    } else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    }
    let avg = 0;
    product.reviews.forEach((rev) => {
        avg += rev.rating;
    });
    product.ratings = avg / product.reviews.length;
    await product.save({ validateBeforeSave: false });
    res.status(200).json({
        success: true,
        message: "Thêm đánh giá thành công",
    });
});
// Get All Review of Product
exports.getAllReviews = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.query.id);
    if (!product) {
        return next(new ErrorHandler("Sản phẩm không tìm thấy", 404));
    }
    res.status(200).json({
        success: true,
        reviews: product.reviews,
    });
});
// Delete Review of Product
exports.deleteReview = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.query.productId);
    if (!product) {
        return next(new ErrorHandler("Sản phẩm không tìm thấy", 404));
    }
    const reviews = product.reviews.filter(
        (rev) => rev._id.toString() !== req.query.id
    );
    let avg = 0;
    reviews.forEach((rev) => {
        avg += rev.rating;
    });
    const ratings = avg / reviews.length;
    const numOfReviews = reviews.length;
    await Product.findByIdAndUpdate(
        req.query.productId,
        {
            reviews,
            ratings,
            numOfReviews,
        },
        {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        }
    );
    res.status(200).json({
        success: true,
    });
});
