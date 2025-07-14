import express from "express";
import {create, fetchOrders, fetchActiveOrders, fetchActiveOrders, update, deleteOrder} from "../controllers/order-controller.js";

const route = express.Router();

route.post("/create", create);
route.get("/getallorders", fetchOrders)