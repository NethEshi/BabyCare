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
    ParentPhone: {
        type: String,
        required: false
    },
    ParentAddress: {
        type: String,
        required: false
    },
    MidWife: {
        type: String,
        required: false
    },
    ParentAge: {
        type: Number,
        required: false
    },
    BirthWeight: {
        type: Number,
        required: false
    },
    BirthHeight: {
        type: Number,
        required: false
    },
    BirthHeadCircumference: {
        type: Number,
        required: false
    },
    MOHSection: {
        type: String,
        required: false
    },
    FMOHSection: {
        type: String,
        required: false
    },
    DateOfSettlement: {
        type: String,
        required: false
    },
    HealthCondition: {
        type: String,
        required: false
    },
    VitaminK: {
        type: String,
        required: false
    },
    Posture: {
        type: String,
        required: false
    },
    Relation: {
        type: String,
        required: false
    },
    MOHId: {
        type: String,
        required: false
    },
});

const Baby = mongoose.model('Baby', babySchema);

module.exports = Baby;