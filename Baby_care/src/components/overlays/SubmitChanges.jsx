import React from "react";
import { useOverlay } from "../context/OverlayContext";

function SubmitChanges(props) {
  const { isSubmitOverlayVisible, showSubmitOverlay, hideSubmitOverlay } =
    useOverlay();

  if (!isSubmitOverlayVisible) {
    return null;
  }

  const handleConfirm = props.submitFunction;
  const handleCancel = props.cancelFunction;

  return (
    <>
      <div
        className="text-Ash font-poppins z-50 fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
      >
        <div className="bg-white rounded-2xl w-[25%]">
          <h1 className="text-2xl text-ATblack font-semibold p-4"> Submit Changes</h1>
          <hr/>
          <div className="p-5">
          <h1 >I agree to do submit changes.</h1>
            <div className="flex justify-between px-10 pt-5">
            <button className="bg-NavyBlue border-2 w-[40%] py-1 text-white rounded-lg" onClick={handleConfirm}>Confirm</button>
            <button className="bg-white border-2 w-[40%] py-1 rounded-lg" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div> 
      </div>
    </>
  );
}

export default SubmitChanges;
