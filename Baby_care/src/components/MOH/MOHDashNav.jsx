import DashboardSearch from "../midWife/DashboardSearch";
import profile from "../../assets/profile.png";
function MOHDashNav({handleSearch, serachEnable}) {

  return (
    <>
    <div className="flex justify-between drop-shadow-2xl">
        <p className=" text-Ash font-bold text-[25px]">Welcome, <span className=" text-NavyBlue font-semibold">Hospital</span></p>
        <div className=" flex space-x-2">
        {serachEnable && <DashboardSearch handleSearch={handleSearch}/>}
        <img src={profile} alt="profile" className="w-[40px] h-[40px] rounded-[50%]"/>
      </div>
    </div>
    </>
  );
}

export default MOHDashNav;