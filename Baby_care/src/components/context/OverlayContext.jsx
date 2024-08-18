import React, { useState, createContext, useContext } from "react";


const OverlayContext = createContext();

export const OverlayProvider = ({ children }) => {
    const [isSubmitOverlayVisible, setSubmitOverlayVisible] = useState(false);
    const [isSpinnerVisible, setSpinnerVisible] = useState(false);

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

    return (
        <OverlayContext.Provider value={{ isSubmitOverlayVisible, showSubmitOverlay, hideSubmitOverlay, isSpinnerVisible, showSpinner, hideSpinner }}>
            {children}
        </OverlayContext.Provider>
    );
};

export const useOverlay = () => {
    return useContext(OverlayContext);
};