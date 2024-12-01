import React, { useState } from "react";
import cross from "../../assets/cross.png";
import axios from "axios";
import { customAlphabet, nanoid } from "nanoid";
import { useOverlay } from "../context/OverlayContext";
import FeatherIcon from "feather-icons-react";

function AddBaby({ toggleVisibility }) {
  const MOHId = JSON.parse(localStorage.getItem("MOHId"));
  const [formData, setFormData] = useState({
    MOHId: MOHId,
  });
  const { showSpinner, hideSpinner } = useOverlay();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const IdGenerator = (e) => {
    e.preventDefault();
    const nanoid = customAlphabet("1234567890", 10);
    let id = nanoid(10);
    if (formData.Gender === "Male") {
      id = "M" + id;
    } else if (formData.Gender === "Female") {
      id = "F" + id;
    } else {
      id = "O" + id;
    }

    const updatedFormData = { ...formData, ID: id };
    handlesubmit(updatedFormData);
  };

  const handlesubmit = (data) => {
    showSpinner();
    console.log(data);
    axios
      .post("http://localhost:5000/baby/addBaby", data)
      .then((response) => {
        console.log(response.data);
        toggleVisibility();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        hideSpinner();
      });
  };

  return (
    <>
      <div className="text-Ash font-poppins z-50 fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 bg-white rounded-xl">
            <div className="flex justify-end mr-5 mt-5">
              <button className="" onClick={toggleVisibility}>
                <div className="w-[20px] hover:scale-110 hover:text-NavyBlue">
                  <FeatherIcon icon="x" />
                </div>
              </button>
            </div>
            <h1 className=" font-bold text-center text-4xl py-4">
              Register a New Baby
            </h1>

            <form className="px-10 space-y-4" onSubmit={IdGenerator}>
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
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
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
                <button
                  className="bg-NavyBlue rounded-full w-[100%] text-white py-2"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddBaby;
