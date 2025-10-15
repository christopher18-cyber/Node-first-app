import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFile = path.join(__dirname, "../data/cart.json");
export class Cart {
  static addProducts(id, productPrice) {
    // Fetch the previous cart
    fs.readFile(pathToFile, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      const existingProductsIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const existingProducts = cart.products[existingProductsIndex];
      let updatedProduct;
      if (existingProducts) {
        updatedProduct = { ...existingProducts };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductsIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(pathToFile, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
  static deleteProduct(id, productPrice) {
    fs.readFile(pathToFile, (err, fileContent) => {
      if (err) {
        return;
      }
      const updatedCart = { ...fileContent };
      const productIndex = updatedCart.products.findIndex(
        (prod) => prod.id === id
      );
      const productQty = product.qty;
      updatedCart.products = updatedCart.product.filter();
      updatedCart.totalPrice =
        updatedCart.totalPrice - productPrice * productQty;
      fs.writeFile(pathToFile, JSON.stringify(updatedCart), (err) => {
        console.log(err);
      });
    });
  }
}
