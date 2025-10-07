import Product from "../models/product.js";

export function getProducts(req, res, next) {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      docTitle: "Shop",
      path: "/products",
      pageTitle: "All products",
    });
  });
}

export function getIndex(req, res, next) {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      docTitle: "Shop",
      path: "/index",
      pageTitle: "Shop",
    });
  });
}

export function getCart(req, res, next) {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your cart",
  });
}

export function checkout(req, res, next) {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
}
