import express from "express";
import path from "path";
import { title } from "process";
import { fileURLToPath } from "url";
import * as productsController from "../controllers/admin.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const Router = express.Router();

Router.get("/add-product", productsController.getAddProducts);
Router.get("/products", productsController.getProducts);
Router.get("/edit-product/:productId", productsController.getEditProducts);
Router.post("/add-product", productsController.postAddProduct);
Router.post("/edit-product", productsController.postEditProduct);
Router.post("/delete-product", productsController.postDeleteProduct);

export default Router;
