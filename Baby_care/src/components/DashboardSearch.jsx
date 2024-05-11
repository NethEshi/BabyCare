import profile from "../assets/profile.png";
import search from "../assets/search.svg";



function DashboardSearch ({handleSearch}) {
  return (
    <>
    <div className="flex space-x-5">
      <form className="flex space-x-2" onSubmit={handleSearch}>
      <input type="text" placeholder="Search" className="w-[400px] h-10 border border-gray-300 rounded-[20px] px-5"/>
      <button type="submit" >
        <img src={search} alt="search" className="w-[20px] h-[20px]"/>
      </button>
      </form>
      <div className="flex space-x-5">
        <img src={profile} alt="profile" className="w-[40px] h-[40px] rounded-[50%]"/>
      </div>
      </div>
    </>
  );
}

export default DashboardSearch;
