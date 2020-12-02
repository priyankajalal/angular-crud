// MongoDb
const express = require ('express');
const cors = require ('cors');
require('dotenv').config();
const mongoose  = require('mongoose')
const uri=process.env.ATLAS_URI;
mongoose.connect(uri,
  {useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true}
  );

  /* mysql */
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'riapro',
  password: 'Riapro123$',
  database: 'test'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql!');
});
/* mysql */

const app  = express();
app.use(cors());
app.use(express.json());


const port  = process.env.PORT || 5000;


//const usersRouter = require('./routes/users');
const exercisesRouter = require('./routes/exercises');
const postRouter = require('./routes/post.route');
const empRouter = require('./routes/emp');

const productRouter = require('./routes/products.route');
const bookRouter = require('./routes/book');
const countryRouter = require('./routes/country.route');
const recipeRouter = require('./routes/recipe.route');
const studentRouter = require('./routes/student.route');
const categoryRouter = require('./routes/category.route');

//app.use('/users', usersRouter);
app.use('/exercises', exercisesRouter);
app.use('/posts', postRouter);
app.use('/emps', empRouter);
app.use('/books', bookRouter);
app.use('/countries', countryRouter);
app.use('/recipes', recipeRouter);
app.use('/students', studentRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);

app.listen(port,()=>{
    console.log(`listeneing to port ${port}`)
}
)
