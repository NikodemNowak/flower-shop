import {Action, Dispatch} from "redux";
import axios, {AxiosError} from "axios";
import {Client} from "../reducer/clientReducer";
import {
    FETCH_FLOWERS_FAILURE,
    FETCH_FLOWERS_SUCCESS,
    FetchFlowersFailureAction,
    FetchFlowersSuccessAction
} from "./flowerActions";

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

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {'Content-Type': 'application/json'}
})

const getClients = (dispatch: Dispatch) => {
    dispatch({type: FETCH_CLIENTS} as FetchClientsAction)

    instance.get('/clients/').then(r =>
        dispatch({type: FETCH_CLIENTS_SUCCESS, clients: r.data} as FetchClientsSuccessAction)
    ).catch(error => {
        dispatch({type: FETCH_CLIENTS_FAILURE, error: error as AxiosError} as FetchClientsFailureAction)
    })
}

const clientActions = {
    getClients
}

export default clientActions