import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MidwifeLogin from "./pages/midWife/MidwifeLogin";
import Dashboard from "./pages/midWife/Dashboard";
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
import VaccineView from "./components/overlays/VaccineView";
import ClinicSchedule from "./components/overlays/ClinicSchedule";
import MidWifeHome from "./pages/midWife/midWifeHome";
import DashboardHome from "./components/DashboardHome";
import MidWifes from "./components/midWifes";
import Locations from "./components/locations";
import MidwifeProfile from "./components/MidwifeProfile";
import Doctors from "./components/Doctors";
import ParentLogin from "./components/ParentSide/LoginParent";
import ParentDashboard from "./components/ParentSide/DashboardParent";
import DashHome from "./components/ParentSide/DashHome";
import Baby from "./components/ParentSide/Baby";
import Guidlines from "./components/ParentSide/Guidlines";
import ParentDoc from "./components/ParentSide/Doctors";
import Appoinment from "./components/ParentSide/Appoinment";
import CareNewBorn from "./components/ParentSide/CareNewBorn";
import Feeding from "./components/ParentSide/Feeding";
import MentalHealth from "./components/ParentSide/MentalHealth";
import DoctorProfile from "./components/DoctorProile";
import Appointment from "./components/Appointment";
import DoctorProfileParent from "./components/ParentSide/doctorProfile";

function App() {
  return (
    <OverlayProvider>
      <SubmitChanges />
      <Spinner />
      <EditSave />
      <VaccineView />
      <ClinicSchedule />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MidwifeLogin" element={<MidwifeLogin />} />
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="dashHome" />} />
          <Route path="dashHome" element={<DashboardHome />} />
          <Route path="midWifes" element={<MidWifes />} />
          <Route path="midwifeProfile" element={<MidwifeProfile />} />
          <Route path="locations" element={<Locations />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="doctorProfile" element={<DoctorProfile />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="midWifeHome" element={<MidWifeHome />}>
            <Route path="BabyProfile" element={<BabyProfile />}>
              <Route index element={<Navigate to="Profile" />} />
              <Route path="Profile" element={<Profile />} />
              <Route path="BMI" element={<BMI />} />
              <Route path="HealthReport" element={<HealthReport />}>
                <Route index element={<Navigate to="HReport" />} />
                <Route path="HReport" element={<HReport />} />
                <Route path="Vision" element={<Vision />} />
                <Route path="Hearing" element={<Hearing />} />
              </Route>
              <Route path="Vaccination" element={<Vaccination />} />
              <Route path="Clinics" element={<Clinics />} />
            </Route>
          </Route>
        </Route>
        <Route path="/ParentLogin" element={<ParentLogin />} />
        <Route path="/parentDashboard" element={<ParentDashboard />}>
          <Route index element={<Navigate to="dashHome" />} />
          <Route path="dashHome" element={<DashHome />} />
          <Route path="Baby" element={<BabyProfile />}>
            <Route index element={<Navigate to="Profile" />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="BMI" element={<BMI />} />
            <Route path="HealthReport" element={<HealthReport />}>
              <Route index element={<Navigate to="HReport" />} />
              <Route path="HReport" element={<HReport />} />
              <Route path="Vision" element={<Vision />} />
              <Route path="Hearing" element={<Hearing />} />
            </Route>
            <Route path="Vaccination" element={<Vaccination />} />
            <Route path="Clinics" element={<Clinics />} />
          </Route>
          <Route path="guidelines" element={<Guidlines />}>
            <Route index element={<Navigate to="careNewborn" />} />
            <Route path="careNewborn" element={<CareNewBorn />} />
            <Route path="feeding" element={<Feeding />} />
            <Route path="mentalHealth" element={<MentalHealth />} />
          </Route>
          <Route path="doctors" element={<ParentDoc />} />
          <Route path="doctorProfile" element={<DoctorProfileParent />} />
          <Route path="appoinments" element={<Appoinment />} />
        </Route>
      </Routes>
    </OverlayProvider>
  );
}

export default App;
