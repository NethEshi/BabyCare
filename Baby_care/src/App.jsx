import React from "react";
import { Routes, Route, Router, BrowserRouter, Navigate} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MidwifeLogin from "./pages/midWife/MidwifeLogin";
import MidwifeDashboard from "./pages/midWife/MidwifeDashboard";
import BabyProfile from "./pages/midWife/BabyProfile";
import Profile from "./pages/midWife/Profile";
import BMI from "./pages/midWife/BMI";
import HealthReport from "./pages/midWife/HealthReport";
import Vaccination from "./pages/midWife/Vaccination";
import Clinics from "./pages/midWife/Clinics";
import HReport from "./pages/midWife/healthReport/HReport";
import Vision from "./pages/midWife/healthReport/Vision";
import Hearing from "./pages/midWife/healthReport/Hearing";
import { OverlayProvider } from "./components/context/OverlayContext";
import SubmitChanges from "./components/overlays/SubmitChanges";
import Spinner from "./components/overlays/spinner";
import EditSave from "./components/overlays/EditSave";
import "react-toastify/dist/ReactToastify.css";
import MOHLayout from "./components/MOH/MOHLayout";
import MOHDashboard from "./pages/MOHdashboard"
import MidWife from "./components/MOH/MidWife";
import VaccineView from "./components/overlays/VaccineView";
import ClinicSchedule from "./components/overlays/ClinicSchedule";

function App() {
  return (
    <OverlayProvider>
      <SubmitChanges />
      <Spinner />
      <EditSave />
      <VaccineView />
      <ClinicSchedule />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="MOHhome" element={<MOHLayout/>}>
          <Route index element={<Navigate to = 'Dashboard'/>} />
          <Route path="Dashboard" element={<MOHDashboard/>} />
          <Route path="MidWife" element={<MidwifeDashboard/>} /> 
        </Route>
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/MidwifeLogin" element={<MidwifeLogin/>} />
        <Route path="/MidwifeDashboard" element={<MidwifeDashboard/>} />
        <Route path="/MidwifeDashboard/BabyProfile/*" element={<BabyProfile/>}>
          <Route index element={<Navigate to = 'Profile'/>} />
          <Route path="Profile" element={<Profile/>} />
          <Route path="BMI" element={<BMI/>} />
          <Route path="HealthReport" element={<HealthReport/>}>
            <Route index element={<Navigate to = 'HReport'/>}/>
            <Route path="HReport" element={<HReport/>} />
            <Route path="Vision" element={<Vision/>} />
            <Route path="Hearing" element={<Hearing/>} />
          </Route>
          <Route path="Vaccination" element={<Vaccination/>} />
          <Route path="Clinics" element={<Clinics/>} />
        </Route>
      </Routes>
    </OverlayProvider>
  );
}

export default App;