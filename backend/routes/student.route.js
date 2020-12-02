const router = require('express').Router();
let Student = require('../models/student.model');

router.route('/').get((req, res) => {
    Student.find(req.query)
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const newStudent = new Student({...req.body});
  
    newStudent.save()
      .then((savedStudent) => {
        res.json({"_id":savedStudent._id,"text":"Student Saved"})
    })
      .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports = router;