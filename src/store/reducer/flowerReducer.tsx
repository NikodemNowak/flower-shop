import {
    DELETE_FLOWER,
    DELETE_FLOWER_FAILURE,
    DELETE_FLOWER_SUCCESS,
    FETCH_FLOWERS,
    FETCH_FLOWERS_FAILURE,
    FETCH_FLOWERS_SUCCESS,
    FlowerActions,
    SAVE_FLOWER,
    SAVE_FLOWER_FAILURE,
    SAVE_FLOWER_SUCCESS
} from "../actions/flowerActions";

export interface Flower {
    id: number,
    name: string,
    description: string,
    price: number,
    photo: string
}

export interface NewFlower {
    name: string,
    description: string,
    price: number,
    photo: string
}

interface FlowerState {
    isLoading: boolean,
    savedFlower: Flower | null,
    flowers: Flower[]
}

const initialState: FlowerState = {
    isLoading: false,
    savedFlower: null,
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
        case SAVE_FLOWER:
            return {
                ...state,
                isLoading: true
            }
        case SAVE_FLOWER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                savedFlower: action.flower
            }
        case SAVE_FLOWER_FAILURE:
            return {
                ...state,
                isLoading: false,
                savedFlower: null
            }
        case DELETE_FLOWER:
            return {
                ...state,
                isLoading: true
            }
        case DELETE_FLOWER_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case DELETE_FLOWER_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}

export default flowerReducer;