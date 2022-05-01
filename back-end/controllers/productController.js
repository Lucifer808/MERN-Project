const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apiFeatures");
const cloudinary = require("cloudinary");
// Add product -admin
exports.createProduct = catchAsyncError(async (req, res, next) => {
    let images = [];

    if (typeof req.body.images === "string") {
      images.push(req.body.images);
    } else {
      images = req.body.images;
    }
  
    const imagesLinks = [];
  
    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "products",
      });
  
      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
  
    req.body.images = imagesLinks;
    req.body.user = req.user.id;
  
    const product = await Product.create(req.body);
  
    res.status(201).json({
      success: true,
      product,
    });
});

// Get all product
exports.getAllProducts = catchAsyncError(async (req, res) => {
    const resultPerPage = 12;
    const productsCount = await Product.countDocuments();
    const apiFeature = new ApiFeatures( Product.find(), req.query)
        .search()
        .filter()

    let products = await apiFeature.query.clone();


    let filteredProductsCount = products.length;

    apiFeature.pagination(resultPerPage);

    products = await apiFeature.query.clone();

    res.status(200).json({
        success: true,
        products,
        productsCount,
        resultPerPage,
        filteredProductsCount
    });
});

// Get All Product-Admin
exports.getAdminProducts = catchAsyncError(async (req, res, next) => {
    const products = await Product.find();
  
    res.status(200).json({
      success: true,
      products,
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
     // Images Start Here
    let images = [];

    if (typeof req.body.images === "string") {
        images.push(req.body.images);
    } else {
        images = req.body.images;
    }

    if (images !== undefined) {
    // Deleting Images From Cloudinary
    for (let i = 0; i < product.images.length; i++) {
      await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "products",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
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

    // Deleting Images From Cloudinary
    for (let i = 0; i < product.images.length; i++) {
        await cloudinary.v2.uploader.destroy(product.images[i].public_id);
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
