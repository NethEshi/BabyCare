const mongoose = require('mongoose');


const MOHrefSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    MOH_Name: {
        type: String,
        required: true
    }
});

const MOHref = mongoose.model('MOHref', MOHrefSchema);

module.exports = MOHref;