const router = require('express').Router();
let Post = require('../models/post.model');

router.route('/').get((req, res) => {
  Post.find(req.query)
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/search').get((req, res) => { 
  let query = req.query
  if(req.query.title){
    query = {  'title' : { '$regex' : req.query.title, '$options' : 'i' }}
  }
  Post.find(query)
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {

  Post.findById(req.params.id)
    .then((postData) => res.json(postData))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res) => {
  const newPost = new Post({...req.body});

  newPost.save()
    .then((savedPost) => {
      res.json({"_id":savedPost._id,"text":"Post Saved"})
  })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {

  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json('Post Deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/update/:id').post((req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      post.title = req.body.title;
      post.content = req.body.content;
      post.save()
        .then(() => res.json('Post updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;