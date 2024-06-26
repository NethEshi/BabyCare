import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MOHdashboard from "./pages/MOHdashboard";
import MidwifeLogin from "./pages/MidwifeLogin";
import MidwifeDashboard from "./pages/MidwifeDashboard";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MOHdashboard" element={<MOHdashboard />} />
        <Route path="/MidwifeLogin" element={<MidwifeLogin />} />
        <Route path="/MidwifeDashboard" element={<MidwifeDashboard />} />
      </Routes>
    </>
  );
}

export default App;