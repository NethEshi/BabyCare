const express = require('express');
const router = express.Router();

const {addWeightHeight, getWeightHeight, updateWeightHeight, deleteWeightHeight} = require('../controllers/weight_heightController');

router.post('/addWeightHeight', addWeightHeight);
router.get('/getWeightHeight/:ID', getWeightHeight);
router.put('/updateWeightHeight', updateWeightHeight);
router.delete('/deleteWeightHeight', deleteWeightHeight);

module.exports = router;