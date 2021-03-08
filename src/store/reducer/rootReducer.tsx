import {combineReducers} from "redux";
import flowerReducer from "./flowerReducer";
import clientReducer from "./clientReducer";
import snackbarReducer from "./snackbarReducer";
import dialogReducer from "./dialogReducer";
import orderReducer from "./orderReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
    flower: flowerReducer,
    client: clientReducer,
    snackbar: snackbarReducer,
    dialog: dialogReducer,
    order: orderReducer,
    login: loginReducer
})

export default rootReducer