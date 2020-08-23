import axios from 'axios';
import history from '../../utils/history'
import { browserHistory } from 'react-router-dom'
import api from '../../utils/api';
import { setAlert } from './alertAction';
import {
    CREATE_PRODUCT,
    GET_PRODUCTS,
    GET_PRODUCT,
    UPDATE_PRODUCT,
    PRODUCT_ERROR
} from './types';
import { API_URL } from '../../utils/config'

// Register User
export const addProduct = (formData, history) => async (dispatch) => {
    try {
        const res = await axios.post(
            API_URL + '/api/product/store',
            formData
        );
        dispatch({
            type: CREATE_PRODUCT,
            payload: res.data,
        });

        dispatch(setAlert('Insert data success', 'success'));

        history.push('/backend/product');

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }

        // dispatch({
        //     type: REGISTER_FAIL,
        // });
    }
};

// get all product
export const getProducts = () => async (dispatch) => {
    try {
        const res = await axios.get(API_URL + '/api/product');
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data,
        });

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
    }
};

// get all product
export const getProduct = (id) => async (dispatch) => {
    try {
        const res = await axios.get(API_URL + `/api/product/edit/${id}`);
        dispatch({
            type: GET_PRODUCT,
            payload: res.data,
        });


    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
    }
};

// get all product
export const updateProduct = (id, formData, history) => async (dispatch) => {
    try {
        const res = await axios.put(API_URL + `/api/product/update/${id}`, formData);
        dispatch({
            type: UPDATE_PRODUCT,
            payload: res.data,
        });

        dispatch(setAlert('Update data success', 'success'));

        history.push('/backend/product');

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
    }
};

// Delete post
export const deleteProduct = id => async dispatch => {
    try {
        if (window.confirm("Press a button!")) {
            const res = await axios.delete(API_URL + `/api/product/destroy/${id}`);

            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            });

            dispatch(setAlert('Delete data success', 'success'));
        }

    } catch (err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};