import {Flower} from "./flowerReducer";
import {Client} from "./clientReducer";
import {OrderActions} from "../actions/orderActions";

interface Status {
    id: number,
    name: string
}

export interface Order {
    id: number,
    flowers: Flower[],
    client: Client,
    sum: number,
    status: Status
}

interface OrderState {
    isLoading: boolean,
    orders: Order[]
}

const initialState: OrderState = {
    isLoading: false,
    orders: []
}

const orderReducer = (
    state = initialState,
    action: OrderActions
): OrderState => {
    switch (action.type) {
        case "FETCH_ORDERS":
            return {
                ...state,
                isLoading: true
            }
        case "FETCH_ORDERS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                orders: action.orders
            }
        case "FETCH_ORDERS_FAILURE":
            return {
                ...state,
                isLoading: false,
                orders: []
            }
        default:
            return {
                ...state
            }
    }
}

export default orderReducer