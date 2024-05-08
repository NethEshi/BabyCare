import React from "react";
import Whoweare from "../assets/whoweare_image.png";

function About() {
  return (
    <>
      <div className="w-full h-auto py-10 flex justify-center" id="about">
        <div className=" w-[80%]">
          <h1 className=" text-center font-Inter font-semibold text-4xl">
            Who we are
          </h1>
          <p className="text-center leading-8">
            Our Predictive Digital Weight Monitoring System for children under
            five tracks weight of children. It helps healthcare providers spot
            any signs of malnutrition or growth issues early on. By keeping an
            eye on weight trends and comparing them to standard growth patterns,
            caregivers can step in quickly to support healthy development.
            Alongside weight monitoring, includes features such as vaccination
            reminders and the ability to maintain health records. Caregivers can
            set up automated reminders for vaccination schedules, ensuring
            children receive their vaccines on time for optimal protection
            against diseases. Furthermore, provides a convenient platform to
            store and access health records, including growth charts,
            immunization records, and any other relevant medical information.
          </p>
        </div>
      </div>
      <img
        src={Whoweare}
        alt="Whoweare"
        className="w-[40%] h-[40%] mx-auto animate-fade-up"
      />
    </>
  );
}

export default About;
