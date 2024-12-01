import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useOverlay } from "../../components/context/OverlayContext";
import { toast, ToastContainer } from "react-toastify";
import EditSave from "../../components/overlays/EditSave";
import SubmitChanges from "../../components/overlays/SubmitChanges";
import { getEditMode } from "../../actions/modules";
import { getSelectedBaby } from "../../actions/baby";

function Profile() {
  const selectedBaby = useSelector((state) => state.baby.selectedBaby);
  const EditMode = useSelector((state) => state.modules.editMode);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    ID: "",
    Name: "",
    DOB: "",
    BirthWeight: "",
    BirthHeadCircumference: "",
    BirthHeight: "",
    ParentName: "",
    ParentAge: "",
    ParentAddress: "",
    ParentEmail: "",
    MidWife: "",
    MOHSection: "",
    FMOHSection: "",
    DateOfSettlement: "",
    HealthCondition: "",
    VitaminK: "",
    Posture: "",
    Relation: "",
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
    setFormData(selectedBaby);
    if (location.pathname.includes("parentDashboard")) {
      hideEditSave()
    }
    return () => {
      hideEditSave();
      dispatch(getEditMode(false));
    };
  }, [selectedBaby]);

  const onsubmit = () => {
    showSpinner();
    console.log(formData);
    axios
      .put("http://localhost:5000/baby/updateBaby", formData)
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
    <div className="">
      <ToastContainer/>
      {<EditSave submitFunction={onSave}/>}
      <SubmitChanges submitFunction={onsubmit} cancelFunction={onCancel}/>
      <div className="relative w-full">
        <div className="grid grid-cols-2 px-5 font-poppin space-x-5 rounded-lg">
          <div className="bg-light-pink p-5 ">
            <div className="bg-white rounded-xl flex-row p-2">
              <div className="text-lg font-semibold">Birthday</div>
              <div>
                <input
                  className="w-full"
                  type="date"
                  name="DOB"
                  value={formData.DOB}
                  onChange={handleChange}
                  disabled={!EditMode}
                />
              </div>
            </div>
            <br />
            <div className="bg-white rounded-xl flex-row p-2">
              <div className="text-lg font-semibold">Birth Weight (g)</div>
              <div>
                <input
                  className="w-full"
                  type="text"
                  name="BirthWeight"
                  placeholder={formData.BirthWeight ? formData.BirthWeight : 0}
                  value={formData.BirthWeight}
                  onChange={handleChange}
                  disabled={!EditMode}
                />
              </div>
            </div>
            <br />
            <div className="bg-white rounded-xl flex-row p-2">
              <div className="text-lg font-semibold">
                Head Circumference at Birth (cm)
              </div>
              <div>
                <input
                  className="w-full"
                  type="text"
                  name="BirthHeadCircumference"
                  placeholder={
                    formData.BirthHeadCircumference
                      ? formData.BirthHeadCircumference
                      : 0
                  }
                  value={formData.BirthHeadCircumference}
                  onChange={handleChange}
                  disabled={!EditMode}
                />
              </div>
            </div>
            <br />
            <div className="bg-white rounded-xl flex-row p-2">
              <div className="text-lg font-semibold">
                Baby’s Length at Birth (cm)
              </div>
              <div>
                <input
                  className="w-full"
                  type="text"
                  name="BirthHeight"
                  placeholder={formData.BirthHeight ? formData.BirthHeight : 0}
                  value={formData.BirthHeight}
                  onChange={handleChange}
                  disabled={!EditMode}
                />
              </div>
            </div>
            <br />
            <div className="bg-white rounded-xl flex-row p-2">
              <div className="text-lg font-semibold">Name of mother</div>
              <div>
                <input
                  className="w-full"
                  type="text"
                  name="ParentName"
                  value={formData.ParentName}
                  onChange={handleChange}
                  disabled={!EditMode}
                />
              </div>
            </div>
            <br />
            <div className="bg-white rounded-xl flex-row p-2">
              <div className="text-lg font-semibold">Age</div>
              <div>
                <input
                  className="w-full"
                  type="text"
                  name="ParentAge"
                  placeholder={formData.ParentAge ? formData.ParentAge : 0}
                  value={formData.ParentAge}
                  onChange={handleChange}
                  disabled={!EditMode}
                />
              </div>
            </div>
            <br />
            <div className="bg-white rounded-xl flex-row p-2">
              <div className="text-lg font-semibold">Address</div>
              <div>
                <input
                  className="w-full"
                  type="text"
                  name="ParentAddress"
                  placeholder={
                    formData.ParentAddress
                      ? formData.ParentAddress
                      : "Enter Address"
                  }
                  value={formData.ParentAddress}
                  onChange={handleChange}
                  disabled={!EditMode}
                />
              </div>
            </div>
            <br />
            <div className="bg-white rounded-xl flex-row p-2">
              <div className="text-lg font-semibold">Email Address</div>
              <div>
                <input
                  className="w-full"
                  type="text"
                  name="ParentEmail"
                  placeholder={
                    formData.ParentEmail ? formData.ParentEmail : "Enter Email"
                  }
                  value={formData.ParentEmail}
                  onChange={handleChange}
                  disabled={!EditMode}
                />
              </div>
            </div>
            <br />
            <div className="bg-white rounded-xl flex-row p-2">
              <div className="text-lg font-semibold">Name of the MidWife</div>
              <div>
                <input
                  type="text"
                  className="w-full"
                  disabled={!EditMode}
                  name="MidWife"
                  placeholder={
                    formData.MidWife ? formData.MidWife : "Enter Name"
                  }
                  value={formData.MidWife}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="bg-light-pink p-5">
              <div className="bg-white rounded-xl flex-row p-2">
                <div className="text-lg font-semibold">
                  Health Medical Officer Section
                </div>
                <div>
                  <input
                    className="w-full"
                    type="text"
                    name="MOHSection"
                    placeholder={
                      formData.MOHSection
                        ? formData.MOHSection
                        : "Enter Section"
                    }
                    value={formData.MOHSection}
                    onChange={handleChange}
                    disabled={!EditMode}
                  />
                </div>
              </div>
              <br />
              <div className="bg-white rounded-xl flex-row p-2">
                <div className="text-lg font-semibold">
                  Family Health Medical Officer Section
                </div>
                <div>
                  <input
                    className="w-full"
                    type="text"
                    name="FMOHSection"
                    placeholder={
                      formData.FMOHSection
                        ? formData.FMOHSection
                        : "Enter Section"
                    }
                    value={formData.FMOHSection}
                    onChange={handleChange}
                    disabled={!EditMode}
                  />
                </div>
              </div>
              <br />
              <div className="bg-white rounded-xl flex-row p-2">
                <div className="text-lg font-semibold">Date of Settlement</div>
                <div>
                  <input
                    className="w-full"
                    type="date"
                    name="DateOfSettlement"
                    value={formData.DateOfSettlement}
                    onChange={handleChange}
                    disabled={!EditMode}
                  />
                </div>
              </div>
              <br />
              <div className="bg-white rounded-xl flex-row p-2">
                <div className="text-lg font-semibold">Registered ID</div>
                <div>
                  <input
                    type="text"
                    name="ID"
                    value={formData.ID}
                    onChange={handleChange}
                    disabled={!EditMode}
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="bg-light-pink p-5 flex align-middle justify-between">
              <div className="text-lg font-semibold">Health Condition</div>
              <div className=" space-x-5">
                <label htmlFor="Normal">Normal</label>
                <input
                  type="radio"
                  id="Normal"
                  name="HealthCondition"
                  value="Normal"
                  checked={formData.HealthCondition === "Normal"}
                  onChange={handleChange}
                  disabled={!EditMode}
                />
              </div>
              <div className=" space-x-5">
                <label htmlFor="Need Special Attention">
                  Need Special Attention
                </label>
                <input
                  type="radio"
                  id="Need Special Attention"
                  name="HealthCondition"
                  value="Need Special Attention"
                  checked={
                    formData.HealthCondition === "Need Special Attention"
                  }
                  onChange={handleChange}
                  disabled
                />
              </div>
              <br />
            </div>
            <br />
            <div className="bg-light-pink p-5 flex align-middle justify-between">
              <div className="text-lg font-semibold">Vitamin K</div>
              <div className=" space-x-5">
                <label htmlFor="Given">Given</label>
                <input
                  type="radio"
                  id="Given"
                  name="VitaminK"
                  value="Given"
                  checked={formData.VitaminK === "Given"}
                  onChange={handleChange}
                  disabled={!EditMode}
                />
              </div>
              <div className=" space-x-5">
                <label htmlFor="Need Special Attention">Not Given</label>
                <input
                  type="radio"
                  id="Not Given"
                  name="VitaminK"
                  value="Not Given"
                  checked={formData.VitaminK === "Not Given"}
                  onChange={handleChange}
                  disabled={!EditMode}
                />
              </div>
              <br />
            </div>
            <p className="p-5 font-semibold text-3xl">Breast milk Feeding</p>
            <div className="bg-light-pink p-5 flex align-middle justify-between">
              <div className="text-lg font-semibold">Posture</div>
              <div className=" space-x-5">
                <label htmlFor="Normal">Correct</label>
                <input
                  type="radio"
                  id="Correct"
                  name="Posture"
                  value="Correct"
                  checked={formData.Posture === "Correct"}
                  onChange={handleChange}
                  disabled={!EditMode}
                />
              </div>
              <div className=" space-x-5">
                <label htmlFor="Need Special Attention">Incorrect</label>
                <input
                  type="radio"
                  id="Incorrect"
                  name="Posture"
                  value="Incorrect"
                  checked={formData.Posture === "Incorrect"}
                  onChange={handleChange}
                  disabled={!EditMode}
                />
              </div>
              <br />
            </div>
            <br />
            <div className="bg-light-pink p-5 flex align-middle justify-between">
              <div className="text-lg font-semibold">Relation</div>
              <div className=" space-x-5">
                <label htmlFor="Normal">Correct</label>
                <input
                  type="radio"
                  id="Correct"
                  name="Relation"
                  value="Correct"
                  checked={formData.Relation === "Correct"}
                  onChange={handleChange}
                  disabled={!EditMode}
                />
              </div>
              <div className=" space-x-5">
                <label htmlFor="Need Special Attention">Incorrect</label>
                <input
                  type="radio"
                  id="Incorrect"
                  name="Relation"
                  value="Incorrect"
                  checked={formData.Relation === "Incorrect"}
                  onChange={handleChange}
                  disabled={!EditMode}
                />
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
