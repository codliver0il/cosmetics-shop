import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import userRoute from "./routes/user-route.js";
import productRoute from "./routes/product-route.js";
import orderRoute from "./routes/order-route.js";

const app = express();
app.use(bodyParser.json());

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODBURL = process.env.MONGODB_URL;

mongoose.connect(MONGODBURL).then(() => {
    console.log("Database connected successfully!");
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    })
}).catch(error => console.log(error));

app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/order", orderRoute);

//const express = require('express') 

//import cors from 'cors';
//app.use(cors());
