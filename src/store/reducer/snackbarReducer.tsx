import {
    SnackbarActions,
} from "../actions/snackbarActions";

export interface SnackbarState {
    open: boolean,
    message: string,
    severity: "success" | "info" | "warning" | "error" | undefined
}

const initialState: SnackbarState = {
    open: false,
    message: '',
    severity: undefined
}

const snackbarReducer = (
    state = initialState,
    action: SnackbarActions
): SnackbarState => {
    switch (action.type) {
        case "OPEN_SNACKBAR":
            return {
                ...state,
                open: true,
                message: action.message,
                severity: action.severity
            }
        case "CLOSE_SNACKBAR":
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

export default snackbarReducer