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

function MidwifeProfile() {
  const selectedMidwife = useSelector((state) => state.midwife.selectedMidwife);
  const EditMode = useSelector((state) => state.modules.editMode);
  console.log(selectedMidwife);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    Name: "",
    reg_ID: "",
    License_NO: "",
    Designation: "",
    Email: "",
    Contact: "",
    Address: "",
    District: "",
  });

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
    setFormData(selectedMidwife);

    return () => {
      hideEditSave();
      dispatch(getEditMode(false));
    };
  }, [selectedMidwife]);

  const onsubmit = () => {
    showSpinner();
    console.log(formData);
    axios
      .put("http://localhost:5000/moh/updateMidWife", formData)
      .then((response) => {
        toast.success(response.data.message, {
          position: "bottom-right",
        });
        dispatch(getSelectedBaby(response.data.baby));
        console.log(response);
      })
      .catch((error) => {
        toast.error(error.response.data.message, {
          position: "bottom-right",
        });
        console.log(error)
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
          <EditSave submitFunction={onSave}/>
          <SubmitChanges submitFunction={onsubmit} cancelFunction={onCancel}/>
          <ToastContainer/>
      <div className="p-6 text-Ash h-full">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {selectedMidwife.Name}
          </h1>
        </div>

        {/* 1 */}
        <div className="flex space-x-4 p-2">
          <div className="relative w-1/2">
            <label
              htmlFor="register-id"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Register ID
            </label>
            <input
              type="text"
              id="reg_ID"
              name="reg_ID"
              className="block w-full rounded-lg border border-margin bg-white p-3 text-gray-800 placeholder-gray-400 focus:border-NavyBlue focus:outline-none"
              placeholder="Register ID"
              value={formData.reg_ID}
              onChange={handleChange}
              disabled
            />
          </div>

          <div className="relative w-1/2">
            <label
              htmlFor="license-no"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              License No
            </label>
            <input
              type="text"
              id="License_NO"
              name="License_NO"
              className="block w-full rounded-lg border border-margin bg-white p-3 text-gray-800 placeholder-gray-400 focus:border-NavyBlue focus:outline-none"
              placeholder="License No"
              value={formData.License_NO}
              onChange={handleChange}
              disabled
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
                value={formData.Designation}  disabled={!EditMode}
                >
                  <option value="" disabled>
                    Select Designation
                  </option>
                  <option value={"super visionary public health midwife"}>super visionary public health midwife</option>
                  <option value={"public health midwife"}>public health midwife</option>
                  <option value={"special grade midwife"}>special grade midwife </option>
                </select>
          </div>
        </div>


{/* 3 */}
      <div className="flex space-x-4 p-2">
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

        <div className="relative w-1/2">
          <label
            htmlFor="District"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            District
          </label>
          <input
            type="text"
            id="District"
            name="District"
            className="block w-full rounded-lg border border-margin bg-white p-3 text-gray-800 placeholder-gray-400 focus:border-NavyBlue focus:outline-none"
            placeholder="District"
            value={formData.District}
            onChange={handleChange}
            disabled={!EditMode}

          />
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

export default MidwifeProfile;
