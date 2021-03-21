import {combineReducers} from "redux";
import flowerReducer from "./flowerReducer";
import clientReducer from "./clientReducer";
import snackbarReducer from "./snackbarReducer";
import dialogReducer from "./dialogReducer";
import orderReducer from "./orderReducer";
import loginReducer from "./loginReducer";
import authenticationReducer from "./authenticationReducer";
import userPreferencesReducer from "./userPreferencesReducer";

const rootReducer = combineReducers({
    flower: flowerReducer,
    client: clientReducer,
    snackbar: snackbarReducer,
    dialog: dialogReducer,
    order: orderReducer,
    login: loginReducer,
    authentication: authenticationReducer,
    userPreferences: userPreferencesReducer
})

export default rootReducer