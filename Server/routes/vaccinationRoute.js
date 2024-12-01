const express = require("express");
const router = express.Router();

const {addVaccination, updateVaccinationData, getVaccinationData} = require("../controllers/vaccinationController");

router.post("/addVaccination", addVaccination);
router.put("/updateVaccinationData", updateVaccinationData);
router.get("/getVaccinationData/:ID", getVaccinationData);

module.exports = router;