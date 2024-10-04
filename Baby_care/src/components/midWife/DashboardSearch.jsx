import profile from "../../assets/profile.png";
import search from "../../assets/search.svg";
import { useState } from "react";


function DashboardSearch (props) {

  const [value, setValue] = useState("");

  return (
    <>
    <div className="flex space-x-5">
      <form className="flex space-x-2" onSubmit={props.handleSearch}>
      <input type="text" onChange={props.handleSearch} placeholder="&#x1F50D; Search" className="w-[400px] h-10 border border-gray-300 rounded-[20px] px-5"/>
      <button type="submit" onClick={props.handleSearch}>
        
      </button>
      </form>
      </div>
    </>
  );
}

export default DashboardSearch;
