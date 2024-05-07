const express = require('express');
const router = express.Router();

const {addMidWife, getMidWife, getMidWifeByEmail, updateMidWife, deleteMidWife} = require('../controllers/mohController');

router.post('/addMidWife', addMidWife);
router.get('/getMidWife', getMidWife);
router.get('/getMidWifeByEmail', getMidWifeByEmail);
router.put('/updateMidWife', updateMidWife);
router.delete('/deleteMidWife', deleteMidWife);

module.exports = router;