import React, { useState, useEffect } from "react";
import { useOverlay } from "../context/OverlayContext";
import FeatherIcon from "feather-icons-react";
import { toast } from "react-toastify";
import axios from "axios";


function AddLocation({ toggleVisibility }) {

    const MOHId = JSON.parse(localStorage.getItem("MOHId"));
    const [formData, setFormData] = useState({
        Name: "",
        MidwifeId: "",
        Contact: "",
        MOHId: MOHId,
      });
      const [midWifeList, setMidWifeList] = useState([]);
      const {showSpinner, hideSpinner} = useOverlay();
    
      const handleChange = (e) => {
        console.log(e.target.value, e.target.name);
        setFormData((prevFormData) => ({ ...prevFormData, [e.target.name]: e.target.value }));
        if (e.target.name === "MidwifeId") {
        const selectedMidwife = midWifeList.find(midwife => midwife._id === e.target.value);
        if (selectedMidwife) {
            setFormData((prevFormData) => ({ ...prevFormData, Contact: selectedMidwife.Contact }));
        }
        }
      };

      const handlesubmit = (e) => {
        showSpinner();
        e.preventDefault();
        console.log(formData);
        axios
          .post("http://localhost:5000/moh/addLocation", formData)
          .then((response) => {
            console.log(response.data);
            toast.success(response.data.message, {
                position: "bottom-right",
            })
            toggleVisibility();
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

        useEffect(() => {
            showSpinner();
            axios.get(`http://localhost:5000/moh/getMidWife/${MOHId}`)
            .then((response) => {
                console.log(response);
                setMidWifeList(response.data);
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
        }, []);
        
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
              Add a New Location
            </h1>

            <form className="px-10 space-y-4" onSubmit={handlesubmit}>
              <div>
                <label
                  className="text-neutral-700 text-lg font-medium font-poppins" 
                  htmlFor="name"
                >
                  Name
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
                  htmlFor="MidwifeId"
                >
                  MidWife
                </label>
                <select
                  className="w-[100%] px-3 bg-neutral-100 border border-zinc-300 rounded-lg py-2"
                  id="MidwifeId"
                  name="MidwifeId"
                  defaultValue=""
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Midwife
                  </option>
                  {midWifeList.map((midwife, index) => (
                    <option key={index} value={midwife._id}>
                      {midwife.Name}
                    </option>
                  ))}
                </select>
              </div>
              <div className=" pb-8">
                <button
                  className="bg-NavyBlue rounded-full w-[100%] text-white py-2"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddLocation;