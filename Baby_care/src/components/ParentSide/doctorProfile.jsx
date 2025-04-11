
import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useOverlay } from "../context/OverlayContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function DoctorProfileParent() {
    const selectedDoctor = useSelector((state) => state.doctor.selectedDoctor);
    const { showSpinner, hideSpinner } = useOverlay();
    const MOHId = JSON.parse(localStorage.getItem("MOHId"));
    const [sessions, setSessions] = useState([]);

    useEffect(()=>{
        showSpinner();
        axios.get(`http://localhost:5000/moh/getSession/${MOHId}/${selectedDoctor.SLMCNo}`)
        .then((response) => {
            console.log(response)
            setSessions(response.data);
        })
        .catch ((error) => {
            console.log(error);
        })
        .finally(() => {
            hideSpinner();
        })
    },[])

    const onBookAppointment = (session) => {
        const data = {
            SessionId : session._id,
            BabyId: JSON.parse(localStorage.getItem("BabyId")),
        }
        showSpinner();
        axios.post(`http://localhost:5000/moh/makeAppointment`, data)
        .then((response) => {
            console.log(response)
            toast.success(response.data.message, {
                position: "bottom-right",
            })
        })
        .catch ((error) => {
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
<div className="p-6 text-Ash h-full">
    <ToastContainer/>
        <div className="flex items-center p-2 justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {'Dr. ' + selectedDoctor.Name}
          </h1>
        </div>
        <div className="flex space-x-4 p-2">
          <div className="relative w-1/2">
            <label
              htmlFor="register-id"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              SLMC No
            </label>
            <input
              type="text"
              id="SLMCNo"
              name="SLMCNo"
              className="block w-full rounded-lg border border-margin bg-white p-3 text-gray-800 placeholder-gray-400 focus:border-NavyBlue focus:outline-none"
              placeholder="SLMC No"
              value={selectedDoctor.SLMCNo}
              disabled
            />
          </div>
          <div className="relative w-1/2">
            <label
              htmlFor="designation"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Designation
            </label>
            <select
              className="block w-full rounded-lg border border-margin bg-white p-3 text-gray-800 placeholder-gray-400 focus:border-NavyBlue focus:outline-none"
              id="Designation"
              name="Designation"
              defaultValue=""
              value={selectedDoctor.Designation}
              disabled
            >
              <option value="" disabled>
                Select Designation
              </option>
              <option value="Pediatric">Pediatric</option>
              <option value="Pediatric gastroenterology">
                Pediatric gastroenterology
              </option>
              <option value="Pediatric cardeology">
                Pediatric cardeology
              </option>
              <option value="Developmental-Behavioral Pediatrics">
                Developmental-Behavioral Pediatrics
              </option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-3 p-2 gap-5">
            {sessions.map((session, index) => {
                return (
                    <div key={index} className="p-5 border-margin border rounded-lg text-center font-semibold">
                        <p className="text-4xl">Session {index + 1}</p>
                        <p className="text-3xl">{session.Date}</p>
                        <p className="text-3xl">{session.StartTime} - {session.EndTime}</p>
                        <button
                            className="rounded-full font-normal bg-NavyBlue text-white font-poppins p-1 hover:scale-105"
                            onClick={() => onBookAppointment(session)}  
                        >
                            Book Appointment
                        </button>
                    </div>
                );
            })}
        </div>

      </div>
  );
}

export default DoctorProfileParent;