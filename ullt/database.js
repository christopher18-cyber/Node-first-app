// import { Sequelize } from "sequelize";
// const sequelize = new Sequelize("node-complete", "root", "Ayomide20?", {
//   dialect: "mysql",
//   host: "localhost",
// });

// export default sequelize;
import mongodb from "mongodb";
import { MongoClient } from "mongodb";
const mongoConnect = (callback) =>
  MongoClient.connect(
    "mongodb+srv://christopheradegoke4_db_user:Christopher17@cluster0.bthnmer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((client) => {
      console.log("Connected!");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
export default mongoConnect;
