import {Action, Dispatch} from "redux";
import axios, {AxiosError} from "axios";
import {Flower, NewFlower} from "../reducer/flowerReducer";
import instance from "./axios";

export const FETCH_FLOWERS = 'FETCH_FLOWERS'
export const FETCH_FLOWERS_SUCCESS = 'FETCH_FLOWERS_SUCCESS'
export const FETCH_FLOWERS_FAILURE = 'FETCH_FLOWERS_FAILURE'

export const SAVE_FLOWER = 'SAVE_FLOWER'
export const SAVE_FLOWER_SUCCESS = 'SAVE_FLOWER_SUCCESS'
export const SAVE_FLOWER_FAILURE = 'SAVE_FLOWER_FAILURE'

export const DELETE_FLOWER = 'DELETE_FLOWER'
export const DELETE_FLOWER_SUCCESS = 'DELETE_FLOWER_SUCCESS'
export const DELETE_FLOWER_FAILURE = 'DELETE_FLOWER_FAILURE'

export interface FetchFlowersAction extends Action<typeof FETCH_FLOWERS> {}
export interface FetchFlowersSuccessAction extends Action<typeof FETCH_FLOWERS_SUCCESS> { flowers: Flower[] }
export interface FetchFlowersFailureAction extends Action<typeof FETCH_FLOWERS_FAILURE> { error: AxiosError }

export interface SaveFlowerAction extends Action<typeof SAVE_FLOWER> {}
export interface SaveFlowerSuccessAction extends Action<typeof SAVE_FLOWER_SUCCESS> { flower: Flower }
export interface SaveFlowerFailureAction extends Action<typeof SAVE_FLOWER_FAILURE> { error: AxiosError }

export interface DeleteFlowerAction extends Action<typeof DELETE_FLOWER> {}
export interface DeleteFlowerSuccessAction extends Action<typeof DELETE_FLOWER_SUCCESS> {}
export interface DeleteFlowerFailureAction extends Action<typeof DELETE_FLOWER_FAILURE> { error: AxiosError }

export type FlowerActions =
    | FetchFlowersAction
    | FetchFlowersSuccessAction
    | FetchFlowersFailureAction
    | SaveFlowerAction
    | SaveFlowerSuccessAction
    | SaveFlowerFailureAction
    |DeleteFlowerAction
    |DeleteFlowerSuccessAction
    |DeleteFlowerFailureAction

const getFlowers = (dispatch: Dispatch) => {
    dispatch({type: FETCH_FLOWERS} as FetchFlowersAction)

    instance.get('/flowers/').then(r =>
        dispatch({type: FETCH_FLOWERS_SUCCESS, flowers: r.data} as FetchFlowersSuccessAction)
    ).catch(error => {
        dispatch({type: FETCH_FLOWERS_FAILURE, error: error as AxiosError} as FetchFlowersFailureAction)
    })
}

const saveFlower = (dispatch: Dispatch, newFlower: NewFlower) => {
    dispatch({type: SAVE_FLOWER} as SaveFlowerAction)

    instance.post('/flowers/', newFlower).then(r =>
        dispatch({type: SAVE_FLOWER_SUCCESS, flower: r.data} as SaveFlowerSuccessAction)
    ).catch(error => {
        console.log(JSON.stringify(error))
        dispatch({type: SAVE_FLOWER_FAILURE, error: error as AxiosError} as SaveFlowerFailureAction)
    })
}

const deleteFlower = (dispatch: Dispatch, id: number) => {
    dispatch({type: DELETE_FLOWER} as DeleteFlowerAction)

    instance.delete("/flowers/" + id + "/").then(r =>
        dispatch({type: DELETE_FLOWER_SUCCESS} as DeleteFlowerSuccessAction)
    ).catch(error => {
        console.log(JSON.stringify(error))
        dispatch({type: DELETE_FLOWER_FAILURE, error: error as AxiosError} as DeleteFlowerFailureAction)
    })
}

const flowerActions = {
    getFlowers,
    saveFlower,
    deleteFlower
}

export default flowerActions