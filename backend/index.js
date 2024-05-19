const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");

dotenv.config();
const app = express();

const uri = process.env.MONGODB_URL;
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err);
  });

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//Routes
app.use("/v1/auth",authRoute);



app.listen(8000, () => {
  console.log("Server is running");
});

//authentication: chức năng đăng nhập
//authorization: chức năng phân quyền