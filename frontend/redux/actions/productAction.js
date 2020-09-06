import axios from 'axios';
import { FETCH_PRODUCTS, FETCH_PRODUCT, FETCH_PRODUCT_FAIL, GET_CARTS } from './types';
import { setAlert } from './alertAction';
import { getCart } from './cartAction'

// Fetch products
export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/frontend/home');

    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data.products,
    });

    dispatch(getCart())

  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }

    dispatch({
      type: FETCH_PRODUCT_FAIL,
    });
  }
};

// Fetch product
export const fetchProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/frontend/product/${id}`
    );

    dispatch({
      type: FETCH_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }

    dispatch({
      type: FETCH_PRODUCT_FAIL,
    });
  }
};
