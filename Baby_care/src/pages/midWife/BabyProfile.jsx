import React from "react";
import DashboardSideBar from "../../components/midWife/DashboardSideBar";
import DashNav from "../../components/DashNav";
import { useSelector } from "react-redux";
import BabyNavBar from "../../components/midWife/BabyNavBar";
import { Outlet } from "react-router-dom";

function BabyProfile() {
  const selectedBaby = useSelector((state) => state.baby.selectedBaby);

  const handleSearch = (e) => {};

  return (
    <>
      <div className="flex relative h-screen">
        <div className="w-1/6">
          <DashboardSideBar />
        </div>
        <div className=" w-5/6 ">
          <div className="px-5 py-3">
            <DashNav handleSearch={handleSearch} serachEnable={false} />
          </div>
          <>
            <hr />
            <div className="px-5">
              <p className=" text-Ash font-bold text-[25px]">
                {selectedBaby.Name}
              </p>
              <BabyNavBar />
            </div>
          </>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default BabyProfile;
