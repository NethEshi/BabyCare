import Baby from "../../assets/Baby.svg";
import Dashboard from "../../assets/Dashboard.svg";
import Midwives from "../../assets/Midwives.svg";
import Locations from "../../assets/Locations.svg";
import Logo from "../../assets/LoGo.png";
import Setting from "../../assets/Setting.svg";
import LogOut from "../../assets/LogOut.svg";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

function MOHSideBar() {
  const [currentPath, setCurrentPath] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const NavToDash = () => {
    navigate("/MidwifeDashboard");
  };

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);
  return (
    <>
      <div className=" bg-NavyBlue h-screen grid grid-flow-row grid-cols-1 place-content-between w-[100%] px-5">
        <div className=" space-y-3">
          <div className="flex justify-center">
            <img src={Logo} alt="logo" className="w-[100px] h-[100px]" />
          </div>

          <Link
            to={"/MOHhome/Dashboard"}
            className={`flex justify-start space-x-2 rounded-lg py-1 w-[100%] px-5 ${
              currentPath.includes("") ? "bg-LBlue" : ""
            }`}
          >
            <FeatherIcon icon="pie-chart" className="" color="white" />
            <span className="text-white font-semibold">Dashboard</span>
          </Link>
          <Link 
              className={`flex justify-start space-x-2 rounded-lg py-1 w-[100%] px-5 ${
                currentPath.includes("") ? "bg-LBlue" : ""
              }`}
            >
              <FeatherIcon icon="user" color="white" />
              <span className="text-white font-semibold">Midwives</span>
          </Link>
          <Link to={"/MOHhome/MidWife"}
              className={`flex justify-start space-x-2 rounded-lg py-1 w-[100%] px-5 ${
                currentPath.includes("") ? "bg-LBlue" : ""
              }`}
            >
              <img src={Baby} alt="Baby" className="w-[25px] h-[25px]" />
              <span className="text-white font-semibold">Babies</span>
          </Link>
          <Link 
              className={`flex justify-start space-x-2 rounded-lg py-1 w-[100%] px-5 ${
                currentPath.includes("") ? "bg-LBlue" : ""
              }`}
            >
              <FeatherIcon icon="map-pin" color="white" />
              <span className="text-white font-semibold">Locations</span>
          </Link>
        </div>

        <div className="flex-row pb-10 space-y-5">
          <div>
            <button className=" px-5 w-[100%]">
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
            <button className=" px-5 w-[100%]">
              <div className="flex justify-start space-x-2 px-5">
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

export default MOHSideBar;
