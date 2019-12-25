const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const starshipSchema = new Schema({
    name: {type: String},
    classShip: {type: String},
    length: {type: Number},
    passengers: {type: Number}
});

const Starship = mongoose.model('Starship', starshipSchema);

module.exports = Starship;