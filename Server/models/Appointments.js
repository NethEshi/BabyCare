const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    SessionId: {
        type: String,
        required: true
    },
    BabyId: {
        type: String,
        required: true
    },
    PatientNumber : {
        type: String,
        required: true
    }
});

const Appointment = mongoose.model('Appoinment', appointmentSchema);
module.exports = Appointment;