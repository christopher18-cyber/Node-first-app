import mysql from "mysql2";
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "Ayomide20?",
});

export default pool.promise();
