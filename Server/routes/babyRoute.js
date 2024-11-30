const express = require('express');
const router = express.Router();

const {addBaby, getBaby, getBabyByID, updateBaby, addClinic, updateClinic, getClinic} = require('../controllers/babyController');

router.post('/addBaby', addBaby);
router.get('/getBaby', getBaby);
router.get('/getBabyByID', getBabyByID);
router.put('/updateBaby', updateBaby);
router.post('/addClinic/:ID', addClinic);
router.put('/updateClinic/:ID', updateClinic);
router.get('/getClinic/:ID', getClinic);

module.exports = router;