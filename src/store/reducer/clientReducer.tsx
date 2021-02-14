import {ClientActions} from "../actions/clientActions";

export interface Client {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string
}

interface ClientState {
    isLoading: boolean,
    clients: Client[]
}

const initialState: ClientState = {
    isLoading: false,
    clients: []
}

const clientReducer = (
    state = initialState,
    action: ClientActions
): ClientState => {
    switch (action.type) {
        case "FETCH_CLIENTS":
            return {
                ...state,
                isLoading: true
            }
        case "FETCH_CLIENTS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                clients: action.clients
            }
        case "FETCH_CLIENTS_FAILURE":
            return {
                ...state,
                isLoading: false,
                clients: []
            }
        default:
            return state;
    }
}

export default clientReducer;