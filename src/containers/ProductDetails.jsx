import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct, fetchSelectedProduct } from '../redux/actions/productActions';

function ProductDetails() {

    const product = useSelector((state) => state.singleProduct);
    const {image, title, price, category, description} = product;
    const {product_id} = useParams();
    const dispatch = useDispatch();
    console.log(product);

    // const singleProduct = async () => {
    //     const res = await axios
    //         .get(`https://fakestoreapi.com/products/${product_id}`)
    //         .catch((err) => {
    //             console.log('error: ', err);
    //         });
    //     dispatch(selectedProduct(res.data));
    // }

    useEffect(() => {
        dispatch(fetchSelectedProduct(product_id));
        return () => dispatch(removeSelectedProduct()); // to clean up the state when i go back
    }, [product_id])

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails