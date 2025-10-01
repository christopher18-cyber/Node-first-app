import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import adminRouter, { products } from "../routes/admin.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const Router = express.Router();
Router.get("/", (req, res, next) => {
  res.render("shop", { prods: products, docTitle: "Shop", path: "/" });
});
export default Router;
