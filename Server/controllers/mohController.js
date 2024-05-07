const MidWife = require('../models/MidWife');

const mohController = {
    addMidWife: async (req, res) => {
        try {
            const Email = req.body.Email;
            const reg_ID = req.body.reg_ID;
            const License_NO = req.body.License_NO;
            const Name = req.body.Name;
            const Designation = req.body.Designation;
            const Area = req.body.Area;
            const Contact = req.body.Contact;

            const isEmailExist = await MidWife.findOne({ Email });
            if (isEmailExist) {
                return res.status(400).json({ message: 'Email already exists' });
            }

            const newMidWife = new MidWife({ Email, reg_ID, License_NO, Name, Designation, Area, Contact });
            await newMidWife.save();
            res.status(201).json({ message: 'MidWife added successfully' });

    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
        console.log(error);
    }
    },
    getMidWife: async (req, res) => {
        try {
            const midWife = await MidWife.find();
            res.status(200).json(midWife);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error });
            console.log(error);
        }
    },
    getMidWifeByEmail: async (req, res) => {
        try {
            const Email = req.body.Email;
            const midWife = await MidWife.findById(Email);
            res.status(200).json(midWife);
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
    

}

module.exports = mohController;