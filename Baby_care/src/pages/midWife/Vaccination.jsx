import FeatherIcon from "feather-icons-react";
import React, { useEffect, useState } from "react";
import { useOverlay } from "../../components/context/OverlayContext";
import { useDispatch, useSelector } from "react-redux";
import VaccineView from "../../components/overlays/VaccineView";
import { getSelectedVaccine } from "../../actions/baby";
import axios from "axios";
function Vaccination() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [newBaby, setNewBaby] = useState(false);
  const [sendData, setSendData] = useState(false);
  const dispatch = useDispatch();
  const babyID = useSelector((state) => state.baby.selectedBaby.ID);
  const {
    isVaccineVisible,
    showVaccine,
    hideVaccine,
    showSpinner,
    hideSpinner,
    showEditSave,
    hideEditSave,
  } = useOverlay();
  const [vaccinationData, setVaccinationData] = useState({
    AtBirth: [{ name: "B.C.G" }],
    TwoMonth: [{ name: "DPT 1" }, { name: "OPV 1" }, { name: "Hepatitis B 1" }],
    FourMonth: [
      { name: "DPT 2" },
      { name: "OPV 2" },
      { name: "Hepatitis B 2" },
    ],
    SixMonth: [{ name: "DPT 3" }, { name: "OPV 3" }, { name: "Hepatitis B 3" }],
    NineMonth: [{ name: "Measles" }, { name: "Vitamin A" }],
    EighteenMonth: [
      { name: "DPT 4" },
      { name: "OPV 4" },
      { name: "Vitamin A" },
    ],
    ThreeYeares: [{ name: "Measles & Rubella" }, { name: "Vitamin A" }],
    FiveYeares: [{ name: "D.T" }, { name: "OPV 5" }],
    TenYeares: [{ name: "Rubella" }, { name: "atd" }],
    JapaneseEncephalitis: [
      { name: "J E 1" },
      { name: "J E 2" },
      { name: "J E 3" },
      { name: "J E 4" },
    ],
    Other: [],
  });
  const [toggleVisibility, setToggleVisibility] = useState({
    AtBirth: false,
    TwoMonth: false,
    FourMonth: false,
    SixMonth: false,
    NineMonth: false,
    EighteenMonth: false,
    ThreeYeares: false,
    FiveYeares: false,
    TenYeares: false,
    JapaneseEncephalitis: false,
    Other: false,
  });

  useEffect (() => {
    showSpinner();
    axios.get(`http://localhost:5000/vaccination/getVaccinationData/${babyID}`)
    .then((response) => {
      console.log(response);
      setVaccinationData(response.data);
    })
    .catch((error) => {
      console.log(error);
      if (error.response.status === 404) {
        setNewBaby(true);
      }
    })
    .finally(() => {
      hideSpinner();
    })
  }, []);

  const handleToggleVisibility = (e) => {
    const { name } = e.currentTarget;
    setToggleVisibility((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
    console.log(name);
  };

  const updateVaccineData = (arrayName, index, newProperties) => {
    setVaccinationData((prevState) => {
      const updatedArray = prevState[arrayName].map((item, i) => {
        return i === index ? { ...item, ...newProperties } : item;
      });

      return {
        ...prevState,
        [arrayName]: updatedArray,
      };
    });
  };

  const addNewVaccine = (e) => {
    const { name } = e.currentTarget;
    setVaccinationData((prevState) => ({
      ...prevState,
      [name]: [...prevState[name], { name: "New Vaccine" }],
    }));
  };

  const onSubmit = (arrayName, index, data) => {
    console.log(data);
    updateVaccineData(arrayName, index, data);
    hideVaccine();
    setIsEditMode(false);
    setIsSave(true);
    setSendData(!sendData);
  };

  const onCancel = () => {
    hideVaccine();
    setIsEditMode(false);
  };

  const onView = (vaccination) => {
    dispatch(getSelectedVaccine(vaccination));
    showVaccine();
  }

  const onEdit = (vaccination, e, index) => {
    dispatch(getSelectedVaccine(vaccination, e.currentTarget.name, index));
    setIsEditMode(true);
    showVaccine();
  }

  useEffect(() => {
    if (!isSave) {
      return;
    }

    showSpinner();
    const payload = {
      ID: babyID,
      ...vaccinationData,
    }
    console.log(payload);
    if (newBaby) {
      axios.post("http://localhost:5000/vaccination/addVaccination", payload)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        hideSpinner();
      })
    } else {
      axios.put("http://localhost:5000/vaccination/updateVaccinationData", payload)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        hideSpinner();
      })
    }

  }, [sendData]);
  return (
    <>
    <VaccineView submitFunction = {onSubmit} cancelFunction = {onCancel} editMode = {isEditMode}/>
      <div className="w-full text-Ash font-poppins relative pt-5 pb-10 px-20">
        <div className="bg-light-pink p-5 border-2 rounded-xl space-y-5">
          <div className="bg-white border-2 rounded-xl">
            <div className="flex justify-between py-2 px-5">
              <div>
                <h1 className="text-left text-2xl">At Birth</h1>
              </div>
              <div className="space-x-5">
                {toggleVisibility.AtBirth && (
                  <button name="AtBirth" id="AtBirth" onClick={addNewVaccine}>
                    <FeatherIcon icon="plus" className={""} />
                  </button>
                )}
                <button
                  name="AtBirth"
                  id="AtBirth"
                  onClick={handleToggleVisibility}
                >
                  <FeatherIcon
                    icon="chevron-down"
                    className={`${
                      toggleVisibility.AtBirth ? "rotate-up" : "rotate-down"
                    }`}
                  />
                </button>
              </div>
            </div>
            {toggleVisibility.AtBirth && (
              <div className="px-5 pb-5 space-y-2">
                {vaccinationData.AtBirth.map((vaccination, index) => {
                  return (
                    <div
                      className="border-2 border-NavyBlue border-opacity-40 rounded-xl flex justify-between py-2 px-5"
                      key={index}
                    >
                      <div>
                        <h1 className="text-left text-2xl">
                          {vaccination.name}
                        </h1>
                      </div>
                      <div className=" space-x-3">
                        <button name="AtBirth" id="AtBirth" onClick={() => onView(vaccination)}>
                          <FeatherIcon icon="eye" className={""} />
                        </button>
                        <button name="AtBirth" id="AtBirth" onClick={(e) => onEdit(vaccination, e, index)}>
                          <FeatherIcon icon="edit-3" className={""} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="bg-white border-2 rounded-xl">
            <div className="flex justify-between py-2 px-5">
              <div>
                <h1 className="text-left text-2xl">2 Months Completed</h1>
              </div>
              <div className="space-x-5">
                {toggleVisibility.TwoMonth && (
                  <button name="TwoMonth" id="TwoMonth" onClick={addNewVaccine}>
                    <FeatherIcon icon="plus" className={""} />
                  </button>
                )}
                <button
                  name="TwoMonth"
                  id="TwoMonth"
                  onClick={handleToggleVisibility}
                >
                  <FeatherIcon
                    icon="chevron-down"
                    className={`${
                      toggleVisibility.TwoMonth ? "rotate-up" : "rotate-down"
                    }`}
                  />
                </button>
              </div>
            </div>
            {toggleVisibility.TwoMonth && (
              <div className="px-5 pb-5 space-y-2">
                {vaccinationData.TwoMonth.map((vaccination, index) => {
                  return (
                    <div
                      className="border-2 border-NavyBlue border-opacity-40 rounded-xl flex justify-between py-2 px-5"
                      key={index}
                    >
                      <div>
                        <h1 className="text-left text-2xl">
                          {vaccination.name}
                        </h1>
                      </div>
                      <div className=" space-x-3">
                        <button name="TwoMonth" id="TwoMonth" onClick={() => onView(vaccination)}>
                          <FeatherIcon icon="eye" className={""} />
                        </button>
                        <button name="TwoMonth" id="TwoMonth" onClick={(e) => onEdit(vaccination, e, index)}>
                          <FeatherIcon icon="edit-3" className={``} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="bg-white border-2 rounded-xl">
            <div className="flex justify-between py-2 px-5">
              <div>
                <h1 className="text-left text-2xl">4 Months Completed</h1>
              </div>
              <div className="space-x-5">
                {toggleVisibility.FourMonth && (
                  <button name="FourMonth" id="FourMonth" onClick={addNewVaccine}>
                    <FeatherIcon icon="plus" className={""} />
                  </button>
                )}
                <button
                  name="FourMonth"
                  id="FourMonth"
                  onClick={handleToggleVisibility}
                >
                  <FeatherIcon
                    icon="chevron-down"
                    className={`${
                      toggleVisibility.FourMonth ? "rotate-up" : "rotate-down"
                    }`}
                  />
                </button>
              </div>
            </div>
            {toggleVisibility.FourMonth && (
              <div className="px-5 pb-5 space-y-2">
                {vaccinationData.FourMonth.map((vaccination, index) => {
                  return (
                    <div
                      className="border-2 border-NavyBlue border-opacity-40 rounded-xl flex justify-between py-2 px-5"
                      key={index}
                    >
                      <div>
                        <h1 className="text-left text-2xl">
                          {vaccination.name}
                        </h1>
                      </div>
                      <div className=" space-x-3">
                        <button name="FourMonth" id="FourMonth" onClick={() => onView(vaccination)}>
                          <FeatherIcon icon="eye" className={''} />
                        </button>
                        <button name="FourMonth" id="FourMonth" onClick={(e) => onEdit(vaccination, e, index)}>
                          <FeatherIcon icon="edit-3" className={``} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="bg-white border-2 rounded-xl">
            <div className="flex justify-between py-2 px-5">
              <div>
                <h1 className="text-left text-2xl">6 Months Completed</h1>
              </div>
              <div className="space-x-5">
                {toggleVisibility.SixMonth && (
                  <button name="SixMonth" id="SixMonth" onClick={addNewVaccine}>
                    <FeatherIcon icon="plus" className={""} />
                  </button>
                )}
                <button
                  name="SixMonth"
                  id="SixMonth"
                  onClick={handleToggleVisibility}
                >
                  <FeatherIcon
                    icon="chevron-down"
                    className={`${
                      toggleVisibility.SixMonth ? "rotate-up" : "rotate-down"
                    }`}
                  />
                </button>
              </div>
            </div>
            {toggleVisibility.SixMonth && (
              <div className="px-5 pb-5 space-y-2">
                {vaccinationData.SixMonth.map((vaccination, index) => {
                  return (
                    <div
                      className="border-2 border-NavyBlue border-opacity-40 rounded-xl flex justify-between py-2 px-5"
                      key={index}
                    >
                      <div>
                        <h1 className="text-left text-2xl">
                          {vaccination.name}
                        </h1>
                      </div>
                      <div className=" space-x-3">
                        <button name="SixMonth" id="SixMonth" onClick={() => onView(vaccination)}>
                          <FeatherIcon icon="eye" className={""} />
                        </button>
                        <button name="SixMonth" id="SixMonth" onClick={(e) => onEdit(vaccination, e, index)}>
                          <FeatherIcon icon="edit-3" className={``} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="bg-white border-2 rounded-xl">
            <div className="flex justify-between py-2 px-5">
              <div>
                <h1 className="text-left text-2xl">9 Months Completed</h1>
              </div>
              <div className="space-x-5">
                {toggleVisibility.NineMonth && (
                  <button name="NineMonth" id="NineMonth" onClick={addNewVaccine}>
                    <FeatherIcon icon="plus" className={""} />
                  </button>
                )}
                <button
                  name="NineMonth"
                  id="NineMonth"
                  onClick={handleToggleVisibility}
                >
                  <FeatherIcon
                    icon="chevron-down"
                    className={`${
                      toggleVisibility.NineMonth ? "rotate-up" : "rotate-down"
                    }`}
                  />
                </button>
              </div>
            </div>
            {toggleVisibility.NineMonth && (
              <div className="px-5 pb-5 space-y-2">
                {vaccinationData.NineMonth.map((vaccination, index) => {
                  return (
                    <div
                      className="border-2 border-NavyBlue border-opacity-40 rounded-xl flex justify-between py-2 px-5"
                      key={index}
                    >
                      <div>
                        <h1 className="text-left text-2xl">
                          {vaccination.name}
                        </h1>
                      </div>
                      <div className=" space-x-3">
                        <button name="NineMonth" id="NineMonth" onClick={() => onView(vaccination)}>
                          <FeatherIcon icon="eye" className={""} />
                        </button>
                        <button name="NineMonth" id="NineMonth" onClick={(e) => onEdit(vaccination, e, index)}>
                          <FeatherIcon icon="edit-3" className={``} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="bg-white border-2 rounded-xl">
            <div className="flex justify-between py-2 px-5">
              <div>
                <h1 className="text-left text-2xl">18 Months Completed</h1>
              </div>
              <div className="space-x-5">
                {toggleVisibility.EighteenMonth && (
                  <button name="EighteenMonth" id="EighteenMonth" onClick={addNewVaccine}>
                    <FeatherIcon icon="plus" className={""} />
                  </button>
                )}
                <button
                  name="EighteenMonth"
                  id="EighteenMonth"
                  onClick={handleToggleVisibility}
                >
                  <FeatherIcon
                    icon="chevron-down"
                    className={`${
                      toggleVisibility.EighteenMonth
                        ? "rotate-up"
                        : "rotate-down"
                    }`}
                  />
                </button>
              </div>
            </div>
            {toggleVisibility.EighteenMonth && (
              <div className="px-5 pb-5 space-y-2">
                {vaccinationData.EighteenMonth.map((vaccination, index) => {
                  return (
                    <div
                      className="border-2 border-NavyBlue border-opacity-40 rounded-xl flex justify-between py-2 px-5"
                      key={index}
                    >
                      <div>
                        <h1 className="text-left text-2xl">
                          {vaccination.name}
                        </h1>
                      </div>
                      <div className=" space-x-3">
                        <button
                          name="EighteenMonth"
                          id="EighteenMonth"
                          onClick={() => onView(vaccination)}
                        >
                          <FeatherIcon icon="eye" className={""} />
                        </button>
                        <button
                          name="EighteenMonth"
                          id="EighteenMonth"
                          onClick={(e) => onEdit(vaccination, e, index)}
                        >
                          <FeatherIcon icon="edit-3" className={``} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="bg-white border-2 rounded-xl">
            <div className="flex justify-between py-2 px-5">
              <div>
                <h1 className="text-left text-2xl">3 Years Completed</h1>
              </div>
              <div className="space-x-5">
                {toggleVisibility.ThreeYeares && (
                  <button name="ThreeYeares" id="ThreeYeares" onClick={addNewVaccine}>
                    <FeatherIcon icon="plus" className={""} />
                  </button>
                )}
                <button
                  name="ThreeYeares"
                  id="ThreeYeares"
                  onClick={handleToggleVisibility}
                >
                  <FeatherIcon
                    icon="chevron-down"
                    className={`${
                      toggleVisibility.ThreeYeares ? "rotate-up" : "rotate-down"
                    }`}
                  />
                </button>
              </div>
            </div>
            {toggleVisibility.ThreeYeares && (
              <div className="px-5 pb-5 space-y-2">
                {vaccinationData.ThreeYeares.map((vaccination, index) => {
                  return (
                    <div
                      className="border-2 border-NavyBlue border-opacity-40 rounded-xl flex justify-between py-2 px-5"
                      key={index}
                    >
                      <div>
                        <h1 className="text-left text-2xl">
                          {vaccination.name}
                        </h1>
                      </div>
                      <div className=" space-x-3">
                        <button name="ThreeYeares" id="ThreeYeares" onClick={() => onView(vaccination)}>
                          <FeatherIcon icon="eye" className={''} />
                        </button>
                        <button name="ThreeYeares" id="ThreeYeares" onClick={(e) => onEdit(vaccination, e, index)}>
                          <FeatherIcon icon="edit-3" className={``} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="bg-white border-2 rounded-xl">
            <div className="flex justify-between py-2 px-5">
              <div>
                <h1 className="text-left text-2xl">5 Years Completed</h1>
              </div>
              <div className="space-x-5">
                {toggleVisibility.FiveYeares && (
                  <button name="FiveYeares" id="FiveYeares" onClick={addNewVaccine}>
                    <FeatherIcon icon="plus" className={""} />
                  </button>
                )}
                <button
                  name="FiveYeares"
                  id="FiveYeares"
                  onClick={handleToggleVisibility}
                >
                  <FeatherIcon
                    icon="chevron-down"
                    className={`${
                      toggleVisibility.FiveYeares ? "rotate-up" : "rotate-down"
                    }`}
                  />
                </button>
              </div>
            </div>
            {toggleVisibility.FiveYeares && (
              <div className="px-5 pb-5 space-y-2">
                {vaccinationData.FiveYeares.map((vaccination, index) => {
                  return (
                    <div
                      className="border-2 border-NavyBlue border-opacity-40 rounded-xl flex justify-between py-2 px-5"
                      key={index}
                    >
                      <div>
                        <h1 className="text-left text-2xl">
                          {vaccination.name}
                        </h1>
                      </div>
                      <div className=" space-x-3">
                        <button name="FiveYeares" id="FiveYeares" onClick={() => onView(vaccination)}>
                          <FeatherIcon icon="eye" className={""} />
                        </button>
                        <button name="FiveYeares" id="FiveYeares" onClick={(e) => onEdit(vaccination, e, index)}>
                          <FeatherIcon icon="edit-3" className={``} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="bg-white border-2 rounded-xl">
            <div className="flex justify-between py-2 px-5">
              <div>
                <h1 className="text-left text-2xl">10 - 14 Years Completed</h1>
              </div>
              <div className="space-x-5">
                {toggleVisibility.TenYeares && (
                  <button name="TenYeares" id="TenYeares" onClick={addNewVaccine}>
                    <FeatherIcon icon="plus" className={""} />
                  </button>
                )}
                <button
                  name="TenYeares"
                  id="TenYeares"
                  onClick={handleToggleVisibility}
                >
                  <FeatherIcon
                    icon="chevron-down"
                    className={`${
                      toggleVisibility.TenYeares ? "rotate-up" : "rotate-down"
                    }`}
                  />
                </button>
              </div>
            </div>
            {toggleVisibility.TenYeares && (
              <div className="px-5 pb-5 space-y-2">
                {vaccinationData.TenYeares.map((vaccination, index) => {
                  return (
                    <div
                      className="border-2 border-NavyBlue border-opacity-40 rounded-xl flex justify-between py-2 px-5"
                      key={index}
                    >
                      <div>
                        <h1 className="text-left text-2xl">
                          {vaccination.name}
                        </h1>
                      </div>
                      <div className=" space-x-3">
                        <button name="TenYeares" id="TenYeares" onClick={() => onView(vaccination)}>
                          <FeatherIcon icon="eye" className={""} />
                        </button>
                        <button name="TenYeares" id="TenYeares" onClick={(e) => onEdit(vaccination, e, index)}>
                          <FeatherIcon icon="edit-3" className={``} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="bg-white border-2 rounded-xl">
            <div className="flex justify-between py-2 px-5">
              <div>
                <h1 className="text-left text-2xl">Japanese Encephalitis</h1>
              </div>
              <div className="space-x-5">
                {toggleVisibility.JapaneseEncephalitis && (
                  <button
                    name="JapaneseEncephalitis"
                    id="JapaneseEncephalitis"
                    onClick={addNewVaccine}
                  >
                    <FeatherIcon icon="plus" />
                  </button>
                )}
                <button
                  name="JapaneseEncephalitis"
                  id="JapaneseEncephalitis"
                  onClick={handleToggleVisibility}
                >
                  <FeatherIcon
                    icon="chevron-down"
                    className={`${
                      toggleVisibility.JapaneseEncephalitis
                        ? "rotate-up"
                        : "rotate-down"
                    }`}
                  />
                </button>
              </div>
            </div>
            {toggleVisibility.JapaneseEncephalitis && (
              <div className="px-5 pb-5 space-y-2">
                {vaccinationData.JapaneseEncephalitis.map(
                  (vaccination, index) => {
                    return (
                      <div
                        className="border-2 border-NavyBlue border-opacity-40 rounded-xl flex justify-between py-2 px-5"
                        key={index}
                      >
                        <div>
                          <h1 className="text-left text-2xl">
                            {vaccination.name}
                          </h1>
                        </div>
                        <div className=" space-x-3">
                          <button
                            name="JapaneseEncephalitis"
                            id="JapaneseEncephalitis"
                            onClick={() => onView(vaccination)}
                          >
                            <FeatherIcon icon="eye" className={""} />
                          </button>
                          <button
                            name="JapaneseEncephalitis"
                            id="JapaneseEncephalitis"
                            onClick={(e) => onEdit(vaccination, e, index)}
                          >
                            <FeatherIcon icon="edit-3" className={''} />
                          </button>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            )}
          </div>

          <div className="bg-white border-2 rounded-xl">
            <div className="flex justify-between py-2 px-5">
              <div>
                <h1 className="text-left text-2xl">Other</h1>
              </div>
              <div className="space-x-5">
                {toggleVisibility.Other && (
                  <button name="Other" id="Other" onClick={addNewVaccine}>
                    <FeatherIcon icon="plus" className={""} />
                  </button>
                )}
                <button
                  name="Other"
                  id="Other"
                  onClick={handleToggleVisibility}
                >
                  <FeatherIcon
                    icon="chevron-down"
                    className={`${
                      toggleVisibility.Other ? "rotate-up" : "rotate-down"
                    }`}
                  />
                </button>
              </div>
            </div>
            {toggleVisibility.Other && (
              <div className="px-5 pb-5 space-y-2">
                {vaccinationData.Other.map((vaccination, index) => {
                  return (
                    <div
                      className="border-2 border-NavyBlue border-opacity-40 rounded-xl flex justify-between py-2 px-5"
                      key={index}
                    >
                      <div>
                        <h1 className="text-left text-2xl">
                          {vaccination.name}
                        </h1>
                      </div>
                      <div className=" space-x-3">
                        <button name="Other" id="Other" onClick={() => onView(vaccination)}>
                          <FeatherIcon icon="eye" className={""} />
                        </button>
                        <button name="Other" id="Other" onClick={(e) => onEdit(vaccination, e, index)}>
                          <FeatherIcon icon="edit-3" className={``} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Vaccination;
