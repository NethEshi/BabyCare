import Baby from "../../assets/Baby.svg";
import Logo from "../../assets/LoGo.png";
import Setting from "../../assets/Setting.svg";
import LogOut from "../../assets/LogOut.svg";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { useOverlay } from "../context/OverlayContext";
import Logout from "../overlays/Logout";

function DashboardSideBarParent() {
  const[currentPath, setCurrentPath] = useState("");
  const RoleId = JSON.parse(localStorage.getItem("RoleId"));
  const location = useLocation();
  const navigate = useNavigate()
  const {showSpinner, hideSpinner, showLogout, hideLogout} = useOverlay();

  const confirmLogout = () => {
    hideLogout();
    localStorage.clear();
    navigate("/");
  };

  const cancelLogout = () => {
    hideLogout();
  };


  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);
  return (
    <>
    <Logout confirmFunction={confirmLogout} cancelFunction={cancelLogout} />
      <div className=" bg-NavyBlue h-screen grid grid-flow-row grid-cols-1 place-content-between w-[100%] px-[5%]">
        <div className="">
          <div className="flex justify-center">
            <img src={Logo} alt="logo" className="w-[100px] h-[100px]" />
          </div>
          <Link to={"dashHome"} className={`px-5 w-[100%] hover:scale-110`}>
            <div className= {`flex justify-start space-x-2 rounded-lg py-1 w-[100%] px-5 ${currentPath.includes("dashHome") ? "bg-LBlue" : ""}`}>
              <FeatherIcon icon="home" className="w-[25px] h-[25px] text-white" />
              <span className="text-white font-semibold">Dashboard</span>
            </div>
          </Link>

          <Link to={"Baby"} className="px-5 w-[100%] hover:scale-110">
            <div className= {`flex justify-start space-x-2 rounded-lg py-1 w-[100%] px-5 ${currentPath.includes("midWifeHome") ? "bg-LBlue" : ""}`}>
              <FeatherIcon icon="user" className="w-[25px] h-[25px] text-white" />
              <span className="text-white font-semibold">Baby Profile</span>
            </div>
          </Link>

          <Link to={"guidelines"} className={`px-5 w-[100%] hover:scale-110`}>
            <div className= {`flex justify-start space-x-2 rounded-lg py-1 w-[100%] px-5 ${currentPath.includes("midWifes") ? "bg-LBlue" : ""}`}>
              <FeatherIcon icon="users" className="w-[25px] h-[25px] text-white" />
              <span className="text-white font-semibold">Development Guidance</span>
            </div>
          </Link>

          <Link to={"doctors"} className={`px-5 w-[100%] hover:scale-110 ${RoleId == 2 ? "" : "hidden"}`}>
            <div className= {`flex justify-start space-x-2 rounded-lg py-1 w-[100%] px-5 ${currentPath.includes("doctors") ? "bg-LBlue" : ""}`}>
              <FeatherIcon icon="users" className="w-[25px] h-[25px] text-white" />
              <span className="text-white font-semibold">Doctors</span>
            </div>
          </Link>

          <Link to={"appinments"} className={`px-5 w-[100%] hover:scale-110 ${RoleId == 2 ? "" : "hidden"}`}>
            <div className= {`flex justify-start space-x-2 rounded-lg py-1 w-[100%] px-5 ${currentPath.includes("locations") ? "bg-LBlue" : ""}`}>
              <FeatherIcon icon="map-pin" className="w-[25px] h-[25px] text-white" />
              <span className="text-white font-semibold">Appointments</span>
            </div>
          </Link>
        </div>

        <div className="flex-row pb-10 space-y-5">
          <div>
            <button className="w-[100%]">
              <div className="flex justify-start space-x-2 px-5">
                <img
                  src={Setting}
                  alt="Setting"
                  className="w-[25px] h-[25px]"
                />
                <span className="text-white font-semibold">Settings</span>
              </div>
            </button>
          </div>
          <div>
            <button className="w-[100%]">
              <div className="flex justify-start space-x-2 px-5" onClick={showLogout}>
                <img src={LogOut} alt="LogOut" className="w-[25px] h-[25px]" />
                <span className="text-white font-semibold">Log Out</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardSideBarParent;
