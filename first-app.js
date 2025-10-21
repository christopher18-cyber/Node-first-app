import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import bodyParser from "body-parser";
// import shopRoutes from "./routes/shop.js";
// import adminRouter from "./routes/admin.js";
import { get404 } from "./controllers/404.js";
import mongoConnect from "./ullt/database.js";
// import sequelize from "./ullt/database.js";
// import User from "./models/user.js";
// import Product from "./models/product.js";
// import Cart from "./models/cart.js";
// import CartItem from "./models/cart-item.js";
// import Order from "./models/order.js";
// import OrderItem from "./models/order-item.js";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/admin", adminRouter);

// app.use(shopRoutes);

// app.use(get404);

// app.use((req, res, next) => {
//   User.findByPk(1)
//     .then((user) => {
//       req.user = user;
//       next();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
// User.hasMany(Product);
// User.hasOne(Cart);
// Cart.belongsTo(User);
// Cart.belongsToMany(Product, { through: CartItem });
// Product.belongsToMany(Cart, { through: CartItem });
// Order.belongsTo(User);
// User.hasMany(Order);
// Order.belongsToMany(Product, { through: OrderItem });
// sequelize
//   .sync
//   // { force: true }
//   ()
//   .then((result) => {
//     return User.findByPk(1);
//   })
//   .then((user) => {
//     if (!user) {
//       return User.create({ name: "Max", email: "test@test.com" });
//     }
//     return user;
//   })
//   .then((user) => {
//     return user.createCart();
//   })
//   .then((cart) => {})
//   .catch((err) => {
//     console.log(err);
//   });

mongoConnect((client) => {
  console.log(client);
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
