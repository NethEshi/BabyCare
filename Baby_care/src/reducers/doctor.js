const INIT_STATE = {
    selectedDoctor: {},
};

export default (state = INIT_STATE, action) => {

    switch (action.type) {
        case 'GET_SELECTED_DOCTOR':
            return { ...state, selectedDoctor: action.payload };

        default:
            return { ...state };
    }
};