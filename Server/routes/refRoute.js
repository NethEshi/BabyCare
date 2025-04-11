const express = require('express');
const router = express.Router();

const {setRef} = require('../controllers/refController');

router.post('/setRef', setRef);

module.exports = router;