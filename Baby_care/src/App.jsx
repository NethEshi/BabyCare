import React from "react";
import { Routes, Route, Router, BrowserRouter} from "react-router-dom";
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
        <Route path="/" Component={Home} />
        <Route path="/About" Component={About} />
        <Route path="/Services" Component={Services} />
        <Route path="/Contact" Component={Contact} />
        <Route path="/login" Component={Login} />
        <Route path="MOHhome" Component={MOHLayout}>
          <Route index Component={MOHDashboard} />
          <Route path="Dashboard" Component={MOHDashboard} />
          <Route path="MidWife" Component={MidwifeDashboard} /> 
        </Route>
        <Route path="/SignUp" Component={SignUp} />
        <Route path="/MidwifeLogin" Component={MidwifeLogin} />
        <Route path="/MidwifeDashboard" Component={MidwifeDashboard} />
        <Route path="/MidwifeDashboard/BabyProfile/*" Component={BabyProfile}>
          <Route index Component={Profile} />
          <Route path="Profile" Component={Profile} />
          <Route path="BMI" Component={BMI} />
          <Route path="HealthReport" Component={HealthReport}>
            <Route index Component={HReport} />
            <Route path="HReport" Component={HReport} />
            <Route path="Vision" Component={Vision} />
            <Route path="Hearing" Component={Hearing} />
          </Route>
          <Route path="Vaccination" Component={Vaccination} />
          <Route path="Clinics" Component={Clinics} />
        </Route>
      </Routes>
    </OverlayProvider>
  );
}

export default App;