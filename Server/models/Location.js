const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    MOHId: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    MidwifeId: {
        type: String,
        required: true
    },
    Contact: {
        type: String,
        required: true
    },
});

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;