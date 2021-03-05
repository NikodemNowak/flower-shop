import {useDispatch, useSelector} from "react-redux";
import {AppState} from "./store/store";
import {CLOSE_DIALOG} from "./store/actions/dialogActions";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@material-ui/core";

const DialogHandler = () => {
    const {open, header, message} = useSelector((state: AppState) => state.dialog)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch({type: CLOSE_DIALOG})
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title">
                {header}
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    {message}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogHandler