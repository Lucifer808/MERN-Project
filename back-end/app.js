const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
// config
dotenv.config({ path: "back-end/config/config.env" });
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
// Route Products
const product = require("./routes/productRoute");
app.use("/api/v1", product);
// Route Users
const user = require("./routes/userRoute");
app.use("/api/v1", user);
// Route Order
const order = require("./routes/orderRoute");
app.use("/api/v1", order);
// Route Payment
const payment = require("./routes/paymentRoute");
app.use("/api/v1", payment);
// Middleware handler error
app.use(errorMiddleware);
module.exports = app;
