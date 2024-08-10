import Baby from "../../assets/Baby.svg";
import Logo from "../../assets/LoGo.png";
import Setting from "../../assets/Setting.svg";
import LogOut from "../../assets/LogOut.svg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function DashboardSideBar() {
  const[currentPath, setCurrentPath] = useState("");
  const location = useLocation();


  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);
  return (
    <>
      <div className=" bg-NavyBlue h-screen grid grid-flow-row grid-cols-1 place-content-between w-[100%]">
        <div className="">
          <div className="flex justify-center">
            <img src={Logo} alt="logo" className="w-[100px] h-[100px]" />
          </div>
          <button className="px-5 w-[100%]">
            <div className= {`flex justify-start space-x-2 rounded-lg py-1 w-[100%] px-5 ${currentPath.includes("MidwifeDashboard") ? "bg-LBlue" : ""}`}>
              <img src={Baby} alt="Baby" className="w-[25px] h-[25px]" />
              <span className="text-white font-semibold">Babies</span>
            </div>
          </button>
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

export default DashboardSideBar;
