export const getSelectedBaby = (selectedBaby) => {
    return {
        type: 'GET_SELECTED_BABY',
        payload: selectedBaby
    };
};