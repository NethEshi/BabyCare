const mongoose = require('mongoose');

const clinicSchema = new mongoose.Schema({

    ID: {
        type: String,
        required: true
    },
    Clinics : [{
        Date: {
            type: String,
            required: true
        },
        SpecialNotes: {
            type: String,
            required: false
        }
    }]

});

const Clinic = mongoose.model('Clinic', clinicSchema);
module.exports = Clinic;