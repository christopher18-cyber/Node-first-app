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
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect("/");
}

export function getEditProducts(req, res, next) {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    if (!product) {
      res.redirect("/");
    }
    res.render("admin/edit-product", {
      pageTitle: "Edit product",
      path: "/admin/edit-product",
      editing: editMode,
      product: product,
    });
  });
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

export function postEditProduct(req, res, next) {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImage = req.body.imageUrl;
  const updatedDescription = req.body.description;
  const updatedProducts = new Product(
    prodId,
    updatedTitle,
    updatedPrice,
    updatedImage,
    updatedDescription
  );
  updatedProducts.save();
  res.redirect("/admin/products");
}
