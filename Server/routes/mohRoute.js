const express = require('express');
const router = express.Router();

const { getMidWife, getMidWifeByEmail, updateMidWife, deleteMidWife, addLocation, getLocation, getDashboardData} = require('../controllers/mohController');

router.get('/getMidWife/:MOHId', getMidWife);
router.post('/getMidWifeByEmail', getMidWifeByEmail);
router.put('/updateMidWife', updateMidWife);
router.delete('/deleteMidWife', deleteMidWife);
router.post('/addLocation', addLocation);
router.get('/getLocation/:MOHId', getLocation);
router.get('/getDashboardData/:MOHId', getDashboardData);

module.exports = router;