import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOverlay } from "../../../components/context/OverlayContext";
import { toast, ToastContainer } from "react-toastify";
import EditSave from "../../../components/overlays/EditSave";
import SubmitChanges from "../../../components/overlays/SubmitChanges";
import axios from "axios";
import { getEditMode } from "../../../actions/modules";

function Hearing() {
  const editMode = useSelector((state) => state.modules.editMode);
  const dispatch = useDispatch();
  const babyID = useSelector((state) => state.baby.selectedBaby.ID);
  const [isNewData, setIsNewData] = useState(false);
  const {showSpinner, hideSpinner, showEditSave, hideEditSave, showSubmitOverlay, hideSubmitOverlay} = useOverlay();
  const [hearingData, setHearingData] = useState({
    ID:babyID,
    blinkAtLoudNoises: "",
    twoMonthsSounds: "",
    laughALittle: "",
    eyesTurnTowardsMother: "",
    turnImmediatelyAfterTalking: "",
    listenToSounds: "",
    lookForSounds: "",
    speakToLoudTune: "",
    respondToFamiliarSounds: "",
    respondToWords: "",
  });

  const handleChange = (e) => {
    setHearingData({
      ...hearingData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    showEditSave();
    showSpinner();
    axios.get(`http://localhost:5000/healthReport/getHearingData/${babyID}`)
    .then((response) => {
      setHearingData(response.data);
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
    };
  }, []);

  const onSave = () => {
    showSubmitOverlay();
  }
  const onSubmit = () =>{
    showSpinner();
    if(isNewData){
    axios.post("http://localhost:5000/healthReport/addHearingData", hearingData)
    .then((response) => {
      toast.success("Success Notification !", {
        position: "bottom-right"
      });
      console.log(response);
      setIsNewData(false);
    })
    .catch((error) => {
      toast.error("Error Notification !", {
        position: "bottom-right"
      });
      console.log(error);
    })
    .finally(() => {
      hideSpinner();
      hideSubmitOverlay();
    })
  }else{
    axios.put("http://localhost:5000/healthReport/updateHearingData", hearingData)
    .then((response) => {
      toast.success("Success Notification !", {
        position: "bottom-right"
      });
      console.log(response);
    })
    .catch((error) => {
      toast.error("Error Notification !", {
        position: "bottom-right"
      });
      console.log(error);
    })
    .finally(() => {
      hideSpinner();
      hideSubmitOverlay();
    })
  }
  }

  const onCancel = () =>{
    hideSubmitOverlay();
  }
  return (
    <>
    <ToastContainer/>
    <EditSave submitFunction ={onSave}/>
    <SubmitChanges submitFunction={onSubmit} cancelFunction={onCancel}/>
      <div className="w-full font-poppins text-Ash px-5">
        <section className=" space-y-5 pb-5">
          <div>
            <div className=" w-full bg-NavyBlue ">
              <h1 className=" text-white p-1 text-center">
                Shortly after birth
              </h1>
            </div>
            <div className="grid grid-cols-1 px-2">
              <div className="space-y-2 pt-3">
                <p>
                  1. Does your child startle and blink at loud noises (like
                  clapping, slamming a door)? Or do widen eyes ?
                </p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="blinkAtLoudNoises"
                      id="yes"
                      value="yes"
                      checked={hearingData.blinkAtLoudNoises === "yes"}
                      disabled={!editMode}
                      onChange={handleChange}
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="blinkAtLoudNoises"
                      id="no"
                      value="no"
                      checked={hearingData.blinkAtLoudNoises === "no"}
                      disabled={!editMode}
                      onChange={handleChange}
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" w-full bg-NavyBlue ">
              <h1 className=" text-white p-1 text-center">By 2 months</h1>
            </div>
            <div className="grid grid-cols-1 px-2">
              <div className="space-y-2 pt-3">
                <p>
                  1. Do you pick up on sudden or continuous sounds (such as the
                  sound of a car) and start humming quietly to them ?
                </p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="twoMonthsSounds"
                      id="yes"
                      value="yes"
                      checked={hearingData.twoMonthsSounds === "yes"}
                      disabled={!editMode}
                      onChange={handleChange}
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="twoMonthsSounds"
                      id="no"
                      value="no"
                      checked={hearingData.twoMonthsSounds === "no"}
                      disabled={!editMode}
                      onChange={handleChange}
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" w-full bg-NavyBlue ">
              <h1 className=" text-white p-1 text-center">By 4 months</h1>
            </div>
            <div className="grid grid-cols-2 px-5">
              <div className="space-y-2 pt-3">
                <p>
                  1. Even if their mother or caregiver is not in sight, are they
                  silent when they hear their sounds? Or do you laugh a little ?
                </p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="laughALittle"
                      id="yes"
                      value="yes"
                      checked={hearingData.laughALittle === "yes"}
                      disabled={!editMode}
                      onChange={handleChange}
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="laughALittle"
                      id="no"
                      value="no"
                      checked={hearingData.laughALittle === "no"}
                      disabled={!editMode}
                      onChange={handleChange}
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-3">
                <p>
                  2. Does the head or eyes turn towards the mother or caretaker
                  when speaking from the side or behind ?
                </p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="eyesTurnTowardsMother"
                      id="yes"
                      value="yes"
                      checked={hearingData.eyesTurnTowardsMother === "yes"}
                      disabled={!editMode}
                      onChange={handleChange}
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="eyesTurnTowardsMother"
                      id="no"
                      value="no"
                      checked={hearingData.eyesTurnTowardsMother === "no"}
                      disabled={!editMode}
                      onChange={handleChange}
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" w-full bg-NavyBlue ">
              <h1 className=" text-white p-1 text-center">By 7 months</h1>
            </div>
            <div className="grid grid-cols-1 px-2">
              <div className="space-y-2 pt-3">
                <p>
                  1. Does baby turn to mother/caretaker for immediately after
                  talking ?
                </p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="turnImmediatelyAfterTalking"
                      id="yes"
                      value="yes"
                      checked={hearingData.turnImmediatelyAfterTalking === "yes"}
                      disabled={!editMode}
                      onChange={handleChange}
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="turnImmediatelyAfterTalking"
                      id="no"
                      value="no"
                      checked={hearingData.turnImmediatelyAfterTalking === "no"}
                      disabled={!editMode}
                      onChange={handleChange}
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" w-full bg-NavyBlue ">
              <h1 className=" text-white p-1 text-center">By 9 months</h1>
            </div>
            <div className="grid grid-cols-2 px-5">
              <div className="space-y-2 pt-3">
                <p>
                  1. Do you listen carefully to the familiar sounds you hear
                  every day ?
                </p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="listenToSounds"
                      id="yes"
                      value="yes"
                      checked={hearingData.listenToSounds === "yes"}
                      disabled={!editMode}
                      onChange={handleChange}
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="listenToSounds"
                      id="no"
                      value="no"
                      checked={hearingData.listenToSounds === "no"}
                      disabled={!editMode}
                      onChange={handleChange}
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-3">
                <p>2. Looking for sounds from somewhere baby can't see ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="lookForSounds"
                      id="yes"
                      value="yes"
                      checked={hearingData.lookForSounds === "yes"}
                      disabled={!editMode}
                      onChange={handleChange}
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="lookForSounds"
                      id="no"
                      value="no"
                      checked={hearingData.lookForSounds === "no"}
                      disabled={!editMode}
                      onChange={handleChange}
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-3">
                <p>3. Love it when you speak to a loud tune ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="speakToLoudTune"
                      id="yes"
                      value="yes"
                      checked={hearingData.speakToLoudTune === "yes"}
                      disabled={!editMode}
                      onChange={handleChange}
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="speakToLoudTune"
                      id="no"
                      value="no"
                      checked={hearingData.speakToLoudTune === "no"}
                      disabled={!editMode}
                      onChange={handleChange}
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" w-full bg-NavyBlue ">
              <h1 className=" text-white p-1 text-center">By 12 months</h1>
            </div>
            <div className="grid grid-cols-2 px-5">
              <div className="space-y-2 pt-3">
                <p>1. Responds to own and other familiar sounds ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="respondToFamiliarSounds"
                      id="yes"
                      value="yes"
                      checked={hearingData.respondToFamiliarSounds === "yes"}
                      disabled={!editMode}
                      onChange={handleChange}
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="respondToFamiliarSounds"
                      id="no"
                      value="no"
                      checked={hearingData.respondToFamiliarSounds === "no"}
                      disabled={!editMode}
                      onChange={handleChange}
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-3">
                <p>
                  2. Do baby respond to words like “Tata” “No” without doing the
                  corresponding action ?
                </p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="respondToWords"
                      id="yes"
                      value="yes"
                      checked={hearingData.respondToWords === "yes"}
                      disabled={!editMode}
                      onChange={handleChange}
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="respondToWords"
                      id="no"
                      value="no"
                      checked={hearingData.respondToWords === "no"}
                      disabled={!editMode}
                      onChange={handleChange}
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

export default Hearing;
