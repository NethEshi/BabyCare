import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
function BabyNavBar() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <div className=" w-fit">
      <div className="flex text-Ash py-3 px-5 text-center space-x-16">
        <Link
          to="/MidwifeDashboard/BabyProfile/Profile"
          className={`text-3xl ${
            currentPath === "/MidwifeDashboard/BabyProfile/Profile" || currentPath === "/MidwifeDashboard/BabyProfile"
              ? "border-NavyBlue border-b-2"
              : ""
          }`}
        >
          Profile
        </Link>
        <Link
          to="/MidwifeDashboard/BabyProfile/BMI"
          className={`text-3xl ${
            currentPath === "/MidwifeDashboard/BabyProfile/BMI"
              ? "border-NavyBlue border-b-2"
              : ""
          }`}
        >
          BMI
        </Link>
        <Link
          to="/MidwifeDashboard/BabyProfile/healthReport"
          className={`text-3xl ${
            currentPath === "/MidwifeDashboard/BabyProfile/healthReport"
              ? "border-NavyBlue border-b-2"
              : ""
          }`}
        >
          Health Report
        </Link>
        <Link
          to="/MidwifeDashboard/BabyProfile/vaccination"
          className={`text-3xl ${
            currentPath === "/MidwifeDashboard/BabyProfile/vaccination"
              ? "border-NavyBlue border-b-2"
              : ""
          }`}
        >
          Vaccination
        </Link>
        <Link
          to="/MidwifeDashboard/BabyProfile/clinics"
          className={`text-3xl ${
            currentPath === "/MidwifeDashboard/BabyProfile/clinics"
              ? "border-NavyBlue border-b-2"
              : ""
          }`}
        >
          Clinics
        </Link>
      </div>
      <hr className="pb-5" />
    </div>
  );
}

export default BabyNavBar;
