import {
    Box,
    Collapse, IconButton,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "./store";
import React, {useEffect} from "react";
import dialogActions from "./actions/dialogActions";
import snackbarActions from "./actions/snackbarActions";
import orderActions from "./actions/orderActions";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    table: {
        minWidth: 650,
    },
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

const OrderView = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const {isLoading, orders} = useSelector((state: AppState) => state.order);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        dispatch(orderActions.getOrders)
        // dialogActions.openDialog(dispatch, "header", "some interesting message")
        // snackbarActions.openSnackbar(dispatch, "message", "success")
    }, [])

    return (
        <div>
            {isLoading ? <div>LADOWANIE...</div> : <div>
                <h1 style={{textAlign: "center"}}>Order table</h1>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>ID</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Sum</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>
                                        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                                            {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell>{row.status.name}</TableCell>
                                    <TableCell>{row.sum}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <Box margin={1}>
                                            <Typography variant="h6" gutterBottom component="div">
                                                Flowers
                                            </Typography>
                                            <Table size="small" aria-label="purchases">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Id</TableCell>
                                                        <TableCell>Name</TableCell>
                                                        <TableCell>Description</TableCell>
                                                        <TableCell>Price</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {orders.map((row) => (
                                                        row.flowers.map((flower) => (
                                                            <TableRow>
                                                                <TableCell component="th"
                                                                           scope="row">{flower.id}</TableCell>
                                                                <TableCell component="th"
                                                                           scope="row">{flower.name}</TableCell>
                                                                <TableCell component="th"
                                                                           scope="row">{flower.description}</TableCell>
                                                                <TableCell component="th"
                                                                           scope="row">{flower.price}</TableCell>
                                                            </TableRow>
                                                        ))
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </Box>
                                    </Collapse>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <Box margin={1}>
                                            <Typography variant="h6" gutterBottom component="div">
                                                Client
                                            </Typography>
                                            <Table size="small" aria-label="purchases">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Id</TableCell>
                                                        <TableCell>First name</TableCell>
                                                        <TableCell>Last name</TableCell>
                                                        <TableCell>Email</TableCell>
                                                        <TableCell>Phone Number</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {orders.map((row) => (
                                                        <TableRow>
                                                            <TableCell component="th"
                                                                       scope="row">{row.client.id}</TableCell>
                                                            <TableCell component="th"
                                                                       scope="row">{row.client.firstName}</TableCell>
                                                            <TableCell component="th"
                                                                       scope="row">{row.client.lastName}</TableCell>
                                                            <TableCell component="th"
                                                                       scope="row">{row.client.email}</TableCell>
                                                            <TableCell component="th"
                                                                       scope="row">{row.client.phoneNumber}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </Box>
                                    </Collapse>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>}
        </div>
    )
}

export default OrderView