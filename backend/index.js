const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");


const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.jason());

app.listen(8000, ()=>{
    console.log("Sever is running");
});

