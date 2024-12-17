import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setProducts, fetchProducts } from '../redux/actions/productActions';
import ProductComponent  from './ProductComponent';

function ProductListing() {
    
    const dispatch = useDispatch();

    // const fetchProducts = async () => {
    //     const response = await axios
    //         .get('https://fakestoreapi.com/products')
    //         .catch((err) => {
    //             console.log('err', err);
    //         });
    //     dispatch(setProducts(response.data));
    // }

    useEffect(() => {
        dispatch(fetchProducts()); 
    }, [])
    // const products = useSelector((state) => state);
    // console.log(products)

  return (
    <div className='ui grid container'>
        <ProductComponent />
    </div>
  )
}

export default ProductListing