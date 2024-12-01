import React, { useEffect, useState } from "react";
import { customAlphabet } from "nanoid";
import { useOverlay } from "../context/OverlayContext";
import FeatherIcon from "feather-icons-react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";

function AddSession(props) {
    const MOHId = JSON.parse(localStorage.getItem("MOHId"));
    const SLMCNo = useSelector((state) => state.doctor.selectedDoctor.SLMCNo);
    const [formData, setFormData] = useState({
    SLMCNo: SLMCNo,
    Date: "",
    StartTime: "",
    EndTime: "",
    MOHId: MOHId,
    maxPatients: ""
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
          .post("http://localhost:5000/moh/addSession", formData)
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
                        Create a Session
                    </h1>

                    <form className="px-10 space-y-4" onSubmit={handlesubmit}>
                        <div>
                            <label
                                className="text-neutral-700 text-lg font-medium font-poppins"
                                htmlFor="SLMCNo"
                            >
                                Date
                            </label>
                            <input
                                className="w-[100%] px-3 bg-neutral-100 border border-zinc-300 rounded-lg py-2"
                                type="date"
                                id="Date"
                                name="Date"
                                placeholder="Enter Register ID"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label
                                className="text-neutral-700 text-lg font-medium font-poppins"
                                htmlFor="SLMCNo"
                            >
                                Max Appointments
                            </label>
                            <input
                                className="w-[100%] px-3 bg-neutral-100 border border-zinc-300 rounded-lg py-2"
                                type="number"
                                id="maxPatients"
                                name="maxPatients"
                                placeholder="Enter Count"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                        <div>
                            <label
                                className="text-neutral-700 text-lg font-medium font-poppins"
                                htmlFor="TimeRange"
                            >
                                Time
                            </label>
                            <div className="flex space-x-2">
                                <input
                                    className="w-[50%] px-3 bg-neutral-100 border border-zinc-300 rounded-lg py-2"
                                    type="time"
                                    id="StartTime"
                                    name="StartTime"
                                    placeholder="Start Time"
                                    onChange={handleChange}
                                />
                                <input
                                    className="w-[50%] px-3 bg-neutral-100 border border-zinc-300 rounded-lg py-2"
                                    type="time"
                                    id="EndTime"
                                    name="EndTime"
                                    placeholder="End Time"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        </div>
                        <div className=" pb-8">
                            <button
                                className="bg-NavyBlue rounded-full w-[100%] text-white py-2"
                                type="submit"
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
);
}

export default AddSession;