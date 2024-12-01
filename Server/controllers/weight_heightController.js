

const WeightHeight = require('../models/weight_height');

const weight_heightController = {

    addWeightHeight: async (req, res) => {
        try {
            const ID = req.body.ID;
            const Dates = req.body.Dates;
            const Weights = req.body.Weights;
            const Heights = req.body.Heights;

            console.log(ID, Dates, Weights, Heights);

            const weight_height = new WeightHeight({ ID, Dates, Weights, Heights });
            await weight_height.save();

            res.status(201).json({ message: 'Weight and Height added successfully' , weight_height });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error });
        }
    },

    getWeightHeight: async (req, res) => {
        try {
            const ID = req.params.ID;
            const weight_height = await WeightHeight.findOne({ ID });
            if(!weight_height) {
                return res.status(404).json({ message: 'Weight and Height not found', newBaby: true });
            }
            else{
            res.status(200).json({message:'Data found', weight_height , newBaby: false});
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    updateWeightHeight: async (req, res) => {
        try {
            const ID = req.body.ID;
            const Dates = req.body.Dates;
            const Weights = req.body.Weights;
            const Heights = req.body.Heights;

            const weight_height = await WeightHeight.findOne({ ID });
            weight_height.Dates.push(Dates);
            weight_height.Weights.push(Weights);
            weight_height.Heights.push(Heights);
            await weight_height.save();

            res.status(200).json({ message: 'Weight and Height updated successfully', weight_height });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    deleteWeightHeight: async (req, res) => {
        try {
            const ID = req.body.ID;
            await WeightHeight.deleteOne({ ID });

            res.status(200).json({ message: 'Weight and Height deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

module.exports = weight_heightController;