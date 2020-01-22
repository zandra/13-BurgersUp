// config/orm.js In the orm.js file, create the methods that will execute the
// necessary MySQL commands in the controllers. These are the methods you will
// need to use in order to retrieve and store data in your database. 
//          selectAll()
//          insertOne() 
//          updateOne()

const connection = require('./connection');

const orm = {
  selectAll: function(table, cb) {
    connection.query(`SELECT * FROM ${table};`, (err, results) => {
      if(err) {
        console.log("OH NO 😵");
        res.send(500).end();
      }
      cb(results);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    connection.query(`INSERT INTO ${table} (${cols.toString()}) VALUES(${vals})`, (err, result) => {
      if(err) {
        console.log("OH NO 😵");
        res.send(500).end();
      }
      cb(results);
    });
  }
};

orm.insertOne("burgers", (burger_name, devoured))

module.exports = orm;
// INSERT INTO burgers 
// (burger_name, devoured)
// VALUES(?, ?)