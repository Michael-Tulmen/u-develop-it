const mysql = require("mysql2");
// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Magic2213',
    database: 'election'
  });


  module.exports = db;