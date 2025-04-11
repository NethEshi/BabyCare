import React, { useState, useEffect } from "react";
import AddLocation from "./overlays/addLocation";
import axios from "axios";
import { useOverlay } from "./context/OverlayContext";
import { ToastContainer } from "react-toastify";

function Locations() {

    const MOHId = JSON.parse(localStorage.getItem("MOHId"));
    const [locationList, setLocationList] = useState([]);
    const [overlay, setOverlay] = useState(false);
    const { showSpinner, hideSpinner } = useOverlay();
    const [midWifeList, setMidWifeList] = useState([]);
  
    const handleOverlay = () => {
      setOverlay(!overlay);
    };
  
    useEffect(() => {
      showSpinner();
      axios
        .get(`http://localhost:5000/moh/getLocation/${MOHId}`)
        .then((response) => {
          console.log(response);
          setLocationList(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          hideSpinner();
        });
    }, [overlay]);

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
    <ToastContainer/>
      {overlay && <AddLocation toggleVisibility={handleOverlay} />}
      <div className="pt-16 px-20">
        <div className="flex justify-end font-semibold pb-5">
          <button
            className=" rounded-full bg-NavyBlue text-white font-bold font-poppins p-3 hover:scale-105 "
            onClick={handleOverlay}
          >
            Add a New Location
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Location ID</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Midwife</th>
              <th className="border px-4 py-2 text-left">Phone</th>
            </tr>
          </thead>
          <tbody>
            {locationList.map((item, index) => {
              return (
                <tr className="hover:bg-gray-200" onClick={""} key={index}>
                  <td className="border px-4 py-2">{item._id}</td>
                  <td className="border px-4 py-2">{item.Name}</td>
                  <td className="border px-4 py-2">{midWifeList.find(midwife => midwife._id === item.MidwifeId)?.Name || "N/A"}</td>
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

export default Locations;