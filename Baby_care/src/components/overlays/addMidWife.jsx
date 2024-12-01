 import React, { useEffect, useState } from "react";
import { customAlphabet } from "nanoid";
import { useOverlay } from "../context/OverlayContext";
import FeatherIcon from "feather-icons-react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

function AddMidWife(props) {
    const MOHId = JSON.parse(localStorage.getItem("MOHId"));
    const [formData, setFormData] = useState({
    reg_ID: "",
    License_NO: "",
    Designation: "",
    Name:"",
    Email: "",
    Contact: "",
    RoleId: 2,
    MOHId: MOHId,
      });
      const {showSpinner, hideSpinner} = useOverlay();
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handlesubmit = (e) => {
        showSpinner();
        e.preventDefault();
        console.log(formData);
        axios
          .post("http://localhost:5000/auth/midwiferegister", formData)
          .then((response) => {
            console.log(response.data);
            toast.success(response.data.message, {
                position: "bottom-right",
            })
            setTimeout(() => {
            props.toggleVisibility();
            }, 500);
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.response.data.message, {
                position: "bottom-right",
            })
          })
          .finally(() => {
            hideSpinner();
          })
      };

  return (
    <>
    <ToastContainer/>
      <div className="text-Ash font-poppins z-50 fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 bg-white rounded-xl">
            <div className="flex justify-end mr-5 mt-5">
              <button className="" onClick={props.toggleVisibility}>
                <div className="w-[20px] hover:scale-110 hover:text-NavyBlue">
                  <FeatherIcon icon="x" />
                </div>
              </button>
            </div>
            <h1 className=" font-bold text-center text-4xl py-4">
              Register a New Midwife
            </h1>

            <form className="px-10 space-y-4" onSubmit={handlesubmit}>
              <div>
                <label
                  className="text-neutral-700 text-lg font-medium font-poppins"
                  htmlFor="reg_ID"
                >
                  Register ID
                </label>
                <input
                  className="w-[100%] px-3 bg-neutral-100 border border-zinc-300 rounded-lg py-2"
                  type="text"
                  id="reg_ID"
                  name="reg_ID"
                  placeholder="Enter Register ID"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="text-neutral-700 text-lg font-medium font-poppins"
                  htmlFor="License_NO"
                >
                  License Number
                </label>
                <input
                  className="w-[100%] px-3 bg-neutral-100 border border-zinc-300 rounded-lg py-2"
                  type="text"
                  id="License_NO"
                  name="License_NO"
                  placeholder="Enter License Number"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="text-neutral-700 text-lg font-medium font-poppins"
                  htmlFor="Name"
                >
                  Name
                </label>
                <input
                  className="w-[100%] px-3 bg-neutral-100 border border-zinc-300 rounded-lg py-2"
                  type="text"
                  id="Name"
                  name="Name"
                  placeholder="Enter Name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="text-neutral-700 text-lg font-medium font-poppins"
                  htmlFor="Designation"
                >
                  Designation
                </label>
                <select
                  className="w-[100%] px-3 bg-neutral-100 border border-zinc-300 rounded-lg py-2"
                  id="Designation"
                  name="Designation"
                  defaultValue=""
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Designation
                  </option>
                  <option value={"super visionary public health midwife"}>super visionary public health midwife</option>
                  <option value={"public health midwife"}>public health midwife</option>
                  <option value={"special grade midwife"}>special grade midwife </option>
                </select>
              </div>
              <div>
                <label
                  className="text-neutral-700 text-lg font-medium font-poppins"
                  htmlFor="Email"
                >
                  Email
                </label>
                <input
                  className="w-[100%] px-3 bg-neutral-100 border border-zinc-300 rounded-lg py-2"
                  type="email"
                  id="Email"
                  name="Email"
                  placeholder="Enter Email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="text-neutral-700 text-lg font-medium font-poppins"
                  htmlFor="Contact"
                >
                    Contact
                </label>
                <input
                  className="w-[100%] px-3 bg-neutral-100 border border-zinc-300 rounded-lg py-2"
                  type="text"
                  id="Contact"
                  name="Contact"
                  placeholder="Enter Contact"
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

export default AddMidWife;