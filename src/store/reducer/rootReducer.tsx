import {combineReducers} from "redux";
import flowerReducer from "./flowerReducer";

const rootReducer = combineReducers({
    flower: flowerReducer
})

export default rootReducer