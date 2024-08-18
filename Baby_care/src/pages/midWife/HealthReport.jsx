import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
function HealthReport() {

   const location = useLocation();
  return (
    <>
      <div className="px-10 space-x-5 py-5">
        <Link to={"HReport"} className= {`px-2 border-2 border-Ash rounded-md ${location.pathname.includes("HReport") ? "bg-normal-pink" : ""}`}>Reports</Link>
        <Link to={"Vision"} className= {`px-2 border-2 border-Ash rounded-md ${location.pathname.includes("Vision") ? "bg-normal-pink" : ""}`}>Vision</Link>
        <Link to={"Hearing"} className= {`px-2 border-2 border-Ash rounded-md ${location.pathname.includes("Hearing") ? "bg-normal-pink" : ""}`}>Hearing</Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  );
}

export default HealthReport;
