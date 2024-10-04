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
  const [selectedClinic, setSelectedClinic] = useState({
    Date: "",
    SpecialNotes: "",
});
  const [selectedClinicIndex, setSelectedClinicIndex] = useState(null);
  const babyID = useSelector((state) => state.baby.selectedBaby.ID);

  useEffect(()=> {
    showSpinner();
    axios.get(`http://localhost:5000/baby/getClinic/${babyID}`)
    .then((response) => {
      console.log(response.data);
      setClinics(response.data.Clinics);
    }).catch((error) => {
      console.log(error);
  })
  .finally(() => {
    hideSpinner();
  });
  },[]);

  const onSubmit = (data) => {
    showSpinner();
    let payload = {
      ...data,
      index: selectedClinicIndex,
    };
    if (IsNewData){
      axios.post(`http://localhost:5000/baby/addClinic/${babyID}`, data)
      .then((response) => {
        console.log(response);
        setClinics(response.data.clinic.Clinics);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        hideClinicSchedule();
        setIsEditMode(false);
        setIsNewData(false);
        hideSpinner();
      });
    } else {
      axios.put(`http://localhost:5000/baby/updateClinic/${babyID}`, payload)
      .then((response) => {
        console.log(response);
        setClinics(response.data.clinic.Clinics);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        hideClinicSchedule();
        setIsEditMode(false);
        setIsNewData(false);
        hideSpinner();
      });
    }

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

  const onEdit = (clinic, index) => {
    setSelectedClinic(clinic);
    setSelectedClinicIndex(index);
    setIsEditMode(true);
    setIsNewData(false);
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
              <tr className="bg-gray-100">
                <th className="w-[20%] border-2 p-2">Date</th>
                <th>Special Notes</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {clinics.map((clinic, index) => (
                <tr key={index} className="border-2 hover:bg-gray-200">
                  <td className="border-2 p-2">{clinic.Date}</td>
                  <td className="p-2 flex justify-between items-center">
                    <div className="flex-1 text-center">
                      <p>{clinic.SpecialNotes}</p>
                    </div>
                    <div className=" space-x-5 pr-5">
                      <button className="" onClick={() => onView(clinic, index)}><FeatherIcon icon="eye" /></button>
                      <button className="" onClick={() => onEdit(clinic, index)}><FeatherIcon icon="edit-3" /></button>
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
