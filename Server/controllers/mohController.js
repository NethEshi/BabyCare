const MidWife = require("../models/MidWife");
const Location = require("../models/Location");
const Baby = require("../models/Baby");
const Doctor = require ("../models/Doctor")
const Session = require ("../models/Sessions")
const Appointment = require ("../models/Appointments")
const sendEmail = require("../utils/sendEmail");

const mohController = {
  getMidWife: async (req, res) => {
    try {
      const midWife = await MidWife.find({ MOHId: req.params.MOHId });
      res.status(200).json(midWife);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  getMidWifeByEmail: async (req, res) => {
    try {
      const Email = req.body.Email;
      const midWife = await MidWife.findOne({ Email });
      if (!midWife) {
        return res.status(400).json({ message: "MidWife not found" });
      }
      return res.status(200).json(midWife);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
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
      const Contact = req.body.Contact;
      const Address = req.body.Address;
      const District = req.body.District;
      await MidWife.findOneAndUpdate(
        { Email },
        { reg_ID, License_NO, Name, Designation, Contact, Address, District }
      );
      res.status(200).json({ message: "MidWife updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  deleteMidWife: async (req, res) => {
    try {
      const Email = req.body.Email;
      await MidWife.findOneAndDelete({ Email });
      res.status(200).json({ message: "MidWife deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
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
      res.status(201).json({ message: "Location added successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  getLocation: async (req, res) => {
    try {
      const location = await Location.find({ MOHId: req.params.MOHId });
      res.status(200).json(location);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  getDashboardData: async (req, res) => {
    try {
      const midWife = await MidWife.find({ MOHId: req.params.MOHId });
      const location = await Location.find({ MOHId: req.params.MOHId });
      const babies = await Baby.find({ MOHId: req.params.MOHId });
      const birthMonthCounts = await Baby.aggregate([
        { $match: { MOHId: req.params.MOHId } },
        {
          $group: {
            _id: { $month: { $dateFromString: { dateString: "$DOB" } } },
            count: { $sum: 1 },
          },
        },
        { $sort: { _id: 1 } },
      ]);

      const birthMonthData = Array.from({ length: 12 }, () => 0);

      birthMonthCounts.forEach(({ _id, count }) => {
        birthMonthData[_id - 1] = count;
      });

      console.log(birthMonthData);

      const birthWeightCounts = await Baby.aggregate([
        { $match: { MOHId: req.params.MOHId } },
        {
          $group: {
            _id: { $month: { $dateFromString: { dateString: "$DOB" } } },
            avgWeight: { $avg: "$BirthWeight" },
          },
        },
        { $sort: { _id: 1 } },
      ]);

      const birthWeightData = Array.from({ length: 12 }, () => 0);

      birthWeightCounts.forEach(({ _id, avgWeight }) => {
        birthWeightData[_id - 1] = avgWeight || 0;
      });

      const birthHeadCircumferenceCounts = await Baby.aggregate([
        { $match: { MOHId: req.params.MOHId } },
        {
          $group: {
            _id: { $month: { $dateFromString: { dateString: "$DOB" } } },
            avgHeadCircumference: { $avg: "$BirthHeadCircumference" },
          },
        },
        { $sort: { _id: 1 } },
      ]);

      const birthHeadCircumferenceData = Array.from({ length: 12 }, () => 0);

      birthHeadCircumferenceCounts.forEach(({ _id, avgHeadCircumference }) => {
        birthHeadCircumferenceData[_id - 1] = avgHeadCircumference || 0;
      });

      const birthHeightCounts = await Baby.aggregate([
        { $match: { MOHId: req.params.MOHId } },
        {
          $group: {
            _id: { $month: { $dateFromString: { dateString: "$DOB" } } },
            avgHeight: { $avg: "$BirthHeight" },
          },
        },
        { $sort: { _id: 1 } },
      ]);

      const birthHeightData = Array.from({ length: 12 }, () => 0);

      birthHeightCounts.forEach(({ _id, avgHeight }) => {
        birthHeightData[_id - 1] = avgHeight || 0;
      });

      console.log(birthHeadCircumferenceData);
      console.log(birthHeightData);
      console.log(birthWeightData);

      const birthGenderCounts = await Baby.aggregate([
        { $match: { MOHId: req.params.MOHId } },
        {
          $group: {
            _id: {
              gender: "$Gender",
              month: { $month: { $dateFromString: { dateString: "$DOB" } } },
            },
            count: { $sum: 1 },
          },
        },
        { $sort: { "_id.month": 1 } },
      ]);

      const maleBirthData = Array.from({ length: 12 }, () => 0);
      const femaleBirthData = Array.from({ length: 12 }, () => 0);

      birthGenderCounts.forEach(({ _id, count }) => {
        if (_id.gender === "Male") {
          maleBirthData[_id.month - 1] = count;
        } else if (_id.gender === "Female") {
          femaleBirthData[_id.month - 1] = count;
        }
      });

      console.log(maleBirthData);
      console.log(femaleBirthData);

      res
        .status(200)
        .json({
          midwifeCount: midWife.length,
          locationCount: location.length,
          babyCount: babies.length,
          birthMonthData: birthMonthData,
          birthWeightData: birthWeightData,
          birthHeadCircumferenceData: birthHeadCircumferenceData,
          birthHeightData: birthHeightData,
          maleBirthData: maleBirthData,
          femaleBirthData: femaleBirthData,
        });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  addNewDoctor : async (req, res) => {
    try {
      const { SLMCNo, Name, Designation, Email, Contact, RoleId, MOHId } = req.body;

      const doctor = await Doctor.findOne({ SLMCNo });
      if (doctor) {
        return res.status(400).json({ message: "Doctor already exists" });
      }

      const newDoctor = new Doctor({
        SLMCNo,
        Name,
        Designation,
        Email,
        Contact,
        RoleId,
        MOHId,
      });

      await newDoctor.save();
      res.status(201).json({ message: "Doctor added successfully", doctor: newDoctor });
    }
    catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  getDoctor: async (req, res) => {
    try {
      const doctor = await Doctor.find({ MOHId: req.params.MOHId });
      res.status(200).json(doctor);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  updateDoctor : async (req, res) => {
    try {
      const { SLMCNo, Name, Designation, Email, Contact, RoleId, MOHId, Address } = req.body;

      const doctorEx = await Doctor.findOne({ SLMCNo });
      if (!doctorEx) {
        return res.status(400).json({ message: "Doctor not found" });
      }

      const doctor = await Doctor.findOneAndUpdate(
        { SLMCNo },
        { Name, Designation, Email, Contact, RoleId, MOHId, Address },
        { new: true }
      );

      res.status(200).json({ message: "Doctor updated successfully", doctor });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  addSession : async (req, res) => {
    try {
      const { SLMCNo, Date, StartTime, EndTime, MOHId, maxPatients } = req.body;

      const newSession = new Session({
      SLMCNo,
      Date,
      StartTime,
      EndTime,
      MOHId,
      maxPatients
      });

      await newSession.save();
      res.status(201).json({ message: "Session added successfully", session: newSession });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  getSession : async (req, res) => {
    try {
      const session = await Session.find({ MOHId: req.params.MOHId, SLMCNo: req.params.SLMCNo });
      res.status(200).json(session);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  makeAppointment : async (req, res) => {
    try {
      const { SessionId, BabyId } = req.body;

      const exApp = await Appointment.findOne({SessionId: SessionId, BabyId: BabyId})
      if (exApp) {
        return res.status(400).json({ message: "Appointment already exists" });
      }

      const appointments = await Appointment.find({SessionId: SessionId});
      const session = await Session.findOne({_id: SessionId})
      if (appointments.length >= session.maxPatients){
        return res.status(400).json({message: "No available slots"})
      }
      const PatientNumber = appointments.length > 0 ? Math.max(...appointments.map(app => app.PatientNumber)) + 1 : 1;

      const newAppointment = new Appointment({
        SessionId,
        BabyId,
        PatientNumber,
      });

      await newAppointment.save();
      const baby = await Baby.findById(BabyId);
      if (!baby) {
        return res.status(400).json({ message: "Baby not found" });
      }

      const parentEmail = baby.ParentEmail;
      if (!parentEmail) {
        return res.status(400).json({ message: "Parent email not found" });
      }
      const options ={
      to: parentEmail,
      subject: "Appointment Confirmation",
      message: "Your appointment has been confirmed. Appointment details: Session ID:" + SessionId + ", Baby ID: " + BabyId + ", Patient Number: "+PatientNumber +".",
    }
      await sendEmail(options);
      res.status(201).json({ message: "Appointment made successfully", appointment: newAppointment });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  getAppointmentBySessionId : async (req, res) => {
    try {
    const appointments = await Appointment.find({SessionId: req.params.SessionId});
    console.log(appointments);
    if (appointments.length == 0) {
      return res.status(400).json({ message: "Appointments not found" });
    }
    const detailedAppointments = await Promise.all(
      appointments.map(async (appointment) => {
        const baby = await Baby.findById(appointment.BabyId);
        return { ...appointment.toObject(), baby };
      })
    );
    const sessionDetails = await Session.findById(req.params.SessionId);
    return res.status(200).json({ appointments: detailedAppointments, sessionDetails });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  getAppointmentsByBabyId : async (req, res) => {
    
  }
};

module.exports = mohController;
