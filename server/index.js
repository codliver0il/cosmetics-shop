import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import userRoute from "./routes/user-route.js";
import productRoute from "./routes/product-route.js";
import orderRoute from "./routes/order-route.js";

import path from "path";
import { fileURLToPath } from "url";
import { dirname } from 'path';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

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
