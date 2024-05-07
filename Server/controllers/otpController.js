const OTP = require('../models/OTP');
const sendEmail  = require('../utils/sendEmail');
const randomstring = require('randomstring');

const otpController = {

    sendOtp: async (req, res) => {
        try {
            const Email = req.body.Email;
            const otp = randomstring.generate({ length: 6, charset: 'numeric' });
            const newOtp = new OTP({ Email, otp });
            console.log(newOtp);
            await newOtp.save();

            await sendEmail ({
                to: Email,
                subject: 'OTP for password reset',
                message: `Your OTP is ${otp}`
            });

            res.status(200).json({ message: 'Otp sent successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error });
        }
    },

    validateOtp: async (req, res) => {
        try {
            const Email = req.body.Email;
            const otp = req.body.otp;

            const validOtp = await OTP.findOneAndDelete({ Email, otp });
            if (!validOtp) {
                return res.status(400).json({ message: 'Invalid OTP' });
            }

            res.status(200).json({ message: 'OTP validated successfully' });


    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
    }
}