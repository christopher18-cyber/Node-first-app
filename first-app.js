import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import bodyParser from "body-parser";
import shopRoutes from "./routes/shop.js";
import adminRouter, { products } from "./routes/admin.js";
const app = express();
app.set("view engine", "pug");
app.set("views", "views");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);

app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("page-not-found", { pageTitle: "Page Not Found" });
});

app.listen(3000);
