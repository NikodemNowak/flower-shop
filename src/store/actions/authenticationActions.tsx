import {Action} from "redux";

export const AUTHENTICATION_SUCCESS = "AUTHENTICATION_SUCCESS"
export const AUTHENTICATION_FAILURE = "AUTHENTICATION_FAILURE"

export interface AuthenticationSuccessAction extends Action<typeof AUTHENTICATION_SUCCESS> {
}

export interface AuthenticationFailureAction extends Action<typeof AUTHENTICATION_FAILURE> {
}

export type AuthenticationActions =
    | AuthenticationSuccessAction
    | AuthenticationFailureAction