import React, { useState, createContext, useContext } from "react";

const OverlayContext = createContext();

export const OverlayProvider = ({ children }) => {
  const [isSubmitOverlayVisible, setSubmitOverlayVisible] = useState(false);
  const [isSpinnerVisible, setSpinnerVisible] = useState(false);
  const [isEditSaveVisible, setEditSaveVisible] = useState(false);
  const [isClinicScheduleVisible, setClinicScheduleVisible] = useState(false);
  const [isVaccineVisible, setVaccineVisible] = useState(false);
  const [isLogoutVisible, setLogoutVisible] = useState(false);

  const showSubmitOverlay = () => {
    setSubmitOverlayVisible(true);
  };
  const showSpinner = () => {
    setSpinnerVisible(true);
  };
  const hideSubmitOverlay = () => {
    setSubmitOverlayVisible(false);
  };
  const hideSpinner = () => {
    setSpinnerVisible(false);
  };
  const showEditSave = () => {
    setEditSaveVisible(true);
  };
  const hideEditSave = () => {
    setEditSaveVisible(false);
  };
  const showClinicSchedule = () => {
    setClinicScheduleVisible(true);
  };
  const hideClinicSchedule = () => {
    setClinicScheduleVisible(false);
  };
  const showVaccine = () => {
    setVaccineVisible(true);
  };
  const hideVaccine = () => {
    setVaccineVisible(false);
  };
  const showLogout = () => {
    setLogoutVisible(true);
  };
  const hideLogout = () => {
    setLogoutVisible(false);
  }

  return (
    <OverlayContext.Provider
      value={{
        isSubmitOverlayVisible,
        showSubmitOverlay,
        hideSubmitOverlay,
        isSpinnerVisible,
        showSpinner,
        hideSpinner,
        isEditSaveVisible,
        showEditSave,
        hideEditSave,
        isClinicScheduleVisible,
        showClinicSchedule,
        hideClinicSchedule,
        isVaccineVisible,
        showVaccine,
        hideVaccine,
        isLogoutVisible,
        showLogout,
        hideLogout
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => {
  return useContext(OverlayContext);
};
