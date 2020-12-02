const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true }
}, {
  timestamps: true,
  strict: false 
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;