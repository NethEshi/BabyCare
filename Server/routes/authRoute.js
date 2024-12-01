const express = require('express');
const router = express.Router();

const {MOHregister, MOHlogin, MidWifeLogin, MidwifePassSet, MidwifeRegister} = require('../controllers/authContoller');

router.post('/register', MOHregister);
router.post('/login', MOHlogin);
router.post('/midwiferegister', MidwifeRegister);
router.post('/midwifelogin', MidWifeLogin);
router.post('/midwifepasswordset', MidwifePassSet);

module.exports = router;