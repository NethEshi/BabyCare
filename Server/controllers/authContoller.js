const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const MOH = require('../models/MOH.js');
const MOHref = require('../models/MOHref.js');
const MidWife = require("../models/MidWife.js");
const Baby = require("../models/Baby.js");
const ParentLogin = require("../models/ParentLogin.js");


const authController = {
MOHregister : async (req, res) => {
    try {
        const MOH_Name = req.body.MOH_Name;
        const District = req.body.District;
        const Type = req.body.Type;
        const Email = req.body.Email;
        const password = req.body.password;
        const cfpassword = req.body.cfpassword;
        const RoleId = req.body.RoleId;

        const validEmail = await MOHref.findOne({ Email });
        console.log(validEmail);
        if (!validEmail) {
            return res.status(400).json({ message: 'Email is invalid' });
        }
        const existingUser = await MOH.findOne({ Email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        if (password !== cfpassword) {
            return res.status(400).json({ message: 'Password does not match' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new MOH({ MOH_Name, District, Type, Email, Password: hashedPassword, RoleId });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
},

MOHlogin : async (req, res) => {
    try {
        const Email = req.body.Email;
        const password = req.body.password;

        const MOHexist = await MOH.findOne({ Email });
        if (!MOHexist) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        console.log(MOHexist._id);

        const isPasswordValid = await bcrypt.compare(password, MOHexist.Password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ MOH: MOHexist.Email }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.status(200).json({ message: 'Login successful', token: token, MOHId: MOHexist._id, RoleId: MOHexist.RoleId, Type: MOHexist.Type });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' ,error});
    }
},

MidwifeRegister : async (req, res) => {
    try {
        const reg_ID = req.body.reg_ID;
        const License_NO = req.body.License_NO;
        const Name = req.body.Name;
        const Designation = req.body.Designation;
        const Email = req.body.Email;
        const Contact = req.body.Contact;
        const RoleId = req.body.RoleId;
        const MOHId = req.body.MOHId;

        const existingUser = await MidWife.findOne({ reg_ID });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const newUser = new MidWife({ reg_ID, License_NO, Name, Designation, Email, Contact, RoleId, MOHId });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
},

MidwifePassSet : async (req, res) => {
    try {
        const Email = req.body.Email;
        const Password = req.body.Password;
        const cfPassword = req.body.cfPassword;

        const existingUser = await MidWife.findOne({ Email });
        if (!existingUser) {
            return res.status(400).json({ message: 'Email does not exist' });
        }
        if (Password !== cfPassword) {
            return res.status(400).json({ message: 'Password does not match' });
        }
        const hashedPassword = await bcrypt.hash(Password, 10);
        await MidWife.updateOne({ Email }, { Password: hashedPassword });

        res.status(201).json({ message: 'Password set successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
},

MidWifeLogin : async (req, res) => {
    try {
        const Email = req.body.Email;
        const Password = req.body.Password;

        const MidWifeexist = await MidWife.findOne({ Email });
        if (!MidWifeexist) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const isPasswordValid = bcrypt.compare(Password, MidWifeexist.Password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ MidWife: MidWifeexist.Email }, process.env.JWT_SECRET, {
            expiresIn: "7d",
          });
        
        res.status(200).json({ message: 'Login successful', token: token, midwifeId: MidWifeexist._id, RoleId: MidWifeexist.RoleId, MOHId: MidWifeexist.MOHId });

        } catch (error) {
            res.status(500).json({ message: 'Internal server error' ,error});
        }
},

parentPassSet : async (req, res) => {
    try {
        const Email = req.body.Email;
        const Password = req.body.Password;
        const cfPassword = req.body.cfPassword;

        const existingUser = await ParentLogin.findOne({ Email });
        if (!existingUser) {
            return res.status(400).json({ message: 'Email does not exist' });
        }
        if (Password !== cfPassword) {
            return res.status(400).json({ message: 'Password does not match' });
        }
        const hashedPassword = await bcrypt.hash(Password, 10);
        await ParentLogin.updateOne({ Email }, { Password: hashedPassword });

        res.status(201).json({ message: 'Password set successfully'  });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
},

parentLogin : async (req, res) => {
    try {
        const Email = req.body.Email;
        const Password = req.body.Password;

        const parentexist = await ParentLogin.findOne({ Email });
        if (!parentexist) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        if (parentexist.Password === "PassNotSet") {
            return res.status(400).json({ message: 'Password not set' });
        }
        const isPasswordValid = bcrypt.compare(Password, parentexist.Password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ Parent: parentexist.Email }, process.env.JWT_SECRET, {
            expiresIn: "7d",
          });

        res.status(200).json({ message: 'Login successful', token: token, BabyId: parentexist.BabyId, MOHType: parentexist.MOHType });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' ,error});

    }
},

getParentEmail : async (req, res) => {
    try {
        const ParentEmail = req.body.Email;
        const validEmail = await Baby.findOne({ParentEmail});
        if (!validEmail) {
            return res.status(400).json({message: 'Email is invalid'});
        } else {
            const parentAcc = await ParentLogin.findOne({Email: ParentEmail});
            if (parentAcc) {
                return res.status(200).json({message: 'Account Found', parentAcc});
            } else {
                const MOHDetails = await MOH.findOne({_id : validEmail.MOHId});
                parentAcc = await ParentLogin({BabyId: validEmail.ID, MOHType: MOHDetails.Type, Email: ParentEmail});
                await parentAcc.save();

                return res.status(200).json({message: 'Account Created', parentAcc});
            }
        }
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error", error});
    }

},


}
module.exports = authController;