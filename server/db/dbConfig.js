const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createPool({
  host: "193.203.168.175",
  user: "u428873416_evangadiuser",
  password: process.env.DB_PASSWORD,
  database: "u428873416_evangadiDB",
});

module.exports = db.promise();
