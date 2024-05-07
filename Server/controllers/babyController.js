const { get } = require("mongoose");
const Baby = require("../models/Baby");

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

      await Baby.findByIdAndUpdate(ID, {
        Name,
        Gender,
        DOB,
        ParentName,
        ParentEmail,
      });
      res.status(200).json({ message: "Baby updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
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
};

module.exports = babyController;
