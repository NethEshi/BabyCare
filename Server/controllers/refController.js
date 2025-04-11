const MOHref = require('../models/MOHref.js');
const refController = {

    setRef : async (req, res) => {
        try{
        const Email = req.body.Email;
        const MOH_Name = req.body.MOH_Name;

        const validEmail = await MOHref.findOne({Email});
        if (validEmail) {
            return res.status(400).json({message: 'Email already exists'});
        }
        const newRef = new MOHref({ Email, MOH_Name });
        await newRef.save();
        res.status(201).json({message: 'Reference set successfully'});
        }
    catch (error){
        res.status(500).json({message: 'Internal server error', error});
    }
    },
};

module.exports = refController;