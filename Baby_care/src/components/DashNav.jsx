import DashboardSearch from "./midWife/DashboardSearch";
import profile from "../assets/profile.png";

function DashNav({handleSearch, serachEnable}) {

  return (
    <>
    <div className="flex justify-between drop-shadow-2xl">
        <p className=" text-Ash font-bold text-[25px]">Welcome, <span className=" text-NavyBlue font-semibold">Hospital</span></p>
    </div>
    </>
  );
}

export default DashNav;