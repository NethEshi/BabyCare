const { get } = require('mongoose');
const HealthReport = require('../models/HealthReport');
const HearingData = require('../models/HearingData');
const VisionData = require('../models/VisionData');

const healthReportController = {

    addHealthReport: async (req, res) => {
        try{
            ID = req.body.ID;
            days10in01 = req.body.days10in01;
            days10in02 = req.body.days10in02;
            days11to28 = req.body.days11to28;
            days42 = req.body.days42;
            skinColor1 = req.body.skinColor1;
            skinColor2 = req.body.skinColor2;
            skinColor3 = req.body.skinColor3;
            skinColor4 = req.body.skinColor4;
            eyeState1 = req.body.eyeState1;
            eyeState2 = req.body.eyeState2;
            eyeState3 = req.body.eyeState3;
            eyeState4 = req.body.eyeState4;
            umbelical1 = req.body.umbelical1;
            umbelical2 = req.body.umbelical2;
            umbelical3 = req.body.umbelical3;
            umbelical4 = req.body.umbelical4;
            onlyBreastFeeding1 = req.body.onlyBreastFeeding1;
            onlyBreastFeeding2 = req.body.onlyBreastFeeding2;
            onlyBreastFeeding3 = req.body.onlyBreastFeeding3;
            onlyBreastFeeding4 = req.body.onlyBreastFeeding4;
            breastFeedingPosture1 = req.body.breastFeedingPosture1;
            breastFeedingPosture2 = req.body.breastFeedingPosture2;
            breastFeedingPosture3 = req.body.breastFeedingPosture3;
            breastFeedingPosture4 = req.body.breastFeedingPosture4;
            breastFeedingRelation1 = req.body.breastFeedingRelation1;
            breastFeedingRelation2 = req.body.breastFeedingRelation2;
            breastFeedingRelation3 = req.body.breastFeedingRelation3;
            breastFeedingRelation4 = req.body.breastFeedingRelation4;
            other1 = req.body.other1;
            other2 = req.body.other2;
            other3 = req.body.other3;
            other4 = req.body.other4;

            const healthReport = new HealthReport({
                ID,
                days10in01,
                days10in02,
                days11to28,
                days42,
                skinColor1,
                skinColor2,
                skinColor3,
                skinColor4,
                eyeState1,
                eyeState2,
                eyeState3,
                eyeState4,
                umbelical1,
                umbelical2,
                umbelical3,
                umbelical4,
                onlyBreastFeeding1,
                onlyBreastFeeding2,
                onlyBreastFeeding3,
                onlyBreastFeeding4,
                breastFeedingPosture1,
                breastFeedingPosture2,
                breastFeedingPosture3,
                breastFeedingPosture4,
                breastFeedingRelation1,
                breastFeedingRelation2,
                breastFeedingRelation3,
                breastFeedingRelation4,
                other1,
                other2,
                other3,
                other4
            });
            await healthReport.save();
            res.status(201).json({ message: 'Health Report added successfully' });
        }
        catch (error){
            res.status(500).json({ message: 'Internal server error', error });
            console.log(error);
        }
    },

    getHealthReport: async (req, res) => {
        try {
            const ID = req.params.ID;
            const healthReport = await HealthReport.findOne({ID});
            if (!healthReport) {
                return res.status(404).json({ message: 'Health Report not found' });
            }
            res.status(200).json(healthReport);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error });
            console.log(error);
        }
    },

    updateHealthReport: async (req, res) => {
        try {
            const ID = req.body.ID;
            const days10in01 = req.body.days10in01;
            const days10in02 = req.body.days10in02;
            const days11to28 = req.body.days11to28;
            const days42 = req.body.days42;
            const skinColor1 = req.body.skinColor1;
            const skinColor2 = req.body.skinColor2;
            const skinColor3 = req.body.skinColor3;
            const skinColor4 = req.body.skinColor4;
            const eyeState1 = req.body.eyeState1;
            const eyeState2 = req.body.eyeState2;
            const eyeState3 = req.body.eyeState3;
            const eyeState4 = req.body.eyeState4;
            const umbelical1 = req.body.umbelical1;
            const umbelical2 = req.body.umbelical2;
            const umbelical3 = req.body.umbelical3;
            const umbelical4 = req.body.umbelical4;
            const onlyBreastFeeding1 = req.body.onlyBreastFeeding1;
            const onlyBreastFeeding2 = req.body.onlyBreastFeeding2;
            const onlyBreastFeeding3 = req.body.onlyBreastFeeding3;
            const onlyBreastFeeding4 = req.body.onlyBreastFeeding4;
            const breastFeedingPosture1 = req.body.breastFeedingPosture1;
            const breastFeedingPosture2 = req.body.breastFeedingPosture2;
            const breastFeedingPosture3 = req.body.breastFeedingPosture3;
            const breastFeedingPosture4 = req.body.breastFeedingPosture4;
            const breastFeedingRelation1 = req.body.breastFeedingRelation1;
            const breastFeedingRelation2 = req.body.breastFeedingRelation2;
            const breastFeedingRelation3 = req.body.breastFeedingRelation3;
            const breastFeedingRelation4 = req.body.breastFeedingRelation4;
            const other1 = req.body.other1;
            const other2 = req.body.other2;
            const other3 = req.body.other3;
            const other4 = req.body.other4;

            let healthReport = await HealthReport.findOneAndUpdate({ID: ID}, {$set: {
                days10in01,
                days10in02,
                days11to28,
                days42,
                skinColor1,
                skinColor2,
                skinColor3,
                skinColor4,
                eyeState1,
                eyeState2,
                eyeState3,
                eyeState4,
                umbelical1,
                umbelical2,
                umbelical3,
                umbelical4,
                onlyBreastFeeding1,
                onlyBreastFeeding2,
                onlyBreastFeeding3,
                onlyBreastFeeding4,
                breastFeedingPosture1,
                breastFeedingPosture2,
                breastFeedingPosture3,
                breastFeedingPosture4,
                breastFeedingRelation1,
                breastFeedingRelation2,
                breastFeedingRelation3,
                breastFeedingRelation4,
                other1,
                other2,
                other3,
                other4
            }}, {new: true});

            res.status(200).json({ message: 'Health Report updated successfully', healthReport });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error });
            console.log(error);
        }
    },

    addVisionData: async (req, res) => {
        try{
            const ID = req.body.ID;
            const firstWeekTowardsLight = req.body.firstWeekTowardsLight;
            const firstWeeklookAtFace = req.body.firstWeeklookAtFace;
            const twoMonthsSounds = req.body.twoMonthsSounds;
            const twoMonthsEyes = req.body.twoMonthsEyes;
            const sixMonthsLookAround = req.body.sixMonthsLookAround;
            const sixMonthsReachOut = req.body.sixMonthsReachOut;
            const sixMonthsMole = req.body.sixMonthsMole;
            const tenMonthsPickUp = req.body.tenMonthsPickUp;
            const twelveMonthsReachOut = req.body.twelveMonthsReachOut;
            const twelveMonthsRecognize = req.body.twelveMonthsRecognize;

            const visionData = new VisionData({
                ID,
                firstWeekTowardsLight,
                firstWeeklookAtFace,
                twoMonthsSounds,
                twoMonthsEyes,
                sixMonthsLookAround,
                sixMonthsReachOut,
                sixMonthsMole,
                tenMonthsPickUp,
                twelveMonthsReachOut,
                twelveMonthsRecognize
            });
            await visionData.save();
            res.status(201).json({ message: 'Vision Data added successfully', visionData});
        }
        catch(error){
            res.status(500).json({ message: 'Internal server error', error });
            console.log(error);
        }
    },

    getVisionData: async (req, res) => {
        try {
            const ID = req.params.ID;
            const visionData = await VisionData.findOne({ID});
            if (!visionData) {
                return res.status(404).json({ message: 'Vision Data not found' });
            }
            res.status(200).json(visionData);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error });
            console.log(error);
        }
    },

    updateVisionData: async (req, res) => {
        try {
            const ID = req.body.ID;
            const firstWeekTowardsLight = req.body.firstWeekTowardsLight;
            const firstWeeklookAtFace = req.body.firstWeeklookAtFace;
            const twoMonthsSounds = req.body.twoMonthsSounds;
            const twoMonthsEyes = req.body.twoMonthsEyes;
            const sixMonthsLookAround = req.body.sixMonthsLookAround;
            const sixMonthsReachOut = req.body.sixMonthsReachOut;
            const sixMonthsMole = req.body.sixMonthsMole;
            const tenMonthsPickUp = req.body.tenMonthsPickUp;
            const twelveMonthsReachOut = req.body.twelveMonthsReachOut;
            const twelveMonthsRecognize = req.body.twelveMonthsRecognize;

            let visionData = await VisionData.findOneAndUpdate({ID: ID}, {$set: {
                firstWeekTowardsLight,
                firstWeeklookAtFace,
                twoMonthsSounds,
                twoMonthsEyes,
                sixMonthsLookAround,
                sixMonthsReachOut,
                sixMonthsMole,
                tenMonthsPickUp,
                twelveMonthsReachOut,
                twelveMonthsRecognize
            }}, {new: true});

            res.status(200).json({ message: 'Vision Data updated successfully', visionData });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error });
            console.log(error);
        }
    },

    addHearingData: async (req, res) => {
        try{
            const ID = req.body.ID;
            const blinkAtLoudNoises = req.body.blinkAtLoudNoises;
            const twoMonthsSounds = req.body.twoMonthsSounds;
            const laughALittle = req.body.laughALittle;
            const eyesTurnTowardsMother = req.body.eyesTurnTowardsMother;
            const turnImmediatelyAfterTalking = req.body.turnImmediatelyAfterTalking;
            const listenToSounds = req.body.listenToSounds;
            const lookForSounds = req.body.lookForSounds;
            const speakToLoudTune = req.body.speakToLoudTune;
            const respondToFamiliarSounds = req.body.respondToFamiliarSounds;
            const respondToWords = req.body.respondToWords;

            const hearingData = new HearingData({
                ID,
                blinkAtLoudNoises,
                twoMonthsSounds,
                laughALittle,
                eyesTurnTowardsMother,
                turnImmediatelyAfterTalking,
                listenToSounds,
                lookForSounds,
                speakToLoudTune,
                respondToFamiliarSounds,
                respondToWords
            });
            await hearingData.save();
            res.status(201).json({ message: 'Hearing Data added successfully', hearingData});
        }
        catch(error){
            res.status(500).json({ message: 'Internal server error', error });
            console.log(error);
        }
    },

    getHearingData: async (req, res) => {
        try {
            const ID = req.params.ID;
            const hearingData = await HearingData.findOne({ID});
            if (!hearingData) {
                return res.status(404).json({ message: 'Hearing Data not found' });
            }
            res.status(200).json(hearingData);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error });
            console.log(error);
        }
    },

    updateHearingData: async (req, res) => {
        try {
            const ID = req.body.ID;
            const blinkAtLoudNoises = req.body.blinkAtLoudNoises;
            const twoMonthsSounds = req.body.twoMonthsSounds;
            const laughALittle = req.body.laughALittle;
            const eyesTurnTowardsMother = req.body.eyesTurnTowardsMother;
            const turnImmediatelyAfterTalking = req.body.turnImmediatelyAfterTalking;
            const listenToSounds = req.body.listenToSounds;
            const lookForSounds = req.body.lookForSounds;
            const speakToLoudTune = req.body.speakToLoudTune;
            const respondToFamiliarSounds = req.body.respondToFamiliarSounds;
            const respondToWords = req.body.respondToWords;

            let hearingData = await HearingData.findOneAndUpdate({ID: ID}, {$set: {
                blinkAtLoudNoises,
                twoMonthsSounds,
                laughALittle,
                eyesTurnTowardsMother,
                turnImmediatelyAfterTalking,
                listenToSounds,
                lookForSounds,
                speakToLoudTune,
                respondToFamiliarSounds,
                respondToWords
            }}, {new: true});

            res.status(200).json({ message: 'Hearing Data updated successfully', hearingData });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error });
            console.log(error);
        }
    }
};

module.exports = healthReportController;

