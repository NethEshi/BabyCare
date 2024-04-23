import homeBg from "../assets/home-pic.svg";
import whoweare_image from "../assets/whoweare_image.png";
import pediatrics from "../assets/pediatrics 1.svg";
import Maintain from "../assets/maintain.svg";
import vaccination from "../assets/vaccination.svg";
import clinics from "../assets/clininc.svg";

function Home() {
  return (
    <div>
      <img className="homeBg" src={homeBg} alt="Home_background" />

      <h1 className="absolute text-white w-[526px] top-[249px] right-[172px] font-extrabold font-inter flex items-center z-[1] text-5xl mq750:text-[38px]">
        We help people to get appointment in online
      </h1>

      <div className="absolute text-white w-[604.8px] h-[151.3px] top-[420px] right-[93.2px] text-3xl leading-[175%] font-light font-inter text-justify inline-block">
        Lorem Media is a full-service social media agency. We offer businesses
        innovative solutions that deliver the right type of audience to you in
        the most effective strategies possible. We strive to develop a community
        around your business, polishing your branding, and improving your public
        relations.
      </div>



      <div>
        <h1 className="absolute top-[800px] right-[50%] text-black font-semibold font-inter text-4xl">
          {" "}
          Who we are{" "}
        </h1>

        <div className="absolute top-[850px] text-base leading-[177%] font-light text-center inline-block ">
          <p className="m-0">
            {" "}
            We are a team committed to enhancing the health of infants and young
            children through innovative technology.{" "}
          </p>

          <p className="m-0">
            {" "}
            Our user-friendly platform streamlines weight monitoring,
            vaccination tracking, and appointment scheduling, fostering seamless
            communication between parents and healthcare providers. Together,
            let's make a lasting impact on the well-being of our youngest
            generation and pave the way for a brighter future for all children.{" "}
          </p>

          <p className="m-0">
            {" "}
            Together, we're shaping a healthier future for children worldwide.
            Join us on our journey to redefine pediatric healthcare.{" "}
          </p>
        </div>

        <div className="flex justify-center">
          <img
            className=" w-[515px] "
            loading="lazy"
            alt=""
            src={whoweare_image}
          />
        </div>
      </div>



      <div>
        <h1 className="absolute top-[1750px] right-[50%] text-black font-semibold font-inter text-4xl">
          {" "}
          Services{" "}
        </h1>

        <div className="absolute top-[1800px] h-[139px] text-base leading-[177%] font-light text-center inline-block ">
          <p className="m-0">
            {" "}
            We are a team committed to enhancing the health of infants and young
            children through innovative technology.{" "}
          </p>

          <p className="m-0">
            {" "}
            Our user-friendly platform streamlines weight monitoring,
            vaccination tracking, and appointment scheduling, fostering seamless
            communication between parents and healthcare providers. Together,
            let's make a lasting impact on the well-being of our youngest
            generation and pave the way for a brighter future for all children.{" "}
          </p>

          <p className="m-0">
            {" "}
            Together, we're shaping a healthier future for children worldwide.
            Join us on our journey to redefine pediatric healthcare.{" "}
          </p>
        </div>
      </div>



      <div>
        <div className="flex flex-wrap justify-center mt-80 p-20">
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-283px w-331px dark:bg-gray-800 bg-LightBlue p-8 flex-col">
              <div className="flex items-center mb-3">
                <img className="pediatrics" src={pediatrics} alt="pediatrics" />
                <h2 className="text-white dark:text-white text-lg font-medium"></h2>
              </div>
              <div className="flex flex-col justify-between flex-grow"></div>
              <p className="leading-relaxed text-base NavyBlue dark:text-gray-300 ">
                Weight Monitoring{" "}
              </p>
            </div>
          </div>
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-283px w-331px dark:bg-gray-800 bg-LightBlue p-8 flex-col">
              <div className="flex items-center mb-3">
                <img
                  className="vaccination"
                  src={vaccination}
                  alt="vaccination"
                />
                <h2 className="text-white dark:text-white text-lg font-medium"></h2>
              </div>
              <div className="flex flex-col justify-between flex-grow"></div>
              <p className="leading-relaxed text-base NavyBlue dark:text-gray-300 ">
                Vaccination Tracking{" "}
              </p>
            </div>
          </div>
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-283px w-331px dark:bg-gray-800 bg-LightBlue p-8 flex-col">
              <div className="flex items-center mb-3">
                <img className="Maintain" src={Maintain} alt="Maintain" />
                <h2 className="text-white dark:text-white text-lg font-medium"></h2>
              </div>
              <div className="flex flex-col justify-between flex-grow"></div>
              <p className="leading-relaxed text-base NavyBlue dark:text-gray-300 ">
                Maintain Health Records{" "}
              </p>
            </div>
          </div>
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-283px w-331px dark:bg-gray-800 bg-LightBlue p-8 flex-col">
              <div className="flex items-center mb-3">
                <img className="clinics" src={clinics} alt="clinics" />
                <h2 className="text-white dark:text-white text-lg font-medium"></h2>
              </div>
              <div className="flex flex-col justify-between flex-grow"></div>
              <p className="leading-relaxed text-base NavyBlue dark:text-gray-300 ">
                Clinic Scheduling{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Home;
