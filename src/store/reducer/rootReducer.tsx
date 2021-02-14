import {combineReducers} from "redux";
import flowerReducer from "./flowerReducer";
import clientReducer from "./clientReducer";

const rootReducer = combineReducers({
    flower: flowerReducer,
    client: clientReducer
})

export default rootReducer