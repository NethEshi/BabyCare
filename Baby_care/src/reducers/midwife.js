const INIT_STATE = {
    selectedMidwife: {},
};

export default (state = INIT_STATE, action) => {

    switch (action.type) {
        case 'GET_SELECTED_MIDWIFE':
            return { ...state, selectedMidwife: action.payload };

        default:
            return { ...state };
    }
};