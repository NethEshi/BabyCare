import MOHSideBar from "./MOHSideBar";
import MOHDashNav from "./MOHDashNav";
import { Outlet } from "react-router-dom";

function MOHLayout(props) {
  return (
    <>
          <div className="flex relative h-screen">
        <div className="w-1/6">
          <MOHSideBar />
        </div>
        <div className=" w-5/6 ">
          <div className="px-5 py-3">
            <MOHDashNav handleSearch={""} serachEnable={true} />
          </div>
          <>
            <hr />
            <Outlet/>
          </>
        </div>
      </div>
    </>
  );
}

export default MOHLayout;