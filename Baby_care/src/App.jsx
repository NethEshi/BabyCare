import React from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MOHdashboard from "./pages/MOHdashboard";
import MidwifeLogin from "./pages/midWife/MidwifeLogin";
import MidwifeDashboard from "./pages/midWife/MidwifeDashboard";
import BabyProfile from "./pages/midWife/BabyProfile";
import Profile from "./pages/midWife/Profile";
import BMI from "./pages/midWife/BMI";
import HealthReport from "./pages/midWife/HealthReport";
import Vaccination from "./pages/midWife/Vaccination";
import Clinics from "./pages/midWife/Clinics";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/About" Component={About} />
        <Route path="/Services" Component={Services} />
        <Route path="/Contact" Component={Contact} />
        <Route path="/login" Component={Login} />
        <Route path="/SignUp" Component={SignUp} />
        <Route path="/MOHdashboard" Component={MOHdashboard} />
        <Route path="/MidwifeLogin" Component={MidwifeLogin} />
        <Route path="/MidwifeDashboard" Component={MidwifeDashboard} />
        <Route path="/MidwifeDashboard/BabyProfile/*" Component={BabyProfile}>
          <Route index Component={Profile} />
          <Route path="Profile" Component={Profile} />
          <Route path="BMI" Component={BMI} />
          <Route path="HealthReport" Component={HealthReport} />
          <Route path="Vaccination" Component={Vaccination} />
          <Route path="Clinics" Component={Clinics} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;