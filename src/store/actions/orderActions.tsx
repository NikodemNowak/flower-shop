import {Action, Dispatch} from "redux";
import axios, {AxiosError} from "axios";
import {Order} from "../reducer/orderReducer";
import instance from "./axios";

export const FETCH_ORDERS = 'FETCH_ORDERS'
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS'
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE'

export interface FetchOrdersAction extends Action<typeof FETCH_ORDERS> {
}

export interface FetchOrdersSuccessAction extends Action<typeof FETCH_ORDERS_SUCCESS> {
    orders: Order[]
}

export interface FetchOrdersFailureAction extends Action<typeof FETCH_ORDERS_FAILURE> {
    error: AxiosError
}

export type OrderActions =
    | FetchOrdersAction
    | FetchOrdersSuccessAction
    | FetchOrdersFailureAction

instance.interceptors.request.use(request => {
    const token = localStorage.getItem("accessToken")
    if (token != null) {
        request.headers = {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'}
    }

    console.log('Starting Request', JSON.stringify(request, null, 2))
    return request
})

instance.interceptors.response.use(response => {
    console.log('Response:', JSON.stringify(response, null, 2))
    return response
})

const getOrders = (dispatch: Dispatch) => {
    dispatch({type: FETCH_ORDERS} as FetchOrdersAction)

    instance.get('/orders/').then(r =>
        dispatch({type: FETCH_ORDERS_SUCCESS, orders: r.data} as FetchOrdersSuccessAction)
    ).catch(error => {
        dispatch({type: FETCH_ORDERS_FAILURE, error: error as AxiosError} as FetchOrdersFailureAction)
    })
}

const orderActions = {
    getOrders
}

export default orderActions