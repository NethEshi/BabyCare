import React, { useState, createContext, useContext } from "react";

const OverlayContext = createContext();

export const OverlayProvider = ({ children }) => {
  const [isSubmitOverlayVisible, setSubmitOverlayVisible] = useState(false);
  const [isSpinnerVisible, setSpinnerVisible] = useState(false);
  const [isEditSaveVisible, setEditSaveVisible] = useState(false);
  const [isClinicScheduleVisible, setClinicScheduleVisible] = useState(false);

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
        hideClinicSchedule
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => {
  return useContext(OverlayContext);
};
