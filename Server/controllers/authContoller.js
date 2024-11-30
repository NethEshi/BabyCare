const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const MOH = require('../models/MOH.js');
const MOHref = require('../models/MOHref.js');


const authController = {
MOHregister : async (req, res) => {
    try {
        const MOH_Name = req.body.MOH_Name;
        const District = req.body.District;
        const Type = req.body.Type;
        const Email = req.body.Email;
        const password = req.body.password;
        const cfpassword = req.body.cfpassword;
        const RoleId = 1;

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

        const isPasswordValid = await bcrypt.compare(password, MOHexist.Password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ MOH: MOHexist.Email }, process.env.JWT_SECRET, {
            expiresIn: "7d",
          });

        res.status(200).json({ message: 'Login successful', token});
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' ,error});
    }
},
}
module.exports = authController;