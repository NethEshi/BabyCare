import { Routes, Route, Link } from "react-router-dom";
import Logo from '../assets/LoGo.png'

function NavBar() {

  const scroleToAbout = () => {
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
  }

  const scroleToServices = () => {
    document.getElementById("services").scrollIntoView({behavior: "smooth"});
  }
  return (
    <>
      <ul className="flex absolute w-full top-[5%] items-center justify-end text-white font-roboto text-xs bg-transparent space-x-6 z-50 px-[3%]">
        <li>
          <img src={Logo} alt="logo" className="w-[100px] h-[100px]"/>
        </li>
        <li className="">
          <Link to="/">Home</Link>
        </li>
        <li className="" >
          <button onClick={scroleToAbout}>About Us</button>
        </li>
        <li className="">
          <button onClick={scroleToServices}>Services</button>
        </li>
        <li>
          <Link to="/Contact">Contact Us</Link>
        </li>
        <li>
        <Link to="/Login">
          <button className="w-[100px] h-10 relative rounded-[20px] border text-white hover:text-black hover:bg-white border-white">
            <div className="left-[28px] top-[6px] absolute text-sm font-bold font-['Roboto'] leading-7">
              Sign In
            </div>
          </button>
          </Link>
        </li>
        <li>
        <Link to="/SignUp">
          <button className="w-[100px] h-10 relative bg-white text-sky-900 hover:text-white hover:bg-transparent rounded-[20px] border border-white">
            <div className="w-14 h-7 left-[22px] top-[6px] absolute text-sm font-bold font-['Roboto'] leading-7">
              Sign Up
            </div>
          </button>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
