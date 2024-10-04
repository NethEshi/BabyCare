export const getSelectedBaby = (selectedBaby) => {
    return {
        type: 'GET_SELECTED_BABY',
        payload: selectedBaby
    };
};

export const getSelectedVaccine = (selectedVaccine, arrayName, index) => {
    return {
        type: 'GET_SELECTED_VACCINE',
        payload: { selectedVaccine , arrayName, index}
    };
}