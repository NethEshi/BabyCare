const mongoose = require('mongoose');


const mohSchema = new mongoose.Schema({
    MOH_Name: {
        type: String,
        required: true
    },
    District: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    RoleId: {
        type: String,
        required: true
    }
});


const MOH = mongoose.model('MOH', mohSchema);

module.exports = MOH;