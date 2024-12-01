
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useOverlay } from "./context/OverlayContext";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedDoctor } from "../actions/doctor";
import AddDoctor from "./overlays/addDoctor";
import { useSelector } from "react-redux";

function Doctors() {
  const MOHId = JSON.parse(localStorage.getItem("MOHId"));
  const [midWifeList, setMidWifeList] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const { showSpinner, hideSpinner } = useOverlay();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOverlay = () => {
    setOverlay(!overlay);
  };

  const viewProfile = (doctor) => {
    dispatch(getSelectedDoctor(doctor));
    navigate("doctorProfile");
  };

  useEffect(() => {
    showSpinner();
    axios
      .get(`http://localhost:5000/moh/getDoctor/${MOHId}`)
      .then((response) => {
        console.log(response);
        setMidWifeList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        hideSpinner();
      });
  }, [overlay]);
  return (
    <>
      {overlay && <AddDoctor toggleVisibility={handleOverlay} />}
      <div className="pt-16 px-20">
        <div className="flex justify-end font-semibold pb-5">
          <button
            className=" rounded-full bg-NavyBlue text-white font-bold font-poppins p-3 hover:scale-105 "
            onClick={handleOverlay}
          >
            Register a New Doctor
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">SLMC No</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Designation</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Phone</th>
            </tr>
          </thead>
          <tbody>
            {midWifeList.map((item, index) => {
              return (
                <tr className="hover:bg-gray-200" onClick={() => (viewProfile(item))} key={index}>
                  <td className="border px-4 py-2">{item.SLMCNo}</td>
                  <td className="border px-4 py-2">{item.Name}</td>
                  <td className="border px-4 py-2">{item.Designation}</td>
                  <td className="border px-4 py-2">{item.Email}</td>
                  <td className="border px-4 py-2">{item.Contact}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Doctors;
