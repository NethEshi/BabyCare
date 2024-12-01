const mongoose = require('mongoose');
const sessionSchema = new mongoose.Schema({
    SLMCNo: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    StartTime: {
        type: String,
        required: true
    },
    EndTime: {
        type: String,
        required: true
    },
    MOHId: {
        type: String,
        required: true
    },
    maxPatients: {
        default: 20,
        type: String,
        required: false
    },
});

const Session = mongoose.model('Session', sessionSchema);
module.exports = Session;