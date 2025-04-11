import { useState, useEffect } from "react";
import axios from "axios";
import { useOverlay } from "./context/OverlayContext";
import { toast, ToastContainer } from "react-toastify";

function Appointment() {
  const MOHId = JSON.parse(localStorage.getItem("MOHId"));
  const [midWifeList, setMidWifeList] = useState([]);
  const { showSpinner, hideSpinner } = useOverlay();
  const [sessionList, setSessionList] = useState([]);
  const [selectedSession, setSelectedSession] = useState([]);

  useEffect(() => {
    showSpinner();
    axios
      .get("http://localhost:5000/moh/getDoctor/" + MOHId, {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      })
      .then((response) => {
        console.log(response);
        setMidWifeList(response.data);
        selectedSession([]);
        setSessionList([]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        hideSpinner();
      });
  }, []);

  const getSessionList = (doctorId) => {
    showSpinner();
    axios
      .get(`http://localhost:5000/moh/getSession/${MOHId}/${doctorId}`, {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      })
      .then((response) => {
        console.log(response);
        setSessionList(response.data);
        setSelectedSession([]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        hideSpinner();
      });
  };

  const calculateAgeInMonths = (dob) => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const yearsDifference = currentDate.getFullYear() - birthDate.getFullYear();
    const monthsDifference = currentDate.getMonth() - birthDate.getMonth();
    return yearsDifference * 12 + monthsDifference;
  };

  const getAppointment = (sessionId) => {
    showSpinner();
    axios.get(`http://localhost:5000/moh/getAppointmentBySessionId/${sessionId}`)
    .then((response) => {
      console.log(response);
      setSelectedSession(response.data.appointments);
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "bottom-right",
      });
    })
    .finally(() => {
      hideSpinner();
    } );
  }
  return (
    <div>
      <ToastContainer/>
      <div className="flex flex-col w-[20%] p-6">
        <label
          className="text-neutral-700 text-lg font-medium font-poppins mb-2"
          htmlFor="Gender"
        >
          {" "}
          Select the Doctor{" "}
        </label>

        <select
          className="px-3 bg-neutral-100 border border-zinc-300 rounded-lg py-2"
          id="Gender"
          name="Gender"
          defaultValue=""
          onChange={(e) => getSessionList(e.target.value)}
        >
          <option value="" disabled>
            {" "}
            Select the doctor{" "}
          </option>
          {midWifeList.map((item, index) => {
            return (
              <option value={item.SLMCNo} key={index}>
                {item.Name}
              </option>
            );
          })}
        </select>
      </div>

      {selectedSession.length == 0 && <div className="p-4">
      <div className="grid grid-cols-3 p-2 gap-5">
            {sessionList.map((session, index) => {
                return (
                    <div key={index} className="p-5 border-margin border rounded-lg text-center font-semibold" onClick={()=> getAppointment(session._id)}>
                        <p className="text-4xl">Session {index + 1}</p>
                        <p className="text-3xl">{session.Date}</p>
                        <p className="text-3xl">{session.StartTime} - {session.EndTime}</p>
                    </div>
                );
            })}
        </div>

      </div>}

      {selectedSession.length != 0 && 
        <div>
          <div className="p-6 w-full overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 font-medium">
                    Patient Number
                  </th>
                  <th className="border border-gray-300 px-4 py-2 font-medium">
                    Patient Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2 font-medium">
                    Patient Age (months)
                  </th>
                  <th className="border border-gray-300 px-4 py-2 font-medium">
                    Parent Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2 font-medium">
                    Parent Number
                  </th>
                  <th className="border border-gray-300 px-4 py-2 font-medium">
                    Parent Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedSession.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">{item.PatientNumber}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.baby.Name}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">{calculateAgeInMonths(item.baby.DOB)}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.baby.ParentName}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.baby.ParentNumber}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.baby.ParentEmail}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      }
    </div>
  );
}

export default Appointment;
