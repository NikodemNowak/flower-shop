import {Action, Dispatch} from "redux";

export const OPEN_SNACKBAR = 'OPEN_SNACKBAR'

export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR'

export interface OpenSnackbarAction extends Action<typeof OPEN_SNACKBAR> {
    message: string,
    severity: "success" | "info" | "warning" | "error" | undefined
}

export interface CloseSnackbarAction extends Action<typeof CLOSE_SNACKBAR> {
}

export type SnackbarActions =
    | OpenSnackbarAction
    | CloseSnackbarAction

const openSnackbar = (dispatch: Dispatch, message: string, severity: "success" | "info" | "warning" | "error" | undefined) => {
    dispatch({type: OPEN_SNACKBAR, severity: severity, message: message})
}

const snackbarActions = {
    openSnackbar
}

export default snackbarActions