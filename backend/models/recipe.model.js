const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: { type: String, required: true },
    ingredients: { type:Array , required: true}
},{
    timestamps: true,
    strict: false 
  });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;