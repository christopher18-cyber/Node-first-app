import express from "express";
const Router = express.Router();

Router.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});

Router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

export default Router;
