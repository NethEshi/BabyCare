const express = require("express");
const router = express.Router();

const {
  addHealthReport,
  getHealthReport,
  updateHealthReport,
  addVisionData,
  getVisionData,
  updateVisionData,
  addHearingData,
  getHearingData,
  updateHearingData,
} = require("../controllers/healthReportController");

router.post("/addHealthReport", addHealthReport);
router.get("/getHealthReport/:ID", getHealthReport);
router.put("/updateHealthReport", updateHealthReport);
router.post("/addVisionData", addVisionData);
router.get("/getVisionData/:ID", getVisionData);
router.put("/updateVisionData", updateVisionData);
router.post("/addHearingData", addHearingData);
router.get("/getHearingData/:ID", getHearingData);
router.put("/updateHearingData", updateHearingData);

module.exports = router;
