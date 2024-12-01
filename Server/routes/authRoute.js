const express = require('express');
const router = express.Router();

const {MOHregister, MOHlogin, MidWifeLogin, MidwifePassSet, MidwifeRegister, getParentEmail, parentPassSet, parentLogin} = require('../controllers/authContoller');

router.post('/register', MOHregister);
router.post('/login', MOHlogin);
router.post('/midwiferegister', MidwifeRegister);
router.post('/midwifelogin', MidWifeLogin);
router.post('/midwifepasswordset', MidwifePassSet);
router.post('/getparentemail', getParentEmail);
router.post('/parentlogin', parentLogin);
router.post('/parentpasswordset', parentPassSet);

module.exports = router;