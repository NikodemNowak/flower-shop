import {combineReducers} from "redux";
import flowerReducer from "./flowerReducer";
import clientReducer from "./clientReducer";
import snackbarReducer from "./snackbarReducer";
import dialogReducer from "./dialogReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
    flower: flowerReducer,
    client: clientReducer,
    snackbar: snackbarReducer,
    dialog: dialogReducer,
    order: orderReducer
})

export default rootReducer