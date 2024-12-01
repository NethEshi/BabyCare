const { get } = require("mongoose");
const Baby = require("../models/Baby");
const Clinic = require("../models/Clinic");
const Weight_Height = require("../models/weight_height");

const babyController = {
  addBaby: async (req, res) => {
    try {
      const ID = req.body.ID;
      const Name = req.body.Name;
      const Gender = req.body.Gender;
      const DOB = req.body.DOB;
      const ParentName = req.body.ParentName;
      const ParentEmail = req.body.ParentEmail;
      const MOHId = req.body.MOHId;

      const newBaby = new Baby({
        ID,
        Name,
        Gender,
        DOB,
        ParentName,
        ParentEmail,
        MOHId
      });
      await newBaby.save();
      res.status(201).json({ message: "Baby added successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },
  updateBaby: async (req, res) => {
    try {
      const ID = req.body.ID;
      const Name = req.body.Name;
      const Gender = req.body.Gender;
      const DOB = req.body.DOB;
      const ParentName = req.body.ParentName;
      const ParentEmail = req.body.ParentEmail;
      const ParentPhone = req.body.ParentPhone;
      const ParentAddress = req.body.ParentAddress;
      const MidWife = req.body.MidWife;
      const ParentAge = req.body.ParentAge; 
      const BirthWeight = req.body.BirthWeight;
      const BirthHeight = req.body.BirthHeight;
      const BirthHeadCircumference = req.body.BirthHeadCircumference;
      const MOHSection = req.body.MOHSection;
      const FMOHSection = req.body.FMOHSection;
      const DateOfSettlement = req.body.DateOfSettlement;
      const HealthCondition = req.body.HealthCondition;
      const VitaminK = req.body.VitaminK;
      const Relation = req.body.Relation;
      const Posture = req.body.Posture;

      console.log(BirthHeadCircumference, BirthHeight, BirthWeight, DateOfSettlement, FMOHSection)

      let baby = await Baby.findOneAndUpdate({ID : ID}, {$set: {
        Name,
        Gender,
        DOB,
        ParentName,
        ParentEmail,
        ParentPhone,
        ParentAddress,
        MidWife,
        ParentAge,
        BirthWeight,
        BirthHeight,
        BirthHeadCircumference,
        MOHSection,
        FMOHSection,
        DateOfSettlement,
        HealthCondition,
        VitaminK,
        Posture,
        Relation,
      }},{new: true});
      res.status(200).json({ message: "Baby updated successfully", baby  });
    } catch (error) {
      res.status(500).json({ message: "Internal server error!", error });
      console.log(error);
    }
  },

  getBaby: async (req, res) => {
    try {
      const baby = await Baby.find();
      res.status(200).json(baby);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  getBabyByMOH: async (req, res) => {
    try {
      const MOHId = req.params.MOHId;
      const baby = await Baby.find({MOHId});
      res.status(200).json(baby);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

    getBabyByID: async (req, res) => {
        try {
        const _id = req.params.ID;
        const baby = await Baby.findOne({_id});
        res.status(200).json(baby);
        } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
        console.log(error);
        }
    },

    addClinic: async (req, res) => {
      try {
          const ID = req.params.ID;
          const { Date, SpecialNotes } = req.body;
  
          let clinic = await Clinic.findOne({ ID });
          if (clinic) {
              clinic.Clinics.push({ Date, SpecialNotes });
          } else {
              clinic = new Clinic({
                  ID,
                  Clinics: [{ Date, SpecialNotes }],
              });
          }
  
          await clinic.save();
          res.status(201).json({ message: "Clinic added successfully", clinic });
      } catch (error) {
          res.status(500).json({ message: "Internal server error", error });
          console.log(error);
      }
  },

    updateClinic: async (req, res) => {
        try {
        const ID = req.params.ID;
        const Date = req.body.Date;
        const index = req.body.index;
        const SpecialNotes = req.body.SpecialNotes;
        let clinic1 = await Clinic.findOne({ID});
        clinic1.Clinics[index].Date = Date;
        clinic1.Clinics[index].SpecialNotes = SpecialNotes;
        let clinic = await Clinic.findOneAndUpdate({ID : ID}, {$set: {
            Clinics: clinic1.Clinics
        }},{new: true});
        res.status(200).json({ message: "Clinic updated successfully", clinic  });
        } catch (error) {
        res.status(500).json({ message: "Internal server error!", error });
        console.log(error);
        }
    },

    getClinic: async (req, res) => {
        try {
        const ID = req.params.ID;
        const clinic = await Clinic.findOne({ID});
        if(!clinic) {
            return res.status(404).json({ message: "No clinic found" });
        }
        res.status(200).json(clinic);
        } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
        console.log(error);
        }
    },

    getBabyData : async (req, res) => {
        try {
        const ID = req.params.ID;
        const baby = await Baby.findOne({ID});
        if(!baby) {
            return res.status(404).json({ message: "No baby found" });
        }
        const weightHeightData = await Weight_Height.findOne({ ID });
        if (!weightHeightData) {
            return res.status(404).json({ message: "No weight and height data found" });
        }

        const weightsByMonth = Array(12).fill(0);
        const heightsByMonth = Array(12).fill(0);
        const currentYear = new Date().getFullYear();

        weightHeightData.Dates.forEach((date, index) => {
            const dateObj = new Date(date);
            const month = dateObj.getMonth();
            const year = dateObj.getFullYear();

            if (year === currentYear) {
          weightsByMonth[month] = weightHeightData.Weights[index] || 0;
          heightsByMonth[month] = weightHeightData.Heights[index] || 0;
            }
        });

        res.status(200).json({ weightsByMonth, heightsByMonth });
        } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
        console.log(error);
        }
    },
};

module.exports = babyController;
