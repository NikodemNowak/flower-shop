import {Action} from "redux";

export const SAVE_PREFERENCES = "SAVE_PREFERENCES"
export const DELETE_PREFERENCES = "DELETE_PREFERENCES"

export interface UserPreferencesSaveAction extends Action<typeof SAVE_PREFERENCES> {
    darkMode: boolean,
    firstName: string,
    lastName: string
}

export interface UserPreferencesDeleteAction extends Action<typeof DELETE_PREFERENCES> {
}

export type UserPreferencesActions =
    | UserPreferencesSaveAction
    | UserPreferencesDeleteAction