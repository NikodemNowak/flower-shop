import {Action, Dispatch} from "redux";
import {AxiosError} from "axios";
import {LoginData} from "../reducer/loginReducer";
import dialogActions from "./dialogActions";
import instance from "./axios";

export const LOGIN_CLIENT = 'LOGIN_CLIENT'
export const LOGIN_CLIENT_SUCCESS = 'LOGIN_CLIENT_SUCCESS'
export const LOGIN_CLIENT_FAILURE = 'LOGIN_CLIENT_FAILURE'

export interface LoginClientAction extends Action<typeof LOGIN_CLIENT> {
}

export interface LoginClientSuccessAction extends Action<typeof LOGIN_CLIENT_SUCCESS> {
    accessToken: string
    refreshToken: string
}

export interface LoginClientFailureAction extends Action<typeof LOGIN_CLIENT_FAILURE> {
    error: AxiosError
}

export type LoginActions =
    | LoginClientAction
    | LoginClientSuccessAction
    | LoginClientFailureAction

const loginClient = (dispatch: Dispatch, loginData: LoginData, callback: () => any) => {
    dispatch({type: LOGIN_CLIENT} as LoginClientAction)

    instance.post('/api/token/', loginData).then(r => {
            localStorage.setItem("accessToken", r.data.access);
            localStorage.setItem("refreshToken", r.data.refresh);
            callback()
            dispatch({ type: LOGIN_CLIENT_SUCCESS, accessToken: r.data.access, refreshToken: r.data.refresh } as LoginClientSuccessAction)
    }).catch(error => {
        let err = error as AxiosError
        if (err.response?.status === 401) {
            dialogActions.openDialog(dispatch, "ERROR", "Unauthorized access")
        }
        dispatch({type: LOGIN_CLIENT_FAILURE, error: error as AxiosError} as LoginClientFailureAction)
    })
}

const loginActions = {
    loginClient
}

export default loginActions
