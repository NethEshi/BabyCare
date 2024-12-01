const mongoose = require('mongoose');

const parentLoginSchema = new mongoose.Schema({
    BabyId:{
        type: String,
        required: true
    },
    MOHType:{
        type: String,
        required: true
    },
    Password:{
        default:"PassNotSet",
        type: String,
        required: false
    },
    Email:{
        type: String,
        required: true
    },
    MOHId: {
        type: String,
        required: true
    }
});

const ParentLogin = mongoose.model('ParentLogin', parentLoginSchema);
module.exports = ParentLogin;