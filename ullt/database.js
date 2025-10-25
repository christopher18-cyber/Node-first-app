// import { Sequelize } from "sequelize";
// const sequelize = new Sequelize("node-complete", "root", "Ayomide20?", {
//   dialect: "mysql",
//   host: "localhost",
// });

// export default sequelize;
import mongodb from "mongodb";
import { MongoClient } from "mongodb";
let _db;
export const mongoConnect = (callback) =>
  MongoClient.connect(
    "mongodb+srv://christopheradegoke4_db_user:Christopher17@cluster0.bthnmer.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

export const getDB = () => {
  if (_db) {
    return _db;
  }
  return "No database found!";
};
