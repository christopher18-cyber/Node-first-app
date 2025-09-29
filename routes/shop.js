import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import adminData from "../routes/admin.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const Router = express.Router();
Router.get("/", (req, res, next) => {
  console.log("shop.js", adminData.product);
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});
export default Router;
