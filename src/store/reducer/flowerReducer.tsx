import {FETCH_FLOWERS, FETCH_FLOWERS_FAILURE, FETCH_FLOWERS_SUCCESS, FlowerActions} from "../actions/flowerActions";

export interface Flower {
    id: number,
    name: string,
    description: string,
    price: number
}

interface FlowerState {
    isLoading: boolean,
    flowers: Flower[]
}

const initialState: FlowerState = {
    isLoading: false,
    flowers: []
}

const flowerReducer = (
    state = initialState,
    action: FlowerActions
): FlowerState => {
    switch (action.type) {
        case FETCH_FLOWERS:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_FLOWERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                flowers: action.flowers
            }
        case FETCH_FLOWERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                flowers: []
            }
        default:
            return state;
    }
}

export default flowerReducer;