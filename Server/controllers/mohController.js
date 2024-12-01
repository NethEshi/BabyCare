const MidWife = require('../models/MidWife');
const Location = require('../models/Location');
const Baby =  require('../models/Baby');

const mohController = {
    getMidWife: async (req, res) => {
        try {
            const midWife = await MidWife.find({MOHId: req.params.MOHId});
            res.status(200).json(midWife);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error });
            console.log(error);
        }
    },

    getMidWifeByEmail: async (req, res) => {
        try {
            const Email = req.body.Email;
            const midWife = await MidWife.findOne({ Email });
            if (!midWife) {
                return res.status(400).json({ message: 'MidWife not found' });
            }
            return res.status(200).json(midWife);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error });
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
            const Area = req.body.Area;
            const Contact = req.body.Contact;
            await MidWife.findByIdAndUpdate(Email, { reg_ID, License_NO, Name, Designation, Area, Contact });
            res.status(200).json({ message: 'MidWife updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error });
            console.log(error);
        }
    },

    deleteMidWife: async (req, res) => {
        try {
            const Email = req.body.Email;
            await MidWife.findByIdAndDelete(Email);
            res.status(200).json({ message: 'MidWife deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error });
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
            res.status(201).json({ message: 'Location added successfully' });

        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error });
            console.log(error);
        }
    },

    getLocation: async (req, res) => {
        try {
            const location = await Location.find({MOHId: req.params.MOHId});
            res.status(200).json(location);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error });
            console.log(error);
        }
    },

    getDashboardData: async (req, res) => {
        try {
            const midWife = await MidWife.find({MOHId: req.params.MOHId});
            const location = await Location.find({MOHId: req.params.MOHId});
            const babies = await Baby.find({MOHId: req.params.MOHId});
            res.status(200).json({midwifeCount: midWife.length, locationCount: location.length, babyCount: babies.length});
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error });
            console.log(error);
        }
    }

}

module.exports = mohController;