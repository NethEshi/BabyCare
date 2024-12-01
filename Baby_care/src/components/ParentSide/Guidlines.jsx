import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Guidlines() {

    const location = useLocation();
    const selectedBaby = useSelector((state) => state.baby.selectedBaby);
    return (
<>
<div className=" sticky top-0 z-10 bg-white">
        <p className="text-Ash font-bold text-[25px] px-5">
          {"Test"}
        </p>
      </div>
      <div className="px-10 space-x-5 py-5">
        <Link to={"careNewborn"} className= {`px-2 border-2 border-Ash rounded-md ${location.pathname.includes("careNewborn") ? "bg-normal-pink" : ""}`}>Care of the newborn</Link>
        <Link to={"feeding"} className= {`px-2 border-2 border-Ash rounded-md ${location.pathname.includes("feeding") ? "bg-normal-pink" : ""}`}>Feeding</Link>
        <Link to={"mentalHealth"} className= {`px-2 border-2 border-Ash rounded-md ${location.pathname.includes("mentalHealth") ? "bg-normal-pink" : ""}`}>Mental Health</Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </>
    )
}

export default Guidlines;