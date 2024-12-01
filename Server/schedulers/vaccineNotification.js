const VaccinationData = require('../models/vaccinationData');
const cron = require('node-cron');
const Baby = require('../models/Baby');
const sendEmail = require('../utils/sendEmail'); // Adjust the path as necessary

const vaccineNotification = async () => {
    const babies = await Baby.find({});

    const ageThresholds = {
        AtBirth: 0,
        TwoMonth: 2,
        FourMonth: 4,
        SixMonth: 6,
        NineMonth: 9,
        EighteenMonth: 18,
        ThreeYeares: 36,
        FiveYeares: 60,
        TenYeares: 120
    };

    babies.forEach(async (baby) => {
        const babyAgeInMonths = calculateAgeInMonths(baby.DOB);
        const vaccinationData = await VaccinationData.findOne({ ID: baby.ID });

        if (vaccinationData) {
            Object.keys(ageThresholds).forEach(vaccinePeriod => {
                if (babyAgeInMonths >= ageThresholds[vaccinePeriod]) {
                    const vaccines = vaccinationData[vaccinePeriod];
                    vaccines.forEach(vaccine => {
                        if (vaccine.date === 'noDate') {
                            sendNotification(baby.ParentEmail, vaccine.name);
                            console.log(baby.ParentEmail, vaccine.name);
                        }
                    });
                }
            });
        }
    });
};

const calculateAgeInMonths = (dob) => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const ageInMonths = (currentDate.getFullYear() - birthDate.getFullYear()) * 12 + (currentDate.getMonth() - birthDate.getMonth());
    return ageInMonths;
};

const sendNotification = async (email, vaccineName) => {
    const options = {
        to: email,
        subject: 'Vaccination Reminder',
        message: `Your child is due for the ${vaccineName} vaccination. Please schedule an appointment.`
    };

    try {
        await sendEmail(options);
        console.log('Email sent successfully');
    } catch (error) {
        console.log('Error sending email:', error);
    }
};

cron.schedule('0 0 * * *',
    vaccineNotification);

module.exports = vaccineNotification;