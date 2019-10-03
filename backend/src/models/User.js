// Imports
const mongoose = require('mongoose');

// Campos
const UserSchema = new mongoose.Schema({
    email: String,
});

// Export
module.exports = mongoose.model('User', UserSchema);

