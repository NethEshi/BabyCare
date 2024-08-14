import pediatrics from "../assets/pediatrics 1.svg";
import Maintain from "../assets/maintain.svg";
import vaccination from "../assets/vaccination 1.svg";
import clinics from "../assets/clininc.svg";

function Services() {
  return (
    <>
      <div className=" text-center pb-10" id="services">
        <h1 className="font-semibold font-inter text-4xl">Services</h1>

        <div className=" h-auto w-[80%] text-base leading-8 text-center inline-block ">
          <p className="m-0">
            We are a team committed to enhancing the health of infants and young
            children through innovative technology.
          </p>

          <p className="m-0">
            Our services offer a comprehensive solution for child health
            management, including weight monitoring, vaccination tracking,
            health records maintenance, and clinic scheduling. Caregivers can
            easily track weight in real-time, receive vaccination reminders,
            store health records securely, and book clinic appointments
            conveniently. These services empower caregivers to proactively
            manage their child's health, ensuring optimal growth and development
            from infancy through early childhood.
          </p>

          <p className="m-0">
            Together, we're shaping a healthier future for children worldwide.
            Join us on our journey to redefine pediatric healthcare.
          </p>
        </div>
      </div>

      <div className="">
        <div className="flex justify-center">
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-[275px] w-[250px] bg-LightBlue p-8 flex-col">
              <div className="flex justify-center mb-3">
                <img
                  className="pediactrics"
                  src={pediatrics}
                  alt="pediactrics"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow"></div>
              <p className="leading-relaxed text-base NavyBlue text-black text-center ">
                Weight Monitoring
              </p>
            </div>
          </div>
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-[275px] w-[250px] bg-LightBlue p-8 flex-col">
              <div className="flex justify-center mb-3">
                <img
                  className="vaccination"
                  src={vaccination}
                  alt="vaccination"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow"></div>
              <p className="leading-relaxed text-base NavyBlue text-black text-center">
                Vaccination Tracking
              </p>
            </div>
          </div>
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-[275px] w-[250px] bg-LightBlue p-8 flex-col">
              <div className="flex justify-center mb-3">
                <img className="Maintain" src={Maintain} alt="Maintain" />
              </div>
              <div className="flex flex-col justify-between flex-grow"></div>
              <p className="leading-relaxed text-base NavyBlue text-black text-center">
                Maintain Health Records
              </p>
            </div>
          </div>
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-[275px] w-[250px] bg-LightBlue p-8 flex-col">
              <div className="flex justify-center mb-3">
                <img className="clinics" src={clinics} alt="clinics" />
              </div>
              <div className="flex flex-col justify-between flex-grow"></div>
              <p className="leading-relaxed text-base NavyBlue text-black text-center">
                Clinic Scheduling
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
