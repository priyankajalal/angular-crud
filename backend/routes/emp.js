const router = require('express').Router();

const connection = require("../connections/db.js");

// constructor
const Emp = function(emp) {
  this.id = customer.id;
  this.name = customer.name;
};


router.route('/').get((req, res) => {
    connection.query('SELECT * FROM emp', (err,rows) => {
        if(err) throw err;
        console.log('Data received from Db:');
        console.log(rows);
        //res.send(rows);
        res.json({
          status: 200,
          data: rows
        })
      });
  });

  router.post('/new', function(req, res) {
    let sql = `INSERT INTO emp(name,address) VALUES (?)`;
    let values = [
      req.body.name,
      req.body.address
    ];
    connection.query(sql, [values], function(err, data, fields) {
      if (err) throw err;
      res.json({
        status: 200,
        message: "New user added successfully"
      })
    })
  });

  router.post('/update/:id', function(req, res) {
    let sql = `update emp set name = '${req.body.name}' where id =${req.params.id}`;

    connection.query(sql, function(err, data, fields) {
      if (err) throw err;
      res.json({
        status: 200,
        message: "User Updated successfully"
      })
    })
  });

module.exports = router;