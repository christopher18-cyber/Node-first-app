import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import bodyParser from "body-parser";
import shopRoutes from "./routes/shop.js";
import adminRouter from "./routes/admin.js";
import { get404 } from "./controllers/404.js";
import database from "./ullt/database.js";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

database
  .execute("SELECT * FROM products")
  .then((result) => {
    console.log(result[0], result[1]);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);

app.use(shopRoutes);

app.use(get404);

app.listen(3000);
