import express from "express";
const Router = express.Router();
Router.get("/", (req, res, next) => {
  res.send("<h1>Hello from express.js</h1>");
});
export default Router;
