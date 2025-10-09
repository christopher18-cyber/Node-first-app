"use strict";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFile = path.join(__dirname, "../data/cart.json");
export class Cart {
  static addProducts(id, productPrice) {
    fs.readFile(pathToFile, (err, fileContent) => {
      let cart = { products: [], calcPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      const existingProducts = cart.products.find((prod) => prod.id === id);
      let updatedProduct;
      if (existingProducts) {
        updatedProduct = { ...existingProducts };
        updatedProduct.qty = updatedProduct.qty + 1;
      } else {
        updatedProduct = { id: id, qty: 1 };
      }
      cart.totalPrice = cart.totalPrice + productPrice;
    });
  }
}
