const express = require('express');
const router = express.Router();

const {sendOtp, validateOtp} = require('../controllers/otpController');

router.post('/sendOtp', sendOtp);
router.post('/validateOtp', validateOtp);

module.exports = router;