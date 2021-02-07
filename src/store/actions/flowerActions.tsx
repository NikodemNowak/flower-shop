import {Action, Dispatch} from "redux";
import {AxiosError} from "axios";
import {Flower} from "../reducer/flowerReducer";

export const FETCH_FLOWERS = 'FETCH_FLOWERS'
export const FETCH_FLOWERS_SUCCESS = 'FETCH_FLOWERS_SUCCESS'
export const FETCH_FLOWERS_FAILURE = 'FETCH_FLOWERS_FAILURE'

export interface FetchFlowersAction extends Action<typeof FETCH_FLOWERS> {}
export interface FetchFlowersSuccessAction extends Action<typeof FETCH_FLOWERS_SUCCESS> { flowers: Flower[] }
export interface FetchFlowersFailureAction extends Action<typeof FETCH_FLOWERS_FAILURE> { error: AxiosError }

export type FlowerActions =
    | FetchFlowersAction
    | FetchFlowersSuccessAction
    | FetchFlowersFailureAction

const flowers = [
    {
        id: 1,
        name: 'costam',
        description: 'costam',
        price: 10.50
    },
    {
        id: 2,
        name: 'costam2222',
        description: 'costam2d2d2d',
        price: 100.50
    }
]

const getFlowers = (dispatch: Dispatch) => {
    dispatch({type: FETCH_FLOWERS} as FetchFlowersAction)

    // flowerService.getFlowers()
    //     .then(result => {
    //         // udalo sie
    //         dispatch({type: FETCH_FLOWERS_SUCCESS, flowers: result.data} as FetchFlowersSuccessAction)
    //     })
    //     .catch(error => {
    //         // jednak sie nie udalo
    //         //dispatch({type: FETCH_FLOWERS_FAILURE, error: error as AxiosError} as FetchFlowersFailureAction)
    //     })

    // ladujemy kwiatkit

    // dla przykladu
            dispatch({type: FETCH_FLOWERS_SUCCESS, flowers: flowers} as FetchFlowersSuccessAction)



}

const flowerActions = {
    getFlowers
}

export default flowerActions