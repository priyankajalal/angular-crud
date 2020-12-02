const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'riapro',
    password: 'Riapro123$',
    database: 'test'
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;