const mysql = require("mysql2");
let connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection();
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  // connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  //   if (err) throw err;
  
  //   console.log('The solution is: ', rows[0].solution);
  // });
  
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

