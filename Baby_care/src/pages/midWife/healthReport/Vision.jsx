import React, { useEffect, useState } from "react";
import EditSave from "../../../components/overlays/EditSave";
import SubmitChanges from "../../../components/overlays/SubmitChanges";
import { useOverlay } from "../../../components/context/OverlayContext";
import { useSelector, useDispatch } from "react-redux";
import { getEditMode } from "../../../actions/modules";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function Vision() {

  const {showSpinner, hideSpinner, showEditSave, hideEditSave, showSubmitOverlay, hideSubmitOverlay} = useOverlay();
  const editmode = useSelector((state) => state.modules.editMode);
  const babyID = useSelector((state) => state.baby.selectedBaby.ID);
  const [isNewData, setIsNewData] = useState(false);
  const dispatch = useDispatch();
  const[visionData, setVisionData] = useState({
    ID: babyID,
    firstWeekTowardsLight: "",
    firstWeeklookAtFace: "",
    twoMonthsSounds: "",
    twoMonthsEyes: "",
    sixMonthsLookAround: "",
    sixMonthsReachOut: "",
    sixMonthsMole: "",
    tenMonthsPickUp: "",
    twelveMonthsReachOut: "",
    twelveMonthsRecognize: "",
  });

  useEffect(() => {
    if (location.pathname.includes("parentDashboard")) {
      hideEditSave()
    } else {
      showEditSave();
    }
    showSpinner();

    axios.get(`http://localhost:5000/healthReport/getVisionData/${babyID}`)
    .then((response) => {
      setVisionData(response.data);
    })
    .catch((error) => {
      setIsNewData(true);
    })
    .finally(()=> {
      hideSpinner();
    })

    return () => {
      hideEditSave();
      dispatch(getEditMode(false));
    }
  }, []);

  const handleChange = (e) => {
    setVisionData({ ...visionData, [e.target.name]: e.target.value });
  }

  const onSave = () => {
    showSubmitOverlay();
    console.log(visionData);
  }

  const onSubmit = () => {
    showSpinner();
    if(isNewData){
      axios.post("http://localhost:5000/healthReport/addVisionData", visionData)
      .then((response) => {
        toast.success("Vision data add successfully", {
          position: "bottom-right"
        });
        console.log(response);
        setIsNewData(false);
      })
      .catch((error) => {
        toast.error("Failed to add vision data", {
          position: "bottom-right"
        });
        console.log(error);
      })
      .finally(() => {
        hideSpinner();
        hideSubmitOverlay();
      });
    }else{
    axios.put("http://localhost:5000/healthReport/updateVisionData", visionData)
    .then((response) => {
      toast.success("Vision data updated successfully", {
        position: "bottom-right"
      });
      console.log(response);
    })
    .catch((error) => {
      toast.error("Failed to update vision data", {
        position: "bottom-right"
      });
      console.log(error);
    })
    .finally(() => {
      hideSpinner();
      hideSubmitOverlay();
    });
  }
  }

  const onCancel = () =>{
    hideSubmitOverlay();
  }



  return (
    <>
    <EditSave submitFunction={onSave}/>
    <ToastContainer />
    <SubmitChanges submitFunction={onSubmit} cancelFunction={onCancel}/>
      <div className="w-full font-poppins text-Ash px-5">
        <section className=" space-y-5 pb-5">
          <div>
            <div className=" w-full bg-NavyBlue ">
              <h1 className=" text-white p-1 text-center">
                First week of birth
              </h1>
            </div>
            <div className="grid grid-cols-2 px-2">
              <div className="space-y-2 pt-3">
                <p>1. Does the baby direct its eyes towards the light ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeekTowardsLight"
                      id="yes"
                      value="yes"
                      disabled={!editmode}
                      onChange={handleChange}
                      checked={visionData.firstWeekTowardsLight === "yes"}
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeekTowardsLight"
                      id="no"
                      value="no"
                      disabled={!editmode}
                      onChange={handleChange}
                      checked={visionData.firstWeekTowardsLight === "no"}
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-3">
                <p>2. Does the baby look at your face well ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeeklookAtFace"
                      id="yes"
                      value="yes"
                      disabled={!editmode}
                      onChange={handleChange}
                      checked={visionData.firstWeeklookAtFace === "yes"}
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeeklookAtFace"
                      id="no"
                      value="no"
                      disabled={!editmode}
                      onChange={handleChange}
                      checked={visionData.firstWeeklookAtFace === "no"}
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div>
            <div className=" w-full bg-NavyBlue ">
              <h1 className=" text-white p-1 text-center">
                By 2 months
              </h1>
            </div>
            <div className="grid grid-cols-2 px-2">
              <div className="space-y-2 pt-3">
                <p>1. Does the child look at you and smile when you turn to face them ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="twoMonthsSounds"
                      id="yes"
                      value="yes"
                      disabled={!editmode}
                      onChange={handleChange}
                      checked={visionData.twoMonthsSounds === "yes"}
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="twoMonthsSounds"
                      id="no"
                      value="no"
                      disabled={!editmode}
                      onChange={handleChange}
                      checked={visionData.twoMonthsSounds === "no"}
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-3">
                <p>2. Then both eyes of the child move together ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="twoMonthsEyes"
                      id="yes"
                      value="yes"
                      disabled={!editmode}
                      onChange={handleChange}
                      checked={visionData.twoMonthsEyes === "yes"}
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="twoMonthsEyes"
                      id="no"
                      value="no"
                      disabled={!editmode}
                      onChange={handleChange}
                      checked={visionData.twoMonthsEyes === "no"}
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div>
            <div className=" w-full bg-NavyBlue ">
              <h1 className=" text-white p-1 text-center">
              By 6 months
              </h1>
            </div>
            <div className="grid grid-cols-2 px-2">
              <div className="space-y-2 pt-3">
                <p>1. Does the child look around curiously ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="sixMonthsLookAround"
                      id="yes"
                      value="yes"
                      disabled={!editmode}
                      onChange={handleChange}
                      checked={visionData.sixMonthsLookAround === "yes"}
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="sixMonthsLookAround"
                      id="no"
                      value="no"
                      disabled={!editmode}
                      onChange={handleChange}
                      checked={visionData.sixMonthsLookAround === "no"}
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-3">
                <p>2. Does the child reach out and try to grab something ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="sixMonthsReachOut"
                      id="yes"
                      value="yes"
                      disabled={!editmode}
                      onChange={handleChange}
                      checked={visionData.sixMonthsReachOut === "yes"}
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="sixMonthsReachOut"
                      id="no"
                      value="no"
                      disabled={!editmode}
                      onChange={handleChange}
                      checked={visionData.sixMonthsReachOut === "no"}
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-3">
                <p>3. Do you suspect that the baby has a mole ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="sixMonthsMole"
                      id="yes"
                      value="yes"
                      disabled={!editmode}
                      onChange={handleChange}
                      checked={visionData.sixMonthsMole === "yes"}
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="sixMonthsMole"
                      id="no"
                      value="no"
                      disabled={!editmode}
                      onChange={handleChange}
                      checked={visionData.sixMonthsMole === "no"}
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div>
            <div className=" w-full bg-NavyBlue ">
              <h1 className=" text-white p-1 text-center">
              By 10 months
              </h1>
            </div>
            <div className="grid grid-cols-1 px-2">
              <div className="space-y-2 pt-3">
                <p>1. Is the child able to pick up small objects with the help of thumb and forefinger ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="tenMonthsPickUp"
                      id="yes"
                      value="yes"
                      disabled={!editmode}
                      onChange={handleChange}
                      checked={visionData.tenMonthsPickUp === "yes"}
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="tenMonthsPickUp"
                      id="no"
                      value="no"
                      disabled={!editmode}
                      onChange={handleChange}
                      checked={visionData.tenMonthsPickUp === "no"}
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div>
            <div className=" w-full bg-NavyBlue ">
              <h1 className=" text-white p-1 text-center">
                By 12 months
              </h1>
            </div>
            <div className="grid grid-cols-2 px-2">
              <div className="space-y-2 pt-3">
                <p>1. Does your child reach out and ask for things ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="twelveMonthsReachOut"
                      id="yes"
                      value="yes"
                      disabled={!editmode}
                      onChange={handleChange}
                      checked={visionData.twelveMonthsReachOut === "yes"}
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="twelveMonthsReachOut"
                      id="no"
                      value="no"
                      disabled={!editmode}
                      onChange={handleChange}
                      checked={visionData.twelveMonthsReachOut === "no"}
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-3">
                <p>2. Does the child recognize familiar people when they see them before they talk to the child ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="twelveMonthsRecognize"
                      id="yes"
                      value="yes"
                      disabled={!editmode}
                      onChange={handleChange}
                      checked={visionData.twelveMonthsRecognize === "yes"}
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="twelveMonthsRecognize"
                      id="no"
                      value="no"
                      disabled={!editmode}
                      onChange={handleChange}
                      checked={visionData.twelveMonthsRecognize === "no"}

                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}

export default Vision;
