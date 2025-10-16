import Product from "../models/product.js";
import { Cart } from "../models/cart.js";

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

export function getProduct(req, res, next) {
  const prodId = req.params.productId;
  // console.log(prodId);
  Product.findById(prodId, (product) => {
    res.render("shop/product-details", {
      product: product,
      pageTitle: product.title,
      path: "/products",
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
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = [];

      for (let product of products) {
        const cartProductData = cart.products.find(
          (prod) => prod.id === product.id
        );

        if (cartProductData) {
          cartProducts.push({
            productData: product,
            qty: cartProductData.qty,
          });
        }
      }

      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: cartProducts,
      });
    });
  });
}

export function postCard(req, res, next) {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProducts(prodId, product.price);
  });
  res.redirect("/cart");
}

export function getOrder(req, res, next) {
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

export function postCardDeleteCart(req, res, next) {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect("/cart");
  });
}
