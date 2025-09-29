import express from "express";
import path from "path";
import { title } from "process";
import { fileURLToPath } from "url";
// import rootDir from "./ullt/path.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const Router = express.Router();
export const products = [];

Router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

Router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

export default Router;
