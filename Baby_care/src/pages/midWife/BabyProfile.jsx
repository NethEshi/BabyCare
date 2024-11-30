import React from "react";
import DashboardSideBar from "../../components/midWife/DashboardSideBar";
import DashNav from "../../components/DashNav";
import { useSelector } from "react-redux";
import BabyNavBar from "../../components/midWife/BabyNavBar";
import { Outlet } from "react-router-dom";

function BabyProfile() {
  const selectedBaby = useSelector((state) => state.baby.selectedBaby);

  return (
    <div className="">
      <div className=" sticky top-0 z-10 bg-white">
        <p className="text-Ash font-bold text-[25px] px-5">
          {selectedBaby.Name}
        </p>
        <BabyNavBar />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default BabyProfile;
