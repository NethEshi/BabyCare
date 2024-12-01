const express = require("express");
const router = express.Router();

const {
  getMidWife,
  getMidWifeByEmail,
  updateMidWife,
  deleteMidWife,
  addLocation,
  getLocation,
  getDashboardData,
  addNewDoctor,
  getDoctor,
  updateDoctor,
  addSession,
  getSession,
  makeAppointment,
  getAppointmentBySessionId,

} = require("../controllers/mohController");

router.get("/getMidWife/:MOHId", getMidWife);
router.post("/getMidWifeByEmail", getMidWifeByEmail);
router.put("/updateMidWife", updateMidWife);
router.delete("/deleteMidWife", deleteMidWife);
router.post("/addLocation", addLocation);
router.get("/getLocation/:MOHId", getLocation);
router.get("/getDashboardData/:MOHId", getDashboardData);
router.post("/addNewDoctor", addNewDoctor);
router.get("/getDoctor/:MOHId", getDoctor);
router.put("/updateDoctor", updateDoctor);
router.post("/addSession", addSession);
router.get("/getSession/:MOHId/:SLMCNo", getSession);
router.post("/makeAppointment", makeAppointment);
router.get("/getAppointmentBySessionId/:SessionId", getAppointmentBySessionId);

module.exports = router;
