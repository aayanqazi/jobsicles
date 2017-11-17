import JobActions from "./../constants/jobs";

const INITIAL_STATE = {
    alljobs: {},
    jobDetails: {},
    isProcessing: false,
    isError: false,
    errorMessage: {},
    isDone: false
}

function JobReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case JobActions.ALL_JOBS:
            return { ...state, isProcessing: true, isError: false, isDone: false };
        case JobActions.ALL_JOBS_SUCCESSFUL:
            return { ...state, isProcessing: false, isError: false, alljobs: action.payload, isDone: true };
        case JobActions.ALL_JOBS_REJECTED:
            return { ...state, isProcessing: false, isError: true, errorMessage: action.payload, isDone: false };

        case JobActions.JOB_DETAILS:
            return { ...state, isProcessing: true, isError: false, isDone: false };
        case JobActions.JOB_DETAILS_SUCCESSFUL:
            return { ...state, isProcessing: false, isError: false, jobDetails: action.payload, isDone: true };
        case JobActions.JOB_DETAILS_REJECTED:
            return { ...state, isProcessing: false, isError: true, errorMessage: action.payload, isDone: false };
        default:
            return state;
    }
}

export default JobReducer;