const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const empSchema = new Schema({
    id: {type: Number,required: true},
    name: {type: String,required: true},
    department: {type: String,required: true},
    country: {type: String,required: true}
  }, {
    timestamps: true,
    strict: false 
  });

const Emp = mongoose.model('Emp', empSchema);

module.exports = Emp;