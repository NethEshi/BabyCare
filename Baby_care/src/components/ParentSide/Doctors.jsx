import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import { useOverlay } from "../context/OverlayContext";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getSelectedDoctor } from "../../actions/doctor";
import { useNavigate } from "react-router-dom";

function Doctors() {
  const { showSpinner, hideSpinner } = useOverlay();
  const MOHId = JSON.parse(localStorage.getItem("MOHId"));
  const [doctors, setDoctors] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    showSpinner();
    axios
      .get(`http://localhost:5000/moh/getDoctor/${MOHId}`)
      .then((ressponse) => {
        console.log(ressponse);
        setDoctors(ressponse.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        hideSpinner();
      });
  }, []);


  const viewProfile = (doctor) => {
    dispatch(getSelectedDoctor(doctor));
    navigate("/parentDashboard/doctorProfile");
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-2">
        {doctors.map((doctor) => (
          <button
            className="grid grid-rows-2 place-content-center bg-light-pink border border-margin-blue rounded-lg p-4 w-full shadow-md"
            key={doctor.id}
            onClick={() => viewProfile(doctor)}
          >
            <div className="text-center text-3xl font-semibold text-blueF">
              {'Dr. '+ doctor.Name}
            </div>
            <div className="text-3xl text-center font-bold text-blue-900">
              {doctor.Designation}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
