import {Action, Dispatch} from "redux";
import instance from "./axios";

export const SAVE_PREFERENCES = "SAVE_PREFERENCES"
export const DELETE_PREFERENCES = "DELETE_PREFERENCES"
export const CHANGE_THEME_PREFERENCE = "CHANGE_THEME_PREFERENCE"

export interface UserPreferencesSaveAction extends Action<typeof SAVE_PREFERENCES> {
    firstName: string,
    lastName: string
}

export interface UserPreferencesDeleteAction extends Action<typeof DELETE_PREFERENCES> {
}

export interface ChangeThemeAction extends Action<typeof CHANGE_THEME_PREFERENCE> {
    darkMode: boolean,
}

export type UserPreferencesActions =
    | UserPreferencesSaveAction
    | UserPreferencesDeleteAction
    | ChangeThemeAction

const changeTheme = (dispatch: Dispatch, darkMode: Boolean) => {
    dispatch({type: CHANGE_THEME_PREFERENCE, darkMode: darkMode} as ChangeThemeAction)
    localStorage.setItem("darkMode", String(darkMode))
}

const getUserInfo = (dispatch: Dispatch) => {
    instance.get('/api/currentUser/').then(r => {
        console.log(r.data)
    })
}

const userPreferencesActions = {
    changeTheme,
    getUserInfo
}

export default userPreferencesActions