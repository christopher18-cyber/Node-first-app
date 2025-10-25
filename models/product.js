// import sequelize from "../ullt/database.js";
// import { Sequelize } from "sequelize";
import { mongoConnect } from "../ullt/database.js";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
import { getDB } from "../ullt/database.js";
class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    const db = getDB();
    return db
      .collection("products")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDB();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        console.log(products);
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findById(prodId) {
    const db = getDB();
    return db
      .collection("products")
      .find({ _id: new ObjectId(prodId) })
      .next()
      .then((product) => {
        console.log(product);
        return product;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// const Product = sequelize.define("product", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: true,
//     primaryKey: true,
//   },
//   title: Sequelize.STRING,
//   price: {
//     type: Sequelize.DOUBLE,
//     allowNull: false,
//   },
//   imageUrl: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   description: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// });

export default Product;
