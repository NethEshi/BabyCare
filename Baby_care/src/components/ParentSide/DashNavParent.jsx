import DashboardSearch from "../midWife/DashboardSearch";
import profile from "../../assets/profile.png";

function DashNavParent({handleSearch, serachEnable}) {

  return (
    <>
    <div className="flex justify-between drop-shadow-2xl">
        <p className=" text-Ash font-bold text-[25px]">Welcome, <span className=" text-NavyBlue font-semibold">Parent</span></p>
    </div>
    </>
  );
}

export default DashNavParent;