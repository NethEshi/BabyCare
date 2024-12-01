import React, { useEffect, useState } from "react";
import AddMidWife from "./overlays/addMidWife";
import axios from "axios";
import { useOverlay } from "./context/OverlayContext";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedMidwife } from "../actions/midwife";

function MidWifes() {
  const MOHId = JSON.parse(localStorage.getItem("MOHId"));
  const [midWifeList, setMidWifeList] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const { showSpinner, hideSpinner } = useOverlay();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOverlay = () => {
    setOverlay(!overlay);
  };

  const viewProfile = (midwife) => {
    dispatch(getSelectedMidwife(midwife));
    navigate("/Dashboard/midwifeProfile");
  };

  useEffect(() => {
    showSpinner();
    axios
      .get(`http://localhost:5000/moh/getMidWife/${MOHId}`)
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
      {overlay && <AddMidWife toggleVisibility={handleOverlay} />}
      <div className="pt-16 px-20">
        <div className="flex justify-end font-semibold pb-5">
          <button
            className=" rounded-full bg-NavyBlue text-white font-bold font-poppins p-3 hover:scale-105 "
            onClick={handleOverlay}
          >
            Register a New Midwife
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Register ID</th>
              <th className="border px-4 py-2 text-left">License No</th>
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
                  <td className="border px-4 py-2">{item.reg_ID}</td>
                  <td className="border px-4 py-2">{item.License_NO}</td>
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

export default MidWifes;
