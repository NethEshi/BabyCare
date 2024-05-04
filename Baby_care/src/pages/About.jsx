import React from "react";
import Whoweare from "../assets/whoweare_image.png"

function About() {
  return (
    <>
    <div className="w-full h-auto py-10 flex justify-center" id="about">
      <div className=" w-[80%]">
      <h1 className=" text-center font-Inter font-semibold text-4xl">Who we are</h1>
      <p className="text-center leading-8">We are a team committed to enhancing the health of infants and young children through innovative technology.
Our user-friendly platform streamlines weight monitoring, vaccination tracking, and appointment scheduling, fostering seamless communication between parents and healthcare providers. Together, let's make a lasting impact on the well-being of our youngest generation and pave the way for a brighter future for all children.
Together, we're shaping a healthier future for children worldwide. Join us on our journey to redefine pediatric healthcare.</p>
    </div>
    </div>
    <img src={Whoweare} alt="Whoweare" className="w-[40%] h-[40%] mx-auto"/>
    </>
  );
}

export default About;