const INIT_STATE = {
    selectedBaby: {},
};

export default (state = INIT_STATE, action) => {

    switch (action.type) {
        case 'GET_SELECTED_BABY':
            return { ...state, selectedBaby: action.payload };

        default:
            return { ...state };
    }
};