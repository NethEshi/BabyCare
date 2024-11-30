const mangoose = require('mongoose');

const hearingDataSchema = new mangoose.Schema({
    ID:{
        type: String,
        required: true
    },
    blinkAtLoudNoises: {
        type:String,
        required: false
    },
    twoMonthsSounds: {
        type:String,
        required: false
    },
    laughALittle: {
        type:String,
        required: false
    },
    eyesTurnTowardsMother: {
        type:String,
        required: false
    },
    turnImmediatelyAfterTalking: {
        type:String,
        required: false
    },
    listenToSounds: {
        type:String,
        required: false
    },
    lookForSounds: {
        type:String,
        required: false
    },
    speakToLoudTune: {
        type:String,
        required: false
    },
    respondToFamiliarSounds: {
        type:String,
        required: false
    },
    respondToWords: {
        type:String,
        required: false
    },
});

const HearingData = mangoose.model('HearingData', hearingDataSchema);
module.exports = HearingData;