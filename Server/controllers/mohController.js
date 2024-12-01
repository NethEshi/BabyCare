const MidWife = require("../models/MidWife");
const Location = require("../models/Location");
const Baby = require("../models/Baby");

const mohController = {
  getMidWife: async (req, res) => {
    try {
      const midWife = await MidWife.find({ MOHId: req.params.MOHId });
      res.status(200).json(midWife);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  getMidWifeByEmail: async (req, res) => {
    try {
      const Email = req.body.Email;
      const midWife = await MidWife.findOne({ Email });
      if (!midWife) {
        return res.status(400).json({ message: "MidWife not found" });
      }
      return res.status(200).json(midWife);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  updateMidWife: async (req, res) => {
    try {
      const Email = req.body.Email;
      const reg_ID = req.body.reg_ID;
      const License_NO = req.body.License_NO;
      const Name = req.body.Name;
      const Designation = req.body.Designation;
      const Contact = req.body.Contact;
      const Address = req.body.Address;
      const District = req.body.District;
      await MidWife.findOneAndUpdate(
        { Email },
        { reg_ID, License_NO, Name, Designation, Contact, Address, District }
      );
      res.status(200).json({ message: "MidWife updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  deleteMidWife: async (req, res) => {
    try {
      const Email = req.body.Email;
      await MidWife.findOneAndDelete({ Email });
      res.status(200).json({ message: "MidWife deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  addLocation: async (req, res) => {
    try {
      const MOHId = req.body.MOHId;
      const Name = req.body.Name;
      const MidwifeId = req.body.MidwifeId;
      const Contact = req.body.Contact;

      await Location.create({ MOHId, Name, MidwifeId, Contact });
      res.status(201).json({ message: "Location added successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  getLocation: async (req, res) => {
    try {
      const location = await Location.find({ MOHId: req.params.MOHId });
      res.status(200).json(location);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  getDashboardData: async (req, res) => {
    try {
      const midWife = await MidWife.find({ MOHId: req.params.MOHId });
      const location = await Location.find({ MOHId: req.params.MOHId });
      const babies = await Baby.find({ MOHId: req.params.MOHId });
      const birthMonthCounts = await Baby.aggregate([
        { $match: { MOHId: req.params.MOHId } },
        {
          $group: {
            _id: { $month: { $dateFromString: { dateString: "$DOB" } } },
            count: { $sum: 1 },
          },
        },
        { $sort: { _id: 1 } },
      ]);

      const birthMonthData = Array.from({ length: 12 }, () => 0);

      birthMonthCounts.forEach(({ _id, count }) => {
        birthMonthData[_id - 1] = count;
      });

      console.log(birthMonthData);

      const birthWeightCounts = await Baby.aggregate([
        { $match: { MOHId: req.params.MOHId } },
        {
          $group: {
            _id: { $month: { $dateFromString: { dateString: "$DOB" } } },
            avgWeight: { $avg: "$BirthWeight" },
          },
        },
        { $sort: { _id: 1 } },
      ]);

      const birthWeightData = Array.from({ length: 12 }, () => 0);

      birthWeightCounts.forEach(({ _id, avgWeight }) => {
        birthWeightData[_id - 1] = avgWeight || 0;
      });

      const birthHeadCircumferenceCounts = await Baby.aggregate([
        { $match: { MOHId: req.params.MOHId } },
        {
          $group: {
            _id: { $month: { $dateFromString: { dateString: "$DOB" } } },
            avgHeadCircumference: { $avg: "$BirthHeadCircumference" },
          },
        },
        { $sort: { _id: 1 } },
      ]);

      const birthHeadCircumferenceData = Array.from({ length: 12 }, () => 0);

      birthHeadCircumferenceCounts.forEach(({ _id, avgHeadCircumference }) => {
        birthHeadCircumferenceData[_id - 1] = avgHeadCircumference || 0;
      });

      const birthHeightCounts = await Baby.aggregate([
        { $match: { MOHId: req.params.MOHId } },
        {
          $group: {
            _id: { $month: { $dateFromString: { dateString: "$DOB" } } },
            avgHeight: { $avg: "$BirthHeight" },
          },
        },
        { $sort: { _id: 1 } },
      ]);

      const birthHeightData = Array.from({ length: 12 }, () => 0);

      birthHeightCounts.forEach(({ _id, avgHeight }) => {
        birthHeightData[_id - 1] = avgHeight || 0;
      });

      console.log(birthHeadCircumferenceData);
      console.log(birthHeightData);
      console.log(birthWeightData);

      const birthGenderCounts = await Baby.aggregate([
        { $match: { MOHId: req.params.MOHId } },
        {
          $group: {
            _id: {
              gender: "$Gender",
              month: { $month: { $dateFromString: { dateString: "$DOB" } } },
            },
            count: { $sum: 1 },
          },
        },
        { $sort: { "_id.month": 1 } },
      ]);

      const maleBirthData = Array.from({ length: 12 }, () => 0);
      const femaleBirthData = Array.from({ length: 12 }, () => 0);

      birthGenderCounts.forEach(({ _id, count }) => {
        if (_id.gender === "Male") {
          maleBirthData[_id.month - 1] = count;
        } else if (_id.gender === "Female") {
          femaleBirthData[_id.month - 1] = count;
        }
      });

      console.log(maleBirthData);
      console.log(femaleBirthData);

      res
        .status(200)
        .json({
          midwifeCount: midWife.length,
          locationCount: location.length,
          babyCount: babies.length,
          birthMonthData: birthMonthData,
          birthWeightData: birthWeightData,
          birthHeadCircumferenceData: birthHeadCircumferenceData,
          birthHeightData: birthHeightData,
          maleBirthData: maleBirthData,
          femaleBirthData: femaleBirthData,
        });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },
};

module.exports = mohController;
