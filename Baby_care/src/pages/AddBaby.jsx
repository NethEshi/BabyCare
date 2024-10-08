import React, { useState } from "react";
import cross from "../assets/cross.png";
import axios from "axios";
import { customAlphabet, nanoid } from "nanoid";
import { useOverlay } from "../components/context/OverlayContext";

function AddBaby({ toggleVisibility }) {
  const [formData, setFormData] = useState({
    ID: "",
    Name: "",
    Gender: "",
    DOB: "",
    ParentName: "",
    ParentEmail: "",
  });
  const {showSpinner, hideSpinner} = useOverlay();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const IdGenerator = () => {
    const nanoid = customAlphabet("1234567890", 10);
    let id = nanoid(10);
    if (formData.Gender === "Male"){
        id = "M" + id;
    }else if (formData.Gender === "Female"){
        id = "F" + id;
    }else{
        id = "O" + id;
    }

    setFormData({ ...formData, ID: id });
  }

  const handlesubmit = (e) => {
    showSpinner();
    e.preventDefault();
    IdGenerator();
    console.log(formData);
    axios
      .post("http://localhost:5000/baby/addBaby", formData)
      .then((response) => {
        console.log(response.data);
        toggleVisibility();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        hideSpinner();
      })
  };

  return (
    <>
      <div className=" w-screen h-screen bg-black bg-opacity-60">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 bg-white w-[25%] top-[3%] absolute rounded-xl">
          <div className=" absolute right-[2%] top-[2%]">
            <button className="" onClick={toggleVisibility}>
                <div className="w-[20px] hover:animate-spinOneRoundClockwise">
                <img src={cross} alt="close" />
                </div>
            </button>
        </div>
            <h1 className=" font-bold text-center text-4xl py-4">Register a New Baby</h1>

            <form className="px-10 space-y-4" onSubmit={handlesubmit}>
              <div>
                <label
                  className="text-neutral-700 text-lg font-medium font-poppins"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  className="w-[100%] px-3 bg-neutral-100 border border-zinc-300 rounded-lg py-2"
                  type="text"
                  id="Name"
                  name="Name"
                  placeholder="Enter full name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="text-neutral-700 text-lg font-medium font-poppins"
                  htmlFor="Gender"
                >
                  Gender
                </label>
                <select
                  className="w-[100%] px-3 bg-neutral-100 border border-zinc-300 rounded-lg py-2"
                  id="Gender"
                  name="Gender"
                  defaultValue=""
                  onChange={handleChange}
                ><option value="" disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label
                  className="text-neutral-700 text-lg font-medium font-poppins"
                  htmlFor="DOB"
                >
                  Date of Birth
                </label>
                <input
                  className="w-[100%] px-3 bg-neutral-100 border border-zinc-300 rounded-lg py-2"
                  type="date"
                  id="DOB"
                  name="DOB"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="text-neutral-700 text-lg font-medium font-poppins"
                  htmlFor="ParentName"
                >
                  Parent Name
                </label>
                <input
                  className="w-[100%] px-3 bg-neutral-100 border border-zinc-300 rounded-lg py-2"
                  type="text"
                  id="ParentName"
                  name="ParentName"
                  placeholder="Enter parent name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="text-neutral-700 text-lg font-medium font-poppins"
                  htmlFor="ParentEmail"
                >
                  Parent Email
                </label>
                <input
                  className="w-[100%] px-3 bg-neutral-100 border border-zinc-300 rounded-lg py-2"
                  type="email"
                  id="ParentEmail"
                  name="ParentEmail"
                  placeholder="Enter parent email"
                  onChange={handleChange}
                />
              </div>
              <div className=" pb-8">
                <button className="bg-NavyBlue rounded-full w-[100%] text-white py-2" type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddBaby;
