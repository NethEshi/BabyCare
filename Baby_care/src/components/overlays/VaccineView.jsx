import FeatherIcon from "feather-icons-react";
import { useOverlay } from "../context/OverlayContext";
import { useSelector } from "react-redux";
import { useState } from "react";

function VaccineView(props) {
  const { isVaccineVisible, showVaccine, hideVaccine } = useOverlay();
  const selectedVaccine = useSelector((state) => state.baby.selectedVaccine);
  const [newVaccine, setNewVaccine] = useState(selectedVaccine);

  if (!isVaccineVisible) {
    return null;
  }

  const editMode = props.editMode;
  const handleConfirm = props.submitFunction;
  const handleCancel = props.cancelFunction;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVaccine((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    handleConfirm(newVaccine);
  }

  return (
    <>
      <div className="text-Ash font-poppins z-50 fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="bg-white rounded-2xl w-[25%]">
          <div className="flex justify-between p-4">
            {!editMode && (
              <p className="text-2xl text-ATblack font-semibold">
                {selectedVaccine.name}
              </p>
            )}
            {!editMode && (
              <FeatherIcon icon="x" className="" onClick={handleCancel} />
            )}
          </div>
          <hr />
          <div className="p-5">
            <div>
              <form>
                <label className="text-Ash font-bold text-xl">Name</label>
                <input
                  type="text"
                  name="name"
                  disabled={!editMode}
                  className="w-full h-10 border-2 border-gray-300 rounded-lg p-2"
                  value={newVaccine.name}
                  onChange={handleChange}
                />
                <label className="text-Ash font-bold text-xl">Date</label>
                <input
                  type="date"
                  name="date"
                  disabled={!editMode}
                  className="w-full h-10 border-2 border-gray-300 rounded-lg p-2"
                  value={newVaccine.date}
                  onChange={handleChange}
                />
                <label className="text-Ash font-bold text-xl">Batch No</label>
                <input
                  type="text"
                  name="batchNo"
                  disabled={!editMode}
                  className="w-full h-10 border-2 border-gray-300 rounded-lg p-2"
                  value={newVaccine.batchNo}
                  onChange={handleChange}
                />
                <label className="text-Ash font-bold text-xl">
                  Adverse effects following immunization
                </label>
                <textarea
                  name="adverseEffects"
                  disabled={!editMode}
                  className="w-full h-20 border-2 border-gray-300 rounded-lg p-2"
                  value={newVaccine.adverseEffects}
                  onChange={handleChange}
                />
              </form>
            </div>
            {editMode && (
              <div className="flex justify-between px-10 pt-5">
                <button
                  className="bg-NavyBlue border-2 w-[40%] py-1 text-white rounded-lg"
                  onClick={onSubmit}
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

export default VaccineView;