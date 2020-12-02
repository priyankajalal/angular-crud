const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    genre: { type:String}
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;