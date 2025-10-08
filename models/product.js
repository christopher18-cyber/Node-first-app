import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFile = path.join(__dirname, "../data/products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(pathToFile, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};
export default class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(pathToFile, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
    // fs.readFile(pathToFile, (err, fileContent) => {
    //   let products = [];
    // });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}
