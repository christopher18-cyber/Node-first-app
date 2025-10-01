import express from "express";
import path from "path";
import { title } from "process";
import { fileURLToPath } from "url";
// import rootDir from "./ullt/path.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const Router = express.Router();
const products = [];

Router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
  });
});

Router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

export { products };
export default Router;
