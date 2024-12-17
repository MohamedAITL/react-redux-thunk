import fakeStoreApi from '../../apis/fakeStoreApi';
import {ActionTypes} from '../constants/action-types';

export const fetchProducts = () => {
    return async (dispatch) => {
        const res = await fakeStoreApi.get('/products'); 

        dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: res.data})
    }
}

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const fetchSelectedProduct = (product_id) => {
    return async (dispatch) => {
        const res = await fakeStoreApi.get(`/products/${product_id}`); 

        dispatch({type: ActionTypes.FETCH_SELECTED_PRODUCT, payload: res.data})
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}