import homeBg from "../assets/home pic.png";
import Footer from "../components/Footer";
import midWlog from "../assets/midWlog.svg";
import NavBar from "../components/NavBar";
import ScrollButton from "../components/ScrollButton";
import About from "./About";
import Services from "./Services";
import { useNavigate } from "react-router-dom";

function Home() {

  const Navigate = useNavigate();

  const NavToMidwifeLogin = () => {
    Navigate("/MidwifeLogin");
  };

  return (
    <>
      <NavBar />
      <div className="relative">
        <div className="relative">
          <img className="homeBg w-full" src={homeBg} alt="Home_background" />
          <div className="flex justify-end pr-[5%]">
          <div className=" absolute w-[40%] top-[200px] flex-row ">
            <h1 className="text-white font-extrabold font-inter flex items-center z-[1] text-3xl xl:text-6xl">
            Empowering Parents, Enhancing Care:
            </h1>

            <p className=" text-white h-[151.3px] text-xl leading-[175%] font-light font-inter text-justify inline-block">
            Gain peace of mind and proactive control over child's well-being. Dive deep into their health records effortlessly, ensuring every aspect of their care is optimized. With our platform, child's health becomes a seamless, empowering experience.
            </p>
            <button onClick={NavToMidwifeLogin} className="flex justify-center hover:scale-105">
              <img src= {midWlog} alt="midwife Login" className=" w-[318px] h-[67px]" />
            </button>
          </div>
          </div>
        </div>
        <div className="w-full">
          <About />
        </div>
        <div className="">
          <Services />
        </div>
        <div className=" sticky flex justify-end bottom-10 pr-10">
          <ScrollButton />
        </div>
        <Footer />
      </div>
 
    </>
  );
}

export default Home;
