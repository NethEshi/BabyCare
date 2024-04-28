import { Routes, Route, Link } from "react-router-dom";
import homeBg from "../assets/home-pic.svg";

function NavBar() {
  return (
    <>
      <ul className="flex  text-white font-roboto absolute h-[0.51%] w-[16.91%] top-[10%] right-[26.25%] bottom-[97.32%] left-[60%] text-xs space-x-6">
        <li className="top-[74px] right-[629px] inline-block min-w-[38px] z-[1]">
          <Link to="/">Home</Link>
        </li>
        <li className="top-[74px] right-[533px] inline-block min-w-[58px] z-[1]">
          <Link to="/About">About Us</Link>
        </li>
        <li className="top-[74px] right-[440px] inline-block min-w-[55px] z-[1]">
          <Link to="/Services">Services</Link>
        </li>
        <li className="top-[74px] right-[332px] inline-block min-w-[70px] z-[1]">
          <Link to="/Contact">Contact Us</Link>
        </li>
      </ul>

      <button className="text-white top-[64px] right-[170px] py-1 px-[27px] bg-[transparent] w-[100px] absolute rounded-xl box-border flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-white hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100 cursor-pointer ">
        <Link to="/Login">Sign In</Link>
      </button>
      <button className="text-NavyBlue top-[64px] right-[50px] py-1 px-[27px] bg-white w-[100px] absolute rounded-xl box-border flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-white hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100 cursor-pointer ">
        <Link to="/SignUp">Sign Up</Link>
      </button>
    </>
  );
}

export default NavBar;
