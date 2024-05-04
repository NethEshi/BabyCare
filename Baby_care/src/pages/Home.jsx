import homeBg from "../assets/home pic.png";
import whoweare_image from "../assets/whoweare_image.png";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import About from "./About";
import Services from "./Services";

function Home() {
  return (
    <>
      <NavBar />
      <div>
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
          </div>
        </div>
        <div className="w-full">
          <About />
        </div>
        <div className="">
          <Services />
        </div>
      </div>
    </>
  );
}

export default Home;
