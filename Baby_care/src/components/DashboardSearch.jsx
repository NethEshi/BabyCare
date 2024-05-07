import profile from "../assets/profile.png";



function DashboardSearch() {
  return (
    <>
    <div className="flex space-x-5">
      <input type="text" placeholder="Search" className="w-[400px] h-10 border border-gray-300 rounded-[20px] px-5"/>
      <div className="flex space-x-5">
        <img src={profile} alt="profile" className="w-[40px] h-[40px] rounded-[50%]"/>
      </div>
      </div>
    </>
  );
}

export default DashboardSearch;
