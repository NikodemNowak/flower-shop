import {useDispatch, useSelector} from "react-redux";
import {AppState} from "./store/store";
import {useEffect, useState} from "react";
import flowerActions from "./store/actions/flowerActions";
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
import {Controller, useForm } from "react-hook-form";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    root: {
        '& > *': {
            width: '25ch',
        },
    },
});

const FlowerView = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { control, handleSubmit, errors } = useForm();
    const { isLoading, flowers } = useSelector((state: AppState) => state.flower);
    const [flower, setFlower] = useState({
        name: '',
        description: '',
        price: 0
    });
    const saveFlower = (data) => {
        console.log(data)
        console.log(errors)
        //flowerActions.saveFlower(dispatch, flower as NewFlower)
        //dispatch(flowerActions.getFlowers)
    }

    const deleteFlower = (id: number) => {
        flowerActions.deleteFlower(dispatch, id)
        dispatch(flowerActions.getFlowers)
    }

    useEffect(() => {
       dispatch(flowerActions.getFlowers)
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
                                    <TableCell><Button onClick={() => {deleteFlower(row.id)}}>DELETE</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>}

            <form className={classes.root} onSubmit={handleSubmit(saveFlower)}>
                <Controller
                    name="name"
                    control={control}
                    defaultValue={false}
                    rules={{ required: true }}
                    render={props =>
                        <TextField label="Name" name="name"/>
                    }
                />
                <TextField label="Description" name="description"/><br/>
                <TextField label="Price" name="price" type="number"/>
                <input type="submit">Submit</input>
            </form>
        </div>
    )
}

export default FlowerView