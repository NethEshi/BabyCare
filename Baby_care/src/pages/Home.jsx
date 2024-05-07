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
          <div className=" absolute w-[340px] top-[200px] flex-row ">
            <h1 className="text-white font-extrabold font-inter flex items-center z-[1] text-3xl xl:text-6xl">
              We help people to get appointment in online
            </h1>

            <p className=" text-black h-[151.3px] text-xl leading-[175%] font-light font-inter text-justify inline-block">
              Lorem Media is a full-service social media agency. We offer
              businesses innovative solutions that deliver the right type of
              audience to you in the most effective strategies possible. We
              strive to develop a community around your business, polishing your
              branding, and improving your public relations.
            </p>
            <button onClick={NavToMidwifeLogin}>
              <img src= {midWlog} alt="midwife Login" className=" w-[318px] h-[67px]" />
            </button>
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
      </div>
    </>
  );
}

export default Home;
