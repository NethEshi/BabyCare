import DashboardSearch from "./DashboardSearch";

function DashNav() {
  return (
    <>
    <div className="flex justify-between">
        <p className=" text-Ash font-bold text-[25px]">Welcome, <span className=" text-NavyBlue font-semibold">Hospital</span></p>
        <DashboardSearch/>
    </div>
    </>
  );
}

export default DashNav;