import { ActionTypes } from "../constants/action-types";

const initState = {
    products: []
}

export const productReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};

        case ActionTypes.FETCH_PRODUCTS:
            return {...state, products: payload};

        default:
            return state;
    }
} 

export const singleProductReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case ActionTypes.FETCH_SELECTED_PRODUCT:
            return {...state, ...payload}

        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}

        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        
        default:
            return state;
    }
}