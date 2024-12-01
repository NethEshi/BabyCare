import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
function BabyNavBar() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <div className="w-full">
      <div className="flex text-Ash py-3 px-5 text-center space-x-16">
        <Link
          to="Profile"
          className={`text-3xl ${
            currentPath.includes("Profile")
              ? "border-NavyBlue border-b-2"
              : ""
          }`}
        >
          Profile
        </Link>
        <Link
          to="BMI"
          className={`text-3xl ${
            currentPath.includes("BMI")
              ? "border-NavyBlue border-b-2"
              : ""
          }`}
        >
          BMI
        </Link>
        <Link
          to="healthReport"
          className={`text-3xl ${
            currentPath.includes("healthReport")
              ? "border-NavyBlue border-b-2"
              : ""
          }`}
        >
          Health Report
        </Link>
        <Link
          to="vaccination"
          className={`text-3xl ${
            currentPath.includes("vaccination")
              ? "border-NavyBlue border-b-2"
              : ""
          }`}
        >
          Vaccination
        </Link>
        <Link
          to="clinics"
          className={`text-3xl ${
            currentPath.includes("clinics")
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
