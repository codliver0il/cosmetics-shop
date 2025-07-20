import express from "express";
import { create, fetchProducts, fetchProduct, update, deleteProduct} from "../controllers/product-controller.js";
import upload from "../middleware/upload.js";

const route = express.Router();

route.post("/create", upload.array("images", 5), create);
route.get("/getallproducts", fetchProducts);
route.get("/getproduct/:id", fetchProduct);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteProduct);

export default route;