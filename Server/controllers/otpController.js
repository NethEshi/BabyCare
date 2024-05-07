const OTP = require('../models/OTP');
const sendEmail  = require('../utils/sendEmail');
const randomstring = require('randomstring');
const jwt = require('jsonwebtoken');
const MidWife = require('../models/MidWife');

const otpController = {

    sendOtp: async (req, res) => {
        try {
            const Email = req.body.Email;
            const isEmailExist = await OTP.findOne({ Email});
            if (isEmailExist) {
                return res.status(400).json({ message: 'Otp already sent' });
            }

            const isEmail = await MidWife.findOne({ Email});
            if (!isEmail) {
                return res.status(400).json({ message: 'Email Invalid' });
            }
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
            console.log(error);
        }
    },

    validateOtp: async (req, res) => {
        try {
            const Email = req.body.Email.Email;
            const otp = req.body.otp.OTP;

            console.log(req.body);
            console.log(Email);
            console.log(otp);
            const validOtp = await OTP.findOneAndDelete({ Email, otp });
            if (!validOtp) {
                console.log(validOtp);
                return res.status(400).json({ message: 'Invalid OTP' });
            }
            const token = jwt.sign({ user: Email}, process.env.JWT_SECRET, {
                expiresIn: "7d",
              });

            res.status(200).json({ message: 'OTP validated successfully', token});


    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
        console.log(error);
    }
    }
}

module.exports = otpController;