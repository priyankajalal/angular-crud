const router = require('express').Router();
let Category = require('../models/category.model');

router.route('/').get((req, res) => {
    Category.find(req.query)
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const newCategory = new Category({...req.body});
  
    newCategory.save()
      .then((savedCategory) => {
        res.json({"_id":savedCategory._id,"text":"New Category Added"})
    })
      .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports = router;