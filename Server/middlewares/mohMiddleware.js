const MOH = require("../models/MOH.js");
const jwt = require("jsonwebtoken");

const adminAuthMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token)
    return res.status(401).json({ message: "Please login to continue" });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded)
    return res.status(400).json({ message: "Invalid Authentication." });

  const moh = await MOH.findOne({ Email: decoded.MOH});
  if (moh.role !== "admin") {
    return res.status(401).json({ message: "You are not authorized" });
  }
  next();
};

module.exports =  adminAuthMiddleware;