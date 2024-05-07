const Customer = require("../models/customer.js");
const jwt = require("jsonwebtoken");
const express=require("express");

const adminAuthMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token)
    return res.status(401).json({ message: "Please login to continue" });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded)
    return res.status(400).json({ message: "Invalid Authentication." });

  const customer = await Customer.findOne({ _id: decoded._id });
  if (customer.role !== "admin") {
    return res.status(401).json({ message: "You are not authorized" });
  }
  next();
};

module.exports =  adminAuthMiddleware;