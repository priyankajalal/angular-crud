const router = require('express').Router();
let Book = require('../models/book.model');


router.route('/').get((req, res) => {
  Book.find(req.query)
      .then(book => res.json(book))
      .catch(err => res.status(400).json('Error: ' + err));
  });

 

  router.route('/add').post((req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const genre = req.body.genre;
  
    const newBook = new Book({id,name,genre});
  
    newBook.save()
      .then(() => res.json('Book added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.post('/update/:id', function(req, res) {
    let sql = `update book set name = '${req.body.name}' where id =${req.params.id}`;

    connection.query(sql, function(err, data, fields) {
      if (err) throw err;
      res.json({
        status: 200,
        message: "Book Updated successfully"
      })
    })
  });

module.exports = router;