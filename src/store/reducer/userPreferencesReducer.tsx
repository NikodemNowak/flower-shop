import {UserPreferencesActions} from "../actions/userPreferencesActions";

export interface userPreferencesState {
    darkMode: boolean,
    firstName: string,
    lastName: string
}

const initialState: userPreferencesState = {
    darkMode: false,
    firstName: '',
    lastName: ''
}

const userPreferencesReducer = (state = initialState, action: UserPreferencesActions): userPreferencesState => {
    switch (action.type) {
        case "SAVE_PREFERENCES":
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName
            }
        case "DELETE_PREFERENCES":
            return {
                ...state,
                darkMode: false,
                firstName: '',
                lastName: ''
            }
        case "CHANGE_THEME_PREFERENCE":
            return {
                ...state,
                darkMode: action.darkMode
            }
        default:
            return {
                ...state
            }
    }
}

export default userPreferencesReducer