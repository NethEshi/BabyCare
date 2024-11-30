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
    Area: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Contact: {
        type: Number,
        required: true
    },
    RoleId: {
        type: Number,
        required: true
    }
});

const MidWife = mongoose.model('MidWife', midWifeSchema);

module.exports = MidWife;