import express from "express";
import path from "path";
import { title } from "process";
import { fileURLToPath } from "url";
import * as productsController from "../controllers/products.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const Router = express.Router();

Router.get("/add-product", productsController.getAddProducts);

Router.post("/add-product", productsController.postAddProduct);

export default Router;
