const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    SLMCNo: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Designation: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Contact: {
        type: String,
        required: true
    },
    RoleId: {
        type: String,
        default: 2
    },
    MOHId: {
        type: String,
        required: true
    }
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;