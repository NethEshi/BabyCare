const { get } = require("mongoose");
const Baby = require("../models/Baby");
const Clinic = require("../models/Clinic");

const babyController = {
  addBaby: async (req, res) => {
    try {
      const ID = req.body.ID;
      const Name = req.body.Name;
      const Gender = req.body.Gender;
      const DOB = req.body.DOB;
      const ParentName = req.body.ParentName;
      const ParentEmail = req.body.ParentEmail;

      const newBaby = new Baby({
        ID,
        Name,
        Gender,
        DOB,
        ParentName,
        ParentEmail,
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

    getBabyByID: async (req, res) => {
        try {
        const ID = req.body.ID;
        const baby = await Baby.findById(ID);
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


};

module.exports = babyController;
