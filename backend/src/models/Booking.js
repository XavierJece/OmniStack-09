// Imports
const mongoose = require('mongoose');

// Campos
const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
     }
});

// Export
module.exports = mongoose.model('Booking', BookingSchema);

