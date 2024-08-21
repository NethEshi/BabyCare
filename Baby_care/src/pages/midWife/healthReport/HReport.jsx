import React, { useEffect } from "react";
import { useState } from "react";
import SubmitChanges from "../../../components/overlays/SubmitChanges";
import { useDispatch, useSelector } from "react-redux";
import { getEditMode, getSubmit } from "../../../actions/modules";
import { useOverlay } from "../../../components/context/OverlayContext";
import EditSave from "../../../components/overlays/EditSave";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function HReport() {
  const editMode = useSelector((state) => state.modules.editMode);
  const babyID = useSelector((state) => state.baby.selectedBaby.ID);
  const [isNewData, setIsNewData] = useState(false);
  const dispatch = useDispatch();
  const { showSubmitOverlay, hideSubmitOverlay, showSpinner, hideSpinner, showEditSave, hideEditSave } = useOverlay();
  const [tableData, setTableData] = useState({
    ID:babyID,
    days10in01: null,
    days10in02: null,
    days11to28: null,
    days42: null,
    skinColor1: null,
    skinColor2: null,
    skinColor3: null,
    skinColor4: null,
    eyeState1: null,
    eyeState2: null,
    eyeState3: null,
    eyeState4: null,
    umbelical1: null,
    umbelical2: null,
    umbelical3: null,
    umbelical4: null,
    onlyBreastFeeding1: null,
    onlyBreastFeeding2: null,
    onlyBreastFeeding3: null,
    onlyBreastFeeding4: null,
    breastFeedingPosture1: null,
    breastFeedingPosture2: null,
    breastFeedingPosture3: null,
    breastFeedingPosture4: null,
    breastFeedingRelation1: null,
    breastFeedingRelation2: null,
    breastFeedingRelation3: null,
    breastFeedingRelation4: null,
    other1: null,
    other2: null,
    other3: null,
    other4: null,
  });

  useEffect(() => {
    showSpinner();
    axios.get(`http://localhost:5000/healthReport/getHealthReport/${babyID}`)
    .then((response) => {
      console.log(response.data);
      setTableData(response.data);
    })
    .catch((error) => {
      setIsNewData(true);
      console.log(error);
    })
    .finally(() => {
      hideSpinner();
    });
    showEditSave();

    return () => {
      hideEditSave();
      dispatch(getEditMode(false));
    }
  }, []);


  const onSave = () => {
    showSubmitOverlay();
    console.log("Toggle Button");
  };

  const onCancel = () => {
    hideSubmitOverlay();
    console.log("cancel button");
  };

  const onSubmit = () => {
    showSpinner();
    if (isNewData) {
      axios.post("http://localhost:5000/healthReport/addHealthReport", tableData)
      .then((response) => {
      toast.success("Success Notification !", {
        position: "bottom-right"
      });
        console.log(response.data);
        setIsNewData(false);
      })
      .catch((error) => {
        toast.error(error.response.data.message, {
          position: "bottom-right"
        });
        console.log(error);
      })
      .finally(() => {
        hideSubmitOverlay();
        hideSpinner();
      });

  }else{
    axios.put("http://localhost:5000/healthReport/updateHealthReport", tableData)
    .then((response) => {
    toast.success("Success Notification !", {
      position: "bottom-right"
    });
      console.log(response.data);
    })
    .catch((error) => {
      toast.error(error.response.data.message, {
        position: "bottom-right"
      });
      console.log(error);
    })
    .finally(() => {
      hideSubmitOverlay();
      hideSpinner();
    });
  }

  };

  const handleChange = (e) => {
    setTableData({ ...tableData, [e.target.name]: e.target.value });
    console.log(tableData);
  };
  return (
    <>
    <ToastContainer/>
      <EditSave submitFunction={onSave}/>
      <div className=" absolute z-50">
        <SubmitChanges
          submitFunction={onSubmit}
          cancelFunction={onCancel}
        />
      </div>
      <div className="font-poppins relative text-Ash px-5 ">
        <table className=" w-[100%] text-center border-2 ">
          <thead className="bg-wt text-black ">
            <tr className="">
              <th rowSpan={2} colSpan={2} className="w-[20%]"></th>
              <th
                colSpan={2}
                className="w-[26.6%] bg-NavyBlue text-white p-2 border-2"
              >
                First 10 days at birth
              </th>
              <th className="w-[26.6%] bg-NavyBlue text-white border-2">
                11 - 28 days
              </th>
              <th className="w-[26.6%] bg-NavyBlue text-white border-2">
                Nearly 42 days
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" font-semibold">
              <td className=""></td>
              <td className=""></td>
              <td className="border-2 py-4">
                <input
                  type="date"
                  name="days10in01"
                  id="days10in01"
                  disabled={!editMode}
                  value={
                    tableData.days10in01 === null ? "NA" : tableData.days10in01
                  }
                  onChange={handleChange}
                />
              </td>
              <td className="border-2">
                <input
                  type="date"
                  name="days10in02"
                  id="days10in02"
                  disabled={!editMode}
                  value={
                    tableData.days10in02 === null ? "NA" : tableData.days10in02
                  }
                  onChange={handleChange}
                />
              </td>
              <td className="border-2">
                <input
                  type="date"
                  name="days11to28"
                  id="days11to28"
                  disabled={!editMode}
                  value={
                    tableData.days11to28 === null ? "NA" : tableData.days11to28
                  }
                  onChange={handleChange}
                />
              </td>
              <td className="border-2">
                <input
                  type="date"
                  name="days42"
                  id="days42"
                  disabled={!editMode}
                  value={
                    tableData.days42 === null ? "NA" : tableData.days42
                  }
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr className="">
              <td colSpan={2} className="font-semibold py-4 border-2">
                Color of skin
              </td>
              <td className="border-2">
                <input
                  type="text"
                  className="text-center"
                  name="skinColor1"
                  id="skinColor1"
                  disabled={!editMode}
                  value={
                    tableData.skinColor1 === null ? "NA" : tableData.skinColor1
                  }
                  onChange={handleChange}
                />
              </td>
              <td className="border-2">
                <input
                  type="text"
                  className="text-center"
                  name="skinColor2"
                  id="skinColor2"
                  disabled={!editMode}
                  value={
                    tableData.skinColor2 === null ? "NA" : tableData.skinColor2
                  }
                  onChange={handleChange}
                />
              </td>
              <td className="border-2">
                <input
                  type="text"
                  className="text-center"
                  name="skinColor3"
                  id="skinColor3"
                  disabled={!editMode}
                  value={
                    tableData.skinColor3 === null ? "NA" : tableData.skinColor3
                  }
                  onChange={handleChange}
                />
              </td>
              <td className="border-2">
                <input
                  type="text"
                  className="text-center"
                  name="skinColor4"
                  id="skinColor4"
                  disabled={!editMode}
                  value={
                    tableData.skinColor4 === null ? "NA" : tableData.skinColor4
                  }
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr className="">
              <td colSpan={2} className="font-semibold py-4 border-2">
                Eye
              </td>
              <td className="border-2">
                <input
                  type="text"
                  className="text-center"
                  name="eyeState1"
                  id="eyeState1"
                  disabled={!editMode}
                  value={
                    tableData.eyeState1 === null ? "NA" : tableData.eyeState1
                  }
                  onChange={handleChange}
                />
              </td>
              <td className="border-2">
                <input
                  type="text"
                  className="text-center"
                  name="eyeState2"
                  id="eyeState2"
                  disabled={!editMode}
                  value={
                    tableData.eyeState2 === null ? "NA" : tableData.eyeState2
                  }
                  onChange={handleChange}
                />
              </td>
              <td className="border-2">
                <input
                  type="text"
                  className="text-center"
                  name="eyeState3"
                  id="eyeState3"
                  disabled={!editMode}
                  value={
                    tableData.eyeState3 === null ? "NA" : tableData.eyeState3
                  }
                  onChange={handleChange}
                />
              </td>
              <td className="border-2">
                <input
                  type="text"
                  className="text-center"
                  name="eyeState4"
                  id="eyeState4"
                  disabled={!editMode}
                  value={
                    tableData.eyeState4 === null ? "NA" : tableData.eyeState4
                  }
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr className="">
              <td colSpan={2} className="font-semibold py-4 border-2">
                The nature of umbelical
              </td>
              <td className="border-2">
                <select
                  name="umbelical1"
                  id="umbelical1"
                  disabled={!editMode}
                  value={
                    tableData.umbelical1 === null
                      ? "select"
                      : tableData.umbelical1
                  }
                  onChange={handleChange}
                >
                  <option disabled>select</option>
                  <option value={"Dry"}>Dry</option>
                  <option value={"Normal"}>Normal</option>
                </select>
              </td>
              <td className="border-2">
                <select
                  name="umbelical2"
                  id="umbelical2"
                  disabled={!editMode}
                  value={
                    tableData.umbelical2 === null
                      ? "select"
                      : tableData.umbelical2
                  }
                  onChange={handleChange}
                >
                  <option disabled>select</option>
                  <option value={"Dry"}>Dry</option>
                  <option value={"Normal"}>Normal</option>
                </select>
              </td>
              <td className="border-2">
                <select
                  name="umbelical3"
                  id="umbelical3"
                  disabled={!editMode}
                  value={
                    tableData.umbelical3 === null
                      ? "select"
                      : tableData.umbelical3
                  }
                  onChange={handleChange}
                >
                  <option disabled>select</option>
                  <option value={"Dry"}>Dry</option>
                  <option value={"Normal"}>Normal</option>
                </select>
              </td>
              <td className="border-2">
                <select
                  name="umbelical4"
                  id="umbelical4"
                  disabled={!editMode}
                  value={
                    tableData.umbelical4 === null
                      ? "select"
                      : tableData.umbelical4
                  }
                  onChange={handleChange}
                >
                  <option disabled>select</option>
                  <option value={"Dry"}>Dry</option>
                  <option value={"Normal"}>Normal</option>
                </select>
              </td>
            </tr>

            <tr className="">
              <td colSpan={2} className="font-semibold py-4 border-2">
                Only breast feeding
              </td>
              <td className="border-2">
                <select
                  name="onlyBreastFeeding1"
                  id="onlyBreastFeeding1"
                  disabled={!editMode}
                  value={
                    tableData.onlyBreastFeeding1 === null
                      ? "select"
                      : tableData.onlyBreastFeeding1
                  }
                  onChange={handleChange}
                >
                  <option disabled>select</option>
                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </select>
              </td>
              <td className="border-2">
                <select
                  name="onlyBreastFeeding2"
                  id="onlyBreastFeeding2"
                  disabled={!editMode}
                  value={
                    tableData.onlyBreastFeeding2 === null
                      ? "select"
                      : tableData.onlyBreastFeeding2
                  }
                  onChange={handleChange}
                >
                  <option disabled>select</option>
                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </select>
              </td>
              <td className="border-2">
                <select
                  name="onlyBreastFeeding3"
                  id="onlyBreastFeeding3"
                  disabled={!editMode}
                  value={
                    tableData.onlyBreastFeeding3 === null
                      ? "select"
                      : tableData.onlyBreastFeeding3
                  }
                  onChange={handleChange}
                >
                  <option disabled>select</option>
                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </select>
              </td>
              <td className="border-2">
                <select
                  name="onlyBreastFeeding4"
                  id="onlyBreastFeeding4"
                  disabled={!editMode}
                  value={
                    tableData.onlyBreastFeeding4 === null
                      ? "select"
                      : tableData.onlyBreastFeeding4
                  }
                  onChange={handleChange}
                >
                  <option disabled>select</option>
                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </select>
              </td>
            </tr>

            <tr className="">
              <td rowSpan={2} className="font-semibold py-2 border-2">
                Breast Feeding
              </td>
              <td className="font-semibold py-3 border-2">Posture</td>
              <td className="border-2">
                <select
                  name="breastFeedingPosture1"
                  id="breastFeedingPosture1"
                  disabled={!editMode}
                  value={
                    tableData.breastFeedingPosture1 === null
                      ? "select"
                      : tableData.breastFeedingPosture1
                  }
                  onChange={handleChange}
                >
                  <option disabled>select</option>
                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </select>
              </td>
              <td className="border-2">
                <select
                  name="breastFeedingPosture2"
                  id="breastFeedingPosture2"
                  disabled={!editMode}
                  value={
                    tableData.breastFeedingPosture2 === null
                      ? "select"
                      : tableData.breastFeedingPosture2
                  }
                  onChange={handleChange}
                >
                  <option disabled>select</option>
                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </select>
              </td>
              <td className="border-2">
                <select
                  name="breastFeedingPosture3"
                  id="breastFeedingPosture3"
                  disabled={!editMode}
                  value={
                    tableData.breastFeedingPosture3 === null
                      ? "select"
                      : tableData.breastFeedingPosture3
                  }
                  onChange={handleChange}
                >
                  <option disabled>select</option>
                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </select>
              </td>
              <td className="border-2">
                <select
                  name="breastFeedingPosture4"
                  id="breastFeedingPosture4"
                  disabled={!editMode}
                  value={
                    tableData.breastFeedingPosture4 === null
                      ? "select"
                      : tableData.breastFeedingPosture4
                  }
                  onChange={handleChange}
                >
                  <option disabled>select</option>
                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </select>
              </td>
            </tr>
            <tr className="">
              <td className="font-semibold py-3 border-2">Relation</td>
              <td className="border-2">
                <select
                  name="breastFeedingRelation1"
                  id="breastFeedingRelation1"
                  disabled={!editMode}
                  value={
                    tableData.breastFeedingRelation1 === null
                      ? "select"
                      : tableData.breastFeedingRelation1
                  }
                  onChange={handleChange}
                >
                  <option disabled>select</option>
                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </select>
              </td>
              <td className="border-2">
                <select
                  name="breastFeedingRelation2"
                  id="breastFeedingRelation2"
                  disabled={!editMode}
                  value={
                    tableData.breastFeedingRelation2 === null
                      ? "select"
                      : tableData.breastFeedingRelation2
                  }
                  onChange={handleChange}
                >
                  <option disabled>select</option>
                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </select>
              </td>
              <td className="border-2">
                <select
                  name="breastFeedingRelation3"
                  id="breastFeedingRelation3"
                  disabled={!editMode}
                  value={
                    tableData.breastFeedingRelation3 === null
                      ? "select"
                      : tableData.breastFeedingRelation3
                  }
                  onChange={handleChange}
                >
                  <option disabled>select</option>
                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </select>
              </td>
              <td className="border-2">
                <select
                  name="breastFeedingRelation4"
                  id="breastFeedingRelation4"
                  disabled={!editMode}
                  value={
                    tableData.breastFeedingRelation4 === null
                      ? "select"
                      : tableData.breastFeedingRelation4
                  }
                  onChange={handleChange}
                >
                  <option disabled>select</option>
                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </select>
              </td>
            </tr>

            <tr className="">
              <td colSpan={2} className="font-semibold py-4 border-2">
                Other
              </td>
              <td className="border-2">
                <input
                  type="text"
                  className="text-center"
                  name="other1"
                  id="other1"
                  disabled={!editMode}
                  value={
                    tableData.other1 === null ? "NA" : tableData.other1
                  }
                  onChange={handleChange}
                />
              </td>
              <td className="border-2">
                <input
                  type="text"
                  className="text-center"
                  name="other2"
                  id="other2"
                  disabled={!editMode}
                  value={
                    tableData.other2 === null ? "NA" : tableData.other2
                  }
                  onChange={handleChange}
                />
              </td>
              <td className="border-2">
                <input
                  type="text"
                  className="text-center"
                  name="other3"
                  id="other3"
                  disabled={!editMode}
                  value={
                    tableData.other3 === null ? "NA" : tableData.other3
                  }
                  onChange={handleChange}
                />
              </td>
              <td className="border-2">
                <input
                  type="text"
                  className="text-center"
                  name="other4"
                  id="other4"
                  disabled={!editMode}
                  value={
                    tableData.other4 === null ? "NA" : tableData.other4
                  }
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default HReport;
