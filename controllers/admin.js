import Product from "../models/product.js";

export function getAddProducts(req, res, next) {
  res.render("admin/add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProducts: true,
  });
}

export function postAddProduct(req, res, next) {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
}

export function getProducts(req, res, next) {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      docTitle: "Shop",
      path: "/admin/products",
      pageTitle: "Add products",
    });
  });
}
