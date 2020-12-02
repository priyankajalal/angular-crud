const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const countrySchema = new Schema({
    name: { type: String, required: true },
    states: { type:Array , required: true}
},{
    timestamps: true,
    strict: false 
  });

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;