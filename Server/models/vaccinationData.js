const mongoose = require('mongoose');

const vaccinationFormatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        default: "noDate",
        type: String,
        required: false
    },
    batchNo: {
        type: String,
        required: false
    },
    adverseEffects: {
        type: String,
        required: false
    }
}, {_id: false});

const vaccinationDataSchema = new mongoose.Schema({

    ID: {
        type: String,
        required: true
    },
    AtBirth: {
        type: [vaccinationFormatSchema],
        required: false
    },
    TwoMonth: {
        type: [vaccinationFormatSchema],
        required: false
    },
    FourMonth: {
        type: [vaccinationFormatSchema],
        required: false
    },
    SixMonth: {
        type: [vaccinationFormatSchema],
        required: false
    },
    NineMonth: {
        type: [vaccinationFormatSchema],
        required: false
    },
    EighteenMonth: {
        type: [vaccinationFormatSchema],
        required: false
    },
    ThreeYeares: {
        type: [vaccinationFormatSchema],
        required: false
    },
    FiveYeares: {
        type: [vaccinationFormatSchema],
        required: false
    },
    TenYeares: {
        type: [vaccinationFormatSchema],
        required: false
    },
    JapaneseEncephalitis: {
        type: [vaccinationFormatSchema],
        required: false
    },
    Other: {
        type: [vaccinationFormatSchema],
        required: false
    },
});

const VaccinationData = mongoose.model('VaccinationData', vaccinationDataSchema);
module.exports = VaccinationData;