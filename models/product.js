import database from "../ullt/database.js";
import * as Cart from "../models/cart.js";
export default class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {}

  static deleteById() {}

  static fetchAll() {}
  static findById() {}
}
