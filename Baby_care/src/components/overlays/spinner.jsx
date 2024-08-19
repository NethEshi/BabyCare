
import React from "react";
import spinner from "../../assets/spinner.svg";
import { useOverlay } from "../context/OverlayContext";
function Spinner() {

    const { isSpinnerVisible } = useOverlay();

    if (!isSpinnerVisible) { //comment this if block to see the spinner
        return null;
    }
  return (
    <>
        <div className = "z-50 fixed inset-0 bg-blue-500 bg-opacity-30 flex items-center justify-center">
            <img src={spinner}/>
        </div>
    </>
  );
}

export default Spinner;