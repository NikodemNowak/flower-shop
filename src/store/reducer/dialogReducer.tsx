import {DialogActions} from "../actions/dialogActions";

export interface DialogState {
    open: boolean,
    header: string,
    message: string
}

const initialState: DialogState = {
    open: false,
    header: '',
    message: ''
}

const dialogReducer = (
    state = initialState,
    action: DialogActions
): DialogState => {
    switch (action.type) {
        case "OPEN_DIALOG":
            return {
                ...state,
                open: true,
                header: action.header,
                message: action.message
            }
        case "CLOSE_DIALOG":
            return {
                ...state,
                open: false
            }
        default:
            return {
                ...state
            }
    }
}

export default dialogReducer