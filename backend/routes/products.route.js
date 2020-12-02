const router = require('express').Router();
let Product = require('../models/products.model');

router.route('/').get((req, res) => {
    Product.find(req.query)
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search').get((req, res) => { 
  let query = req.query
  if(req.query.category){
    query = {  'category' : { '$regex' : req.query.category, '$options' : 'i' }}
  }
  Product.find(query)
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const newProduct = new Product({...req.body});
  
    newProduct.save()
      .then((savedProduct) => {
        res.json({"_id":savedProduct._id,"text":"Product Saved"})
    })
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').delete((req, res) => {

  Product.findByIdAndDelete(req.params.id)
      .then(() => res.json('Product Deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  
  });  

router.route('/update/:id').post((req, res) => {
  Product.findById(req.params.id)
      .then(product => {
        product.name = req.body.name;
        product.category = req.body.category;
        product.price = req.body.price;
        product.save()
          .then(() => res.json('Post updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  


module.exports = router;