import {Action, Dispatch} from "redux";
import {AxiosError} from "axios";
import {Client} from "../reducer/clientReducer";

export const FETCH_CLIENTS = 'FETCH_CLIENTS'
export const FETCH_CLIENTS_SUCCESS = 'FETCH_CLIENTS_SUCCESS'
export const FETCH_CLIENTS_FAILURE = 'FETCH_CLIENTS_FAILURE'

export interface FetchClientsAction extends Action<typeof FETCH_CLIENTS> {
}

export interface FetchClientsSuccessAction extends Action<typeof FETCH_CLIENTS_SUCCESS> {
    clients: Client[]
}

export interface FetchClientsFailureAction extends Action<typeof FETCH_CLIENTS_FAILURE> {
    error: AxiosError
}

export type ClientActions =
    | FetchClientsAction
    | FetchClientsSuccessAction
    | FetchClientsFailureAction

const getClients = (dispatch: Dispatch) => {
    dispatch({type: FETCH_CLIENTS} as FetchClientsAction)

}

const clientActions = {
    getClients
}

export default clientActions