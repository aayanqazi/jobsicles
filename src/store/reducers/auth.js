import AuthActions from "./../constants/auth";

const INITIAL_STATE = {
    authUser: {},
    isAuthenticated: false,
    isProcessing: false,
    isRegistered: false,
    isError: false,
    errorMessage: {}
}

function AuthReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AuthActions.SIGNUP:
            return { ...state, isProcessing: true, isRegistered: false, isError: false };
        case AuthActions.SIGNUP_SUCCESSFUL:
            return { ...state, isProcessing: false, isRegistered: true, isError: false };
        case AuthActions.SIGNUP_REJECTED:
            return { ...state, isProcessing: false, isRegistered: false, isError: true, errorMessage: action.payload };
        case AuthActions.SIGNIN:
            return { ...state, isProcessing: true, isAuthenticated: false, isError: false };
        case AuthActions.SIGNIN_SUCCESSFUL:
            return { ...state, isProcessing: false,isRegistered: false, isAuthenticated: true, isError: false, authUser: action.payload };
        case AuthActions.SIGNIN_REJECTED:
            return { ...state, isProcessing: false,isRegistered: false, isAuthenticated: false, authUser: {}, isError: true, errorMessage: action.payload };
        default:
            return state;
    }
}

export default AuthReducer;