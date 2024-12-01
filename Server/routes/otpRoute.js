const express = require('express');
const router = express.Router();

const {sendOtp, validateOtp, parentOTPValidate, parentOTPsend} = require('../controllers/otpController');

router.post('/sendOtp', sendOtp);
router.post('/validateOtp', validateOtp);
router.post('/parentOTPsend', parentOTPsend);
router.post('/parentOTPValidate', parentOTPValidate);

module.exports = router;