
const router = require('express').Router();
let Country = require('../models/country.model');

router.route('/').get((req, res) => {
    Country.find(req.query)
    .then(countries => res.json(countries))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  //const username = req.body.username;
  const newCountry = new Country({ ...req.body});

  newCountry.save()
    .then(() => res.json('Country added!'))
    .catch(err => res.status(400).json('Error: ' + err));
}); 
router.route('/:id').delete((req, res) => {
  Country.findByIdAndDelete(req.params.id)
    .then(() => res.json({"status":"ok","text":"Country Deleted"}))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Country.findById(req.params.id)
    .then(country => {
      country.states = req.body.states;
      country.name = req.body.name;
    
      country.save()
        .then(() => res.json('country updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;