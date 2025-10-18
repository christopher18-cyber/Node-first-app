import { Sequelize } from "sequelize";
const sequelize = new Sequelize("node-complete", "root", "Ayomide20?", {
  dialect: "mysql",
  host: "localhost",
});

export default sequelize;
