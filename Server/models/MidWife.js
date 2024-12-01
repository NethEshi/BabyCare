const mongoose = require('mongoose');


const midWifeSchema = new mongoose.Schema({
    reg_ID: {
        type: String,
        required: true
    },
    License_NO: {
        type: Number,
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
        required: true
    },
    Password: {
        default: "passwordNotSet",
        type: String,
        required: false
    },
    MOHId: {
        type: String,
        required: true
    },

});

const MidWife = mongoose.model('MidWife', midWifeSchema);

module.exports = MidWife;