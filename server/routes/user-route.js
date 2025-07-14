import express from "express";
import { create, fetchUsers, fetchUser, update, deleteUser } from "../controllers/user-controller.js";

const route = express.Router(); 

route.post("/create", create);
route.get("/getallusers", fetchUsers);
route.get("/getuser/:id", fetchUser);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);

export default route; 