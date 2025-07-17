import express from "express";
import {create, fetchOrders, fetchActiveOrders, fetchArchivedOrders, update, deleteOrder} from "../controllers/order-controller.js";

const route = express.Router();

route.post("/create", create);
route.get("/getallorders", fetchOrders);
route.get("/getactiveorders", fetchActiveOrders);
route.get("/getarchivedorders", fetchArchivedOrders);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteOrder);

export default route;