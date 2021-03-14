import {AuthenticationActions} from "../actions/authenticationActions";

export interface isLoggedInState {
    isLoggedIn: boolean
}

const initialState: isLoggedInState = {
    isLoggedIn: false
}

const authenticationReducer = (state = initialState, action: AuthenticationActions): isLoggedInState => {
    switch (action.type){
        case "AUTHENTICATION_SUCCESS":
            return{
                ...state,
                isLoggedIn: true
            }
        case "AUTHENTICATION_FAILURE":
            return {
                ...state,
                isLoggedIn: false
            }
        default:
            return {
                ...state
            }
    }
}

export default authenticationReducer