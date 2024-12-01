const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    otp: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 121000 
    },
    Email: {
        type: String,
        required: true
    }
});

otpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 180 });


const OTP = mongoose.model('OTP', otpSchema);

module.exports = OTP;