export const getSelectedMidwife = (selectedMidwife) => {
    return {
        type: 'GET_SELECTED_MIDWIFE',
        payload: selectedMidwife
    };
};