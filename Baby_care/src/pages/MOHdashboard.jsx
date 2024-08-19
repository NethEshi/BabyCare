import MOHSideBar from "../components/MOH/MOHSideBar";
import MOHDashNav from "../components/MOH/MOHDashNav";

function MOHdashboard() {
  return (
    <div className="flex relative h-screen">
      <div className="w-1/6">
      <MOHSideBar />
      </div>
      <div className=" w-5/6 px-5 py-3">
      <MOHDashNav />
      </div>
      <>
        <hr/>
      </>

    </div>
  );
}

export default MOHdashboard;