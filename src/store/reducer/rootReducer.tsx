import {combineReducers} from "redux";
import flowerReducer from "./flowerReducer";
import clientReducer from "./clientReducer";
import snackbarReducer from "./snackbarReducer";

const rootReducer = combineReducers({
    flower: flowerReducer,
    client: clientReducer,
    snackbar: snackbarReducer
})

export default rootReducer