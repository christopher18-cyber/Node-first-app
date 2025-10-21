import Product from "../models/product.js";

import Order from "../models/order.js";

export function getProducts(req, res, next) {
  Product.findAll()
    .then((products) => {
      res.render("shop/product-list", {
        prods: products,
        docTitle: "Shop",
        path: "/products",
        pageTitle: "All products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getProduct(req, res, next) {
  const prodId = req.params.productId;
  Product.findByPk(prodId)
    .then((product) => {
      res.render("shop/product-details", {
        product: product,
        pageTitle: product.title,
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getIndex(req, res, next) {
  Product.findAll()
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        docTitle: "Shop",
        path: "/index",
        pageTitle: "Shop",
      });
    })
    .catch((err) => {
      console.log(err);
    });
  // Product.fetchAll()
  //   .then(([rows, fieldData]) => {})
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // Product.fetchAll((products) => {});
}

export function getCart(req, res, next) {
  req.user
    .getCart()
    .then((cart) => {
      if (!cart) {
        return;
      }
      return cart.getProducts();
    })
    .then((products) => {
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export function postCard(req, res, next) {
  const prodId = req.body.productId;
  let fetchedCart;
  let newQuantity = 1;
  req.user
    .getCart()
    .then((cart) => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: prodId } });
    })
    .then((products) => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }

      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return product;
      }
      return Product.findByPk(prodId);
    })
    .then((product) => {
      return fetchedCart.addProduct(product, {
        through: { quantity: newQuantity },
      });
    })
    .then(() => {
      res.redirect("/cart");
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getOrder(req, res, next) {
  req.user
    .getOrders({ include: ["products"] })
    .then((orders) => {
      res.render("shop/order", {
        path: "/cart",
        pageTitle: "Your cart",
        orders: orders,
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export function postOrder(req, res, next) {
  let fetchedCart;
  req.user
    .getCart()
    .then((cart) => {
      if (!cart) {
        return;
      }
      fetchedCart = cart;
      return cart.getProducts();
    })
    .then((products) => {
      return req.user
        .createOrder()
        .then((order) => {
          return order.addProducts(
            products.map((product) => {
              product.orderItem = { quantity: product.cartItem.quantity };
              return product;
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .then((result) => {
      return fetchedCart.setProducts(null);
    })
    .then((result) => {
      res.redirect("/orders");
    })
    .catch((err) => {
      console.log(err);
    });
}

export function postCardDeleteCart(req, res, next) {
  const prodId = req.body.productId;
  req.user
    .getCart()
    .then((cart) => {
      return cart.getProducts({ where: { id: prodId } });
    })
    .then((products) => {
      const product = products[0];
      product.cartItem.destroy();
    })
    .then((result) => {
      res.redirect("/cart");
    });
}
