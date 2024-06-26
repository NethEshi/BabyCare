import profile from "../assets/profile.png";
import search from "../assets/search.svg";
import { useState } from "react";


function DashboardSearch ({handleSearch}) {

  const [value, setValue] = useState("");

  return (
    <>
    <div className="flex space-x-5">
      <form className="flex space-x-2" onSubmit={handleSearch}>
      <input type="text" onChange={value} placeholder="Search" className="w-[400px] h-10 border border-gray-300 rounded-[20px] px-5"/>
      <button type="submit" >
        <img src={search} alt="search" className="w-[20px] h-[20px]"/>
      </button>
      </form>
      </div>
    </>
  );
}

export default DashboardSearch;
