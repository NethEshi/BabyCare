export const getSelectedBaby = (selectedBaby) => {
    return {
        type: 'GET_SELECTED_BABY',
        payload: selectedBaby
    };
};

export const getSelectedVaccine = (selectedVaccine) => {
    return {
        type: 'GET_SELECTED_VACCINE',
        payload: selectedVaccine
    };
}