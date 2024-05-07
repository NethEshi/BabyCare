const express = require('express');
const router = express.Router();

const {addBaby, getBaby, getBabyByID, updateBaby} = require('../controllers/babyController');

router.post('/addBaby', addBaby);
router.get('/getBaby', getBaby);
router.get('/getBabyByID', getBabyByID);
router.put('/updateBaby', updateBaby);

module.exports = router;