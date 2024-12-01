import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import EditSave from "./overlays/EditSave";
import SubmitChanges from "./overlays/SubmitChanges";
import { useOverlay } from "./context/OverlayContext";
import { useDispatch } from "react-redux";
import { getEditMode } from "../actions/modules";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { getSelectedDoctor } from "../actions/doctor";
import AddSession from "./overlays/addSession";

function DoctorProfile() {
  const selectedDoctor = useSelector((state) => state.doctor.selectedDoctor);
  const EditMode = useSelector((state) => state.modules.editMode);
  console.log(selectedDoctor);
  const dispatch = useDispatch();
  const [overlay, setOverlay] = useState(false)
  const [formData, setFormData] = useState({
    SLMCNo: "",
    Name: "",
    Designation: "",
    Email: "",
    Contact: "",
    Address: "",
  });

  const handleOverlay = () => {
    setOverlay(!overlay)
  }    

  const {
    showSpinner,
    hideSpinner,
    showSubmitOverlay,
    hideSubmitOverlay,
    showEditSave,
    hideEditSave,
  } = useOverlay();

  useEffect(() => {
    showEditSave();
    if (selectedDoctor) {
      setFormData(selectedDoctor);
    }

    return () => {
      hideEditSave();
      dispatch(getEditMode(false));
    };
  }, [selectedDoctor]);

  const onsubmit = () => {
    showSpinner();
    console.log(formData);
    axios
      .put("http://localhost:5000/moh/updateDoctor", formData)
      .then((response) => {
        toast.success(response.data.message, {
          position: "bottom-right",
        });
        dispatch(getSelectedDoctor(response.data.doctor));
        console.log(response);
      })
      .catch((error) => {
        toast.error(error.response.data.message, {
          position: "bottom-right",
        });
        console.log(error);
      })
      .finally(() => {
        hideSpinner();
        hideSubmitOverlay();
      });
  };

  const onSave = () => {
    showSubmitOverlay();
  };
  const onCancel = () => {
    hideSubmitOverlay();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  return (
    <>
      <EditSave submitFunction={onSave} />
      <SubmitChanges submitFunction={onsubmit} cancelFunction={onCancel} />
      <ToastContainer />
      {overlay && <AddSession toggleVisibility={handleOverlay} />}
      <div className="p-6 text-Ash h-full">
      <div className="flex justify-end font-semibold pb-5">
          <button
            className=" rounded-full bg-NavyBlue text-white font-bold font-poppins p-3 hover:scale-105 "
            onClick={handleOverlay}
          >
            Create Session
          </button>
        </div>
        <div className="flex items-center p-2 justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {selectedDoctor.Name}
          </h1>
        </div>

        {/* 1 */}
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
              value={formData.SLMCNo}
              onChange={handleChange}
              disabled
            />
          </div>
          <div className="relative w-1/2">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="Address"
              name="Address"
              className="block w-full rounded-lg border border-margin bg-white p-3 text-gray-800 placeholder-gray-400 focus:border-NavyBlue focus:outline-none"
              placeholder="Address"
              value={formData.Address}
              onChange={handleChange}
              disabled={!EditMode}
            />
          </div>
        </div>

        {/* 2 */}
        <div className="flex space-x-4 p-2">
          <div className="relative w-1/2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              className="block w-full rounded-lg border border-margin bg-white p-3 text-gray-800 placeholder-gray-400 focus:border-NavyBlue focus:outline-none"
              placeholder="Name"
              value={formData.Name}
              onChange={handleChange}
              disabled={!EditMode}
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
              onChange={handleChange}
              value={formData.Designation}
              disabled={!EditMode}
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

        {/* 4 */}
        <div className="flex space-x-4 p-2">
          <div className="relative w-1/2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              className="block w-full rounded-lg border border-margin bg-white p-3 text-gray-800 placeholder-gray-400 focus:border-NavyBlue focus:outline-none"
              placeholder="Email"
              value={formData.Email}
              onChange={handleChange}
              disabled={!EditMode}
            />
          </div>

          <div className="relative w-1/2">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="Contact"
              className="block w-full rounded-lg border border-margin bg-white p-3 text-gray-800 placeholder-gray-400 focus:border-NavyBlue focus:outline-none"
              placeholder="Phone Number"
              value={formData.Contact}
              onChange={handleChange}
              disabled={!EditMode}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorProfile;
