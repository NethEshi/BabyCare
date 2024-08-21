import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import ClinicSchedule from "../../components/overlays/ClinicSchedule";
import { useOverlay } from "../../components/context/OverlayContext";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function Clinics() {
  const {
    showVaccine,
    hideVaccine,
    showSpinner,
    hideSpinner,
    showEditSave,
    hideEditSave,
    showClinicSchedule,
    hideClinicSchedule,
  } = useOverlay();
  const [clinics, setClinics] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [IsNewData, setIsNewData] = useState(false);
  const [IsNewClinic, setIsNewClinic] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState(null);
  const babyID = useSelector((state) => state.baby.selectedBaby.ID);

  useEffect(()=> {
    axios.get(`http://localhost:5000/baby/getClinic/${babyID}`)
    .then((response) => {
      console.log(response.data);
      setClinics(response.data.Clinics);
    }).catch((error) => {
      console.log(error);
      if(error.response.status === 404) {
      setIsNewClinic(true);
    }
  });
  },[]);

  const onSubmit = (data) => {
      axios.post(`http://localhost:5000/baby/addClinic/${babyID}`, data)
      .then((response) => {
        console.log(response);
        setClinics([...clinics, response.data.clinic]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        hideClinicSchedule();
        setIsEditMode(false);
        setIsNewData(false);
      });

    console.log(data);
  };

  const onCancel = () => {
    hideClinicSchedule();
    setIsEditMode(false);
    setIsNewData(false);
  };

  const onView = (clinic) => {
    setSelectedClinic(clinic);
    showClinicSchedule();
  }

  const onEdit = () => {
    setIsEditMode(true);
    showClinicSchedule();
  }

  const onNewData = () => {
    setSelectedClinic(null);
    setIsNewData(true);
    showClinicSchedule();
    console.log(clinics)
  }

  return (<>

    <ClinicSchedule submitFunction = {onSubmit} cancelFunction = {onCancel} editMode = {isEditMode} newData = {IsNewData} clinicData = {selectedClinic}/>
    <div className="w-full text-Ash font-poppins">
    <div>
          <div className="pb-5">
            <button className="bg-NavyBlue text-white p-2 rounded-xl" onClick={onNewData}>
              Schedule a new date
            </button>
          </div>
          <table className="border-2 w-full">
            <thead>
              <tr>
                <th className="w-[20%] border-2 p-2">Date</th>
                <th>Special Notes</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {clinics.map((clinic, index) => (
                <tr key={index} className="border-2 hover:bg-gray-200">
                  <td className="border-2 p-2">{clinic.Date}</td>
                  <td className="flex justify-between items-center">
                    <div className="flex-1 text-center">
                      <p>{clinic.SpecialNotes}</p>
                    </div>
                    <div className="space-x-5 pr-5">
                      <button className="" onClick={() => onView(clinic)}><FeatherIcon icon="eye" /></button>
                      {/* <button className="" onClick={() => onEdit()}><FeatherIcon icon="edit" /></button> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Clinics;
