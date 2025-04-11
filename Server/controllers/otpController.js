const OTP = require("../models/OTP");
const sendEmail = require("../utils/sendEmail");
const randomstring = require("randomstring");
const jwt = require("jsonwebtoken");
const MidWife = require("../models/MidWife");
const ParentLogin = require("../models/ParentLogin");

const otpController = {
  sendOtp: async (req, res) => {
    try {
      const Email = req.body.Email;
      const isEmailExist = await OTP.findOne({ Email });
      if (isEmailExist) {
        return res.status(400).json({ message: "Otp already sent" });
      }

      const isEmail = await MidWife.findOne({ Email });
      if (!isEmail) {
        return res.status(400).json({ message: "Email Invalid" });
      }
      const otp = randomstring.generate({ length: 6, charset: "numeric" });
      const newOtp = new OTP({ Email, otp });
      console.log(newOtp);
      await newOtp.save();

      await sendEmail({
        to: Email,
        subject: "OTP for user verification",
        message: `Your OTP is ${otp}`,
      });

      res.status(200).json({ message: "Otp sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  validateOtp: async (req, res) => {
    try {
      const Email = req.body.Email;
      const otp = req.body.otp;

      console.log(req.body);
      console.log(Email);
      console.log(otp);
      const validOtp = await OTP.findOne({ Email, otp });
      if (!validOtp) {
      return res.status(400).json({ message: "Invalid OTP" });
      } else {
        await OTP.deleteOne({ Email, otp });
      }
      return res
        .status(200)
        .json({ message: "OTP validated successfully", isDeleted: true });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error);
    }
  },

  parentOTPsend : async (req, res) => {
    try {
      const Email = req.body.Email;
      const isEmailExist = await OTP.findOne({ Email });
      if (isEmailExist) {
        return res.status(400).json({ message: "Otp already sent" });
      }
      const isEmail = await ParentLogin.findOne({ Email });
      if (!isEmail) {
        return res.status(400).json({ message: "Email Invalid" });
      }
      const otp = randomstring.generate({ length: 6, charset: "numeric" });
      const newOtp = new OTP({ Email, otp });
      console.log(newOtp);
      await newOtp.save();

      await sendEmail({
        to: Email,
        subject: "OTP for user verification",
        message: `Your OTP is ${otp}`,
      });

      return res.status(200).json({ message: "Otp sent successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error", error });
    }  
    },

    parentOTPValidate : async (req, res) => {
        try {
            const { Email, otp } = req.body;
            console.log(req.body);

            const validOtp = await OTP.findOne({ Email, otp });
            if (!validOtp) {
            return res.status(400).json({ message: "Invalid OTP" });
            } else {
              await OTP.deleteOne({ Email, otp });
            }
            console.log("OTP validated successfully");
            return res.status(200).json({ message: "OTP validated successfully", isDeleted: true });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error", error });
        }
    },
};

module.exports = otpController;
