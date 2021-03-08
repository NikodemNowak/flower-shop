import {LoginActions} from "../actions/loginActions";

export interface LoginData {
    username: string,
    password: string
}

export interface LoginState {
    isLoading: boolean,
    accessToken: string,
    refreshToken: string
}

const initialState: LoginState = {
    isLoading: false,
    accessToken: '',
    refreshToken: ''
}

const loginReducer = (
    state = initialState,
    action: LoginActions
): LoginState => {
    switch (action.type) {
        case "LOGIN_CLIENT":
            return {
                ...state,
                isLoading: true
            }
        case "LOGIN_CLIENT_SUCCESS":
            return {
                ...state,
                isLoading: false,
                accessToken: action.accessToken,
                refreshToken: action.refreshToken
            }
        case "LOGIN_CLIENT_FAILURE":
            return {
                ...state,
                isLoading: false,
                accessToken: '',
                refreshToken: ''
            }
        default:
            return state;
    }
}

export default loginReducer

