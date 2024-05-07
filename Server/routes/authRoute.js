const express = require('express');
const router = express.Router();

const {MOHregister, MOHlogin} = require('../controllers/authContoller');

router.post('/register', MOHregister);
router.post('/login', MOHlogin);

module.exports = router;