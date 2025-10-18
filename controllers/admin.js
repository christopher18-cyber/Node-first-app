import Product from "../models/product.js";

export function getAddProducts(req, res, next) {
  res.render("admin/edit-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
    editing: false,
  });
}

export function postAddProduct(req, res, next) {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  req.user
    .createProduct({
      title: title,
      imageUrl: imageUrl,
      price: price,
      description: description,
    })
    .then((result) => {
      // console.log(result);
      console.log("Created Product");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getEditProducts(req, res, next) {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findByPk(prodId)
    .then((product) => {
      if (!product) {
        res.redirect("/");
      }
      res.render("admin/edit-product", {
        pageTitle: "Edit product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product,
      });
    })
    .catch();
}

export function getProducts(req, res, next) {
  Product.findAll()
    .then((products) => {
      res.render("admin/products", {
        prods: products,
        docTitle: "Shop",
        path: "/admin/products",
        pageTitle: "Add products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export function postEditProduct(req, res, next) {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImage = req.body.imageUrl;
  const updatedDescription = req.body.description;
  Product.findByPk(prodId)
    .then((product) => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.imageUrl = updatedImage;
      product.description = updatedDescription;
      return product.save();
    })
    .then((result) => {
      console.log("UPDATED PRODUCT.");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
}

export function postDeleteProduct(req, res, next) {
  const prodId = req.body.productId;
  Product.findByPk(prodId)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => {
      console.log("PRODUCT DELETED");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
}
