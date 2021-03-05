import {Action, Dispatch} from "redux";

export const OPEN_DIALOG = 'OPEN_DIALOG'

export const CLOSE_DIALOG = 'CLOSE_DIALOG'

export interface OpenDialogAction extends Action<typeof OPEN_DIALOG> {
    header: string,
    message: string
}

export interface CloseDialogAction extends Action<typeof CLOSE_DIALOG> {

}

export type DialogActions =
    | OpenDialogAction
    | CloseDialogAction

const openDialog = (dispatch: Dispatch, header: string, message:string) => {
    dispatch({type: OPEN_DIALOG, header: header, message: message})
}

const dialogActions = {
    openDialog
}

export default dialogActions