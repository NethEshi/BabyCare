import DashboardSearch from "./DashboardSearch";
import profile from "../assets/profile.png";

function DashNav({handleSearch}) {

  return (
    <>
    <div className="flex justify-between">
        <p className=" text-Ash font-bold text-[25px]">Welcome, <span className=" text-NavyBlue font-semibold">Hospital</span></p>
        <div className=" flex space-x-2">
        <DashboardSearch handleSearch={handleSearch}/>
        <img src={profile} alt="profile" className="w-[40px] h-[40px] rounded-[50%]"/>
      </div>
    </div>
    </>
  );
}

export default DashNav;