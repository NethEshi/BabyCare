const INIT_STATE = {
    submitConfirm: false,
    submitCancel: false,
    submit: false,
};

export default (state = INIT_STATE, action) => {
    
        switch (action.type) {
            case 'GET_SUBMIT_CONFIRM':
                return { ...state, submitConfirm: action.payload };
    
            case 'GET_SUBMIT_CANCEL':
                return { ...state, submitCancel: action.payload };
    
            case 'GET_SUBMIT':
                return { ...state, submit: action.payload };
    
            default:
                return { ...state };
        }
};