const mongoose = require('mongoose');

const healthReportSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true
    },
    days10in01: {
        type: String,
        required: false
    },
    days10in02: {
        type: String,
        required: false
    },
    days11to28: {
        type: String,
        required: false
    },
    days42: {
        type: String,
        required: false
    },
    skinColor1: {
        type: String,
        required: false
    },
    skinColor2: {
        type: String,
        required: false
    },
    skinColor3: {
        type: String,
        required: false
    },
    skinColor4: {
        type: String,
        required: false
    },
    eyeState1: {
        type: String,
        required: false
    },
    eyeState2: {
        type: String,
        required: false
    },
    eyeState3: {
        type: String,
        required: false
    },
    eyeState4: {
        type: String,
        required: false
    },
    umbelical1: {
        type: String,
        required: false
    },
    umbelical2: {
        type: String,
        required: false
    },
    umbelical3: {
        type: String,
        required: false
    },
    umbelical4: {
        type: String,
        required: false
    },
    onlyBreastFeeding1: {
        type: String,
        required: false
    },
    onlyBreastFeeding2: {
        type: String,
        required: false
    },
    onlyBreastFeeding3: {
        type: String,
        required: false
    },
    onlyBreastFeeding4: {
        type: String,
        required: false
    },
    breastFeedingPosture1: {
        type: String,
        required: false
    },
    breastFeedingPosture2: {
        type: String,
        required: false
    },
    breastFeedingPosture3: {
        type: String,
        required: false
    },
    breastFeedingPosture4: {
        type: String,
        required: false
    },
    breastFeedingRelation1: {
        type: String,
        required: false
    },
    breastFeedingRelation2: {
        type: String,
        required: false
    },
    breastFeedingRelation3: {
        type: String,
        required: false
    },
    breastFeedingRelation4: {
        type: String,
        required: false
    },
    other1: {
        type: String,
        required: false
    },
    other2: {
        type: String,
        required: false
    },
    other3: {
        type: String,
        required: false
    },
    other4: {
        type: String,
        required: false
    },
});

const HealthReport = mongoose.model('HealthReport', healthReportSchema);
module.exports = HealthReport;