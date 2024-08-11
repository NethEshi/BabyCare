const mongoose = require('mongoose');

const weight_heightSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true
    },
    Dates: {
        type: [String],
        required: true
    },
    Weights: {
        type: [Number],
        required: true
    },
    Heights: {
        type: [Number],
        required: true
    },
});

const Weight_Height = mongoose.model('Weight_Height', weight_heightSchema);

module.exports = Weight_Height;