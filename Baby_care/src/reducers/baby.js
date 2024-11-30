const INIT_STATE = {
    selectedBaby: {},
    selectedVaccine: {},
};

export default (state = INIT_STATE, action) => {

    switch (action.type) {
        case 'GET_SELECTED_BABY':
            return { ...state, selectedBaby: action.payload };

        case 'GET_SELECTED_VACCINE':
            return { ...state, selectedVaccine: action.payload };

        default:
            return { ...state };
    }
};