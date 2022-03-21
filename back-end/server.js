const app = require("./app");
const dotenv = require("dotenv");
const db = require("./config/database");
const cloudinary = require("cloudinary");
// Catch Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err}`);
    console.log(`Server đang xảy ra lỗi !`);
    process.exit(1);
});
// config
dotenv.config({ path: "back-end/config/config.env" });

// config cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// connect DB
app.listen(process.env.PORT, () => {
    console.log(`Server is working on PORT: ${process.env.PORT}`);
});
db.connect();
