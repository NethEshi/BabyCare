const mongoose = require('mongoose');

const babySchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    DOB: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        enum: ['Male', 'Female', "Other"],
        required: true
    },
    ParentName: {
        type: String,
        required: true
    },
    ParentEmail: {
        type: String,
        required: true
    },
});

const Baby = mongoose.model('Baby', babySchema);

module.exports = Baby;