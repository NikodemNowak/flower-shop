import {useDispatch, useSelector} from "react-redux";
import {AppState} from "./store/store";
import {useEffect} from "react";
import flowerActions from "./store/actions/flowerActions";
import {useForm, Controller} from 'react-hook-form';
import {FormControl} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';

import {
    Button,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@material-ui/core";
import {NewFlower} from "./store/reducer/flowerReducer";
import snackbarActions from "./store/actions/snackbarActions";
import dialogActions from "./store/actions/dialogActions";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    table: {},
    root: {
        '& > *': {
            width: '25ch',
        },
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const FlowerView = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const {isLoading, flowers} = useSelector((state: AppState) => state.flower);
    const {control, handleSubmit, errors: fieldsErrors} = useForm();

    const saveFlower = (flowerData: NewFlower) => {
        flowerActions.saveFlower(dispatch, flowerData as NewFlower)
        dispatch(flowerActions.getFlowers)
    }

    const deleteFlower = (id: number) => {
        flowerActions.deleteFlower(dispatch, id)
        dispatch(flowerActions.getFlowers)
    }

    useEffect(() => {
        dispatch(flowerActions.getFlowers)
        // dialogActions.openDialog(dispatch, "header", "some interesting message")
        // snackbarActions.openSnackbar(dispatch, "message", "success")
    }, [])

    return (
        <div>
            {isLoading ? <div>LADOWANIE...</div> : <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {flowers.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.description}</TableCell>
                                    <TableCell>{row.price}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                            startIcon={<DeleteIcon/>}
                                            onClick={() => {
                                                deleteFlower(row.id)
                                            }}
                                        >
                                            DELETE
                                        </Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>}
            <div className={classes.paper}>
                <form className={classes.root} onSubmit={handleSubmit(saveFlower)}>
                    <FormControl fullWidth variant="outlined">
                        <Grid container spacing={2}>
                            <h1 style={{paddingLeft: 27}}>Add flower</h1>
                            <Grid item xs={12}>
                                <Controller
                                    name="name"
                                    as={
                                        <TextField
                                            autoFocus
                                            autoComplete="name"
                                            name="name"
                                            variant="outlined"
                                            fullWidth
                                            id="name"
                                            helperText={fieldsErrors.name ? fieldsErrors.name.message : null}
                                            label="Name"
                                            error={fieldsErrors.name}
                                        />
                                    }
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "You must specify Name",
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="description"
                                    as={
                                        <TextField
                                            autoFocus
                                            autoComplete="description"
                                            name="description"
                                            variant="outlined"
                                            fullWidth
                                            id="description"
                                            helperText={fieldsErrors.description ? fieldsErrors.description.message : null}
                                            label="Description"
                                            error={fieldsErrors.description}
                                        />
                                    }
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "You must specify Description",
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="price"
                                    as={
                                        <TextField
                                            autoFocus
                                            autoComplete="price"
                                            name="price"
                                            variant="outlined"
                                            fullWidth
                                            id="price"
                                            helperText={fieldsErrors.price ? fieldsErrors.price.message : null}
                                            label="Price"
                                            error={fieldsErrors.price}
                                        />
                                    }
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "You must specify Price",
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="photo"
                                    as={
                                        <TextField
                                            autoFocus
                                            autoComplete="photo"
                                            name="photo"
                                            variant="outlined"
                                            fullWidth
                                            id="photo"
                                            helperText={fieldsErrors.photo ? fieldsErrors.photo.message : null}
                                            label="Photo URL"
                                            error={fieldsErrors.photo}
                                        />
                                    }
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "You must specify Photo URL",
                                    }}
                                />
                            </Grid>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </FormControl>
                </form>
            </div>
        </div>
    )
}

export default FlowerView