import {Snackbar} from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "./store/store";
import {CLOSE_SNACKBAR} from "./store/actions/snackbarActions";

function Alert(props: JSX.IntrinsicAttributes & AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackbarHandler = () => {
    const {open, message, severity} = useSelector((state: AppState) => state.snackbar)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch({type: CLOSE_SNACKBAR})
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default SnackbarHandler