import FeatherIcon from "feather-icons-react";
import { useOverlay } from "../context/OverlayContext";
import { useState, useEffect } from "react";

function ClinicSchedule(props) {
  const { isClinicScheduleVisible, hideClinicSchedule } = useOverlay();
  const [newClinic, setNewClinic] = useState({
    Date: "",
    SpecialNotes: "",
  });

  useEffect(() => {
    if (props.clinicData && !props.newData) {
      setNewClinic({
        Date: props.clinicData.Date || "",
        SpecialNotes: props.clinicData.SpecialNotes || "",
      });
    } else {
      setNewClinic({
        Date: "",
        SpecialNotes: "",
      });
    }
  }, [props.clinicData]);

  if (!isClinicScheduleVisible) {
    return null;
  }
  const newAdd = props.newData;
  const editMode = props.editMode;
  const handleConfirm = props.submitFunction;
  const handleCancel = props.cancelFunction;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewClinic((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    handleConfirm(newClinic);
  };


  return (
    <>
      <div className="text-Ash font-poppins z-50 fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="bg-white rounded-2xl w-[25%]">
          <div className=" flex justify-between p-4">
              <p className="text-2xl text-ATblack font-semibold">
                Clinic Details
              </p>
            {(
              <FeatherIcon icon="x" className="" onClick={handleCancel} />
            )}
          </div>
          <hr />
          <div className="p-5">
            {
              <div>
                <div className="space-y-3">
                  <div className="space-y-2">
                  <label className="text-Ash font-bold text-xl">Date</label>
                  <input
                    type="date"
                    disabled={!editMode && !newAdd}
                    className="w-full h-10 border-2 border-gray-300 rounded-lg p-2"
                    value={newClinic.Date}
                    name="Date"
                    id="Date"
                    onChange={handleChange}
                  />
                  </div>
                  <div className="space-y-2">
                  <label className="text-Ash font-bold text-xl">
                    Special Notes
                  </label>
                  <textarea
                    type="text"
                    disabled={!editMode && !newAdd}
                    className="w-full h-20 border-2 border-gray-300 rounded-lg p-2"
                    value={newClinic.SpecialNotes}
                    name="SpecialNotes"
                    id="SpecialNotes"
                    onChange={handleChange}
                  />
                  </div>
                </div>
              </div>
            }
            {(editMode || newAdd) && (
              <div className="flex justify-between px-10 pt-5">
                <button
                  className="bg-NavyBlue border-2 w-[40%] py-1 text-white rounded-lg"
                  onClick={handleSubmit}
                >
                  Confirm
                </button>
                <button
                  className="bg-white border-2 w-[40%] py-1 rounded-lg"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ClinicSchedule;
