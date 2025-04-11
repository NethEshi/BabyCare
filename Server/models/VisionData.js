const mangoose = require('mongoose');


const visionDataSchema = new mangoose.Schema({
    ID:{
        type: String,
        required: true
    },
    firstWeekTowardsLight: {
        type: String,
        required: false
    },
    firstWeeklookAtFace: {
        type: String,
        required: false
    },
    twoMonthsSounds: {
        type: String,
        required: false
    },
    twoMonthsEyes: {
        type: String,
        required: false
    },
    sixMonthsLookAround: {
        type: String,
        required: false
    },
    sixMonthsReachOut: {
        type: String,
        required: false
    },
    sixMonthsMole: {
        type: String,
        required: false
    },
    tenMonthsPickUp: {
        type: String,
        required: false
    },
    twelveMonthsReachOut: {
        type: String,
        required: false
    },
    twelveMonthsRecognize: {
        type: String,
        required: false
    },

});

const VisionData = mangoose.model('VisionData', visionDataSchema);
module.exports = VisionData;