import {combineReducers} from 'redux';
import { productReducer, singleProductReducer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    singleProduct: singleProductReducer
})

export default reducers;