
const router = require('express').Router();
let Recipe = require('../models/recipe.model');

router.route('/').get((req, res) => {
    Recipe.find(req.query)
    .then(d => res.json(d))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Recipe.findById(req.params.id)
    .then(d => res.json(d))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    //  const c= {a:1,b:3,c:5} [...c] {}
    const newRecipe = new Recipe({ ...req.body});
  
    newRecipe.save()
      .then(() => res.json({"status":'Recipe added!'}))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/update/:id').post((req, res) => {
    Recipe.findById(req.params.id)
      .then(recipe => {
        recipe.ingredients = req.body.ingredients;
        recipe.name = req.body.name;
        recipe.save()
          .then(() => res.json('Recipe updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').delete((req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
      .then(() => res.json('Recipe deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;