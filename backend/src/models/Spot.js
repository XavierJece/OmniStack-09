// Imports
const mongoose = require('mongoose');

// Campos
const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
    }
});

// Export
module.exports = mongoose.model('Spot', SpotSchema);

