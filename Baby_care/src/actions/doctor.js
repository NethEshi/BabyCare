export const getSelectedDoctor = (selectedDoctor) => {
    return {
        type: 'GET_SELECTED_DOCTOR',
        payload: selectedDoctor
    };
};