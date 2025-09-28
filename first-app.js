import express from "express";
import bodyParser from "body-parser";
import shopRoutes from "./routes/shop.js";
const app = express();

import adminRoutes from "./routes/admin.js";

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000);
