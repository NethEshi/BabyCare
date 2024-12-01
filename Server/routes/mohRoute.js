const express = require('express');
const router = express.Router();

const { getMidWife, getMidWifeByEmail, updateMidWife, deleteMidWife, addLocation, getLocation} = require('../controllers/mohController');

router.get('/getMidWife/:MOHId', getMidWife);
router.post('/getMidWifeByEmail', getMidWifeByEmail);
router.put('/updateMidWife', updateMidWife);
router.delete('/deleteMidWife', deleteMidWife);
router.post('/addLocation', addLocation);
router.get('/getLocation/:MOHId', getLocation);

module.exports = router;