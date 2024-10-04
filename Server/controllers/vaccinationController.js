const Baby = require("../models/Baby");
const VaccinationData = require("../models/vaccinationData");

const vaccinationController = {
    addVaccination: async(req, res) => {
        try{
            const {
                ID,
                AtBirth,
                TwoMonth,
                FourMonth,
                SixMonth,
                NineMonth,
                EighteenMonth,
                ThreeYeares,
                FiveYeares,
                TenYeares,
                JapaneseEncephalitis,
                Other} = req.body;

                console.log(req.body);

                const baby = await Baby.findOne({ID});
                if(baby){
                    const vaccinationData = new VaccinationData({
                        ID,
                        AtBirth,
                        TwoMonth,
                        FourMonth,
                        SixMonth,
                        NineMonth,
                        EighteenMonth,
                        ThreeYeares,
                        FiveYeares,
                        TenYeares,
                        JapaneseEncephalitis,
                        Other
                    });
                    await vaccinationData.save();
                    return res.status(201).json({message: "Vaccination data added successfully", vaccinationData});
                } else {
                    return res.status(404).json({message: "Baby not found"});
                }
        }
        catch(error){
            return res.status(500).json({message: "Internal server error", error});
        }
    },

    updateVaccinationData: async(req, res) => {
        try {
            const {
                ID,
                AtBirth,
                TwoMonth,
                FourMonth,
                SixMonth,
                NineMonth,
                EighteenMonth,
                ThreeYeares,
                FiveYeares,
                TenYeares,
                JapaneseEncephalitis,
                Other} = req.body;
                    
                const vaccinationData = await VaccinationData.findOneAndUpdate({ID: ID}, {$set: {
                        AtBirth,
                        TwoMonth,
                        FourMonth,
                        SixMonth,
                        NineMonth,
                        EighteenMonth,
                        ThreeYeares,
                        FiveYeares,
                        TenYeares,
                        JapaneseEncephalitis,
                        Other
                }}, {new: true});
                return res.status(200).json({message: "Vaccination data updated successfully", vaccinationData});
            
        }
        catch(error){
            return res.status(500).json({message: "Internal server error", error});
        }
    },

    getVaccinationData: async(req, res) => {
        try {
            const ID = req.params.ID;
            const vaccinationData = await VaccinationData.findOne({ID});
            if(!vaccinationData){
                return res.status(404).json({message: "No vaccination data found"});
            }
            return res.status(200).json(vaccinationData);
        }
        catch(error){
            return res.status(500).json({message: "Internal server error", error});
        }
    }
}

module.exports = vaccinationController;