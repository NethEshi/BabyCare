import Baby from "../../assets/Baby.svg";
import Logo from "../../assets/LoGo.png";
import Setting from "../../assets/Setting.svg";
import LogOut from "../../assets/LogOut.svg";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function DashboardSideBar() {
  const[currentPath, setCurrentPath] = useState("");
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);
  return (
    <>
      <div className=" bg-NavyBlue h-screen grid grid-flow-row grid-cols-1 place-content-between w-[100%] px-[5%]">
        <div className="">
          <div className="flex justify-center">
            <img src={Logo} alt="logo" className="w-[100px] h-[100px]" />
          </div>
          <Link to={"midWifeHome"} className="px-5 w-[100%] hover:scale-110">
            <div className= {`flex justify-start space-x-2 rounded-lg py-1 w-[100%] px-5 ${currentPath.includes("dashboard") ? "bg-LBlue" : ""}`}>
              <img src={Baby} alt="Baby" className="w-[25px] h-[25px]" />
              <span className="text-white font-semibold">Dashboard</span>
            </div>
          </Link>
          <Link to={"midWifeHome"} className="px-5 w-[100%] hover:scale-110">
            <div className= {`flex justify-start space-x-2 rounded-lg py-1 w-[100%] px-5 ${currentPath.includes("midWifeHome") ? "bg-LBlue" : ""}`}>
              <img src={Baby} alt="Baby" className="w-[25px] h-[25px]" />
              <span className="text-white font-semibold">Babies</span>
            </div>
          </Link>
          <Link to={"midWifeHome"} className="px-5 w-[100%] hover:scale-110">
            <div className= {`flex justify-start space-x-2 rounded-lg py-1 w-[100%] px-5 ${currentPath.includes("MidWife") ? "bg-LBlue" : ""}`}>
              <img src={Baby} alt="Baby" className="w-[25px] h-[25px]" />
              <span className="text-white font-semibold">MidWwife</span>
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

export default DashboardSideBar;
