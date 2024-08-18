export const getSubmitConfirm = (value) => {
    return {
        type: 'GET_SUBMIT_CONFIRM',
        payload: value
    };
};

export const getSubmitCancel = (value) => {
    return {
        type: 'GET_SUBMIT_CANCEL',
        payload: value
    };
}

export const getSubmit = (value) => {
    return {
        type: 'GET_SUBMIT',
        payload: value
    };
}