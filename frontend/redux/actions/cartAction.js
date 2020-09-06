import axios from 'axios';
import { GET_CARTS, COUNT_PRICE } from './types';
import api from '../../utils/api'

export const getCart = () => async (dispatch) => {

    try {
        const res = await api.get('http://localhost:5000/api/user/cart');

        dispatch({
            type: GET_CARTS,
            payload: res.data.allcarts,
        });

        dispatch({
            type: COUNT_PRICE,
            payload: res.data.totalPrice,
        });

    } catch (err) {
        console.log(err)
    }
};

export const addItemToCart = (product_id) => async (dispatch) => {
    try {
        const { data } = await api.post('http://localhost:5000/api/user/cart', {
            product_id,
        });

        dispatch({
            type: GET_CARTS,
            payload: data,
        });

        dispatch(getCart())

    } catch (err) {
        console.log(err)
    }
};

export const deleteCartItem = (id) => async (dispatch) => {
    try {
        if (window.confirm("You want delete data !")) {
            const res = await api.delete(`http://localhost:5000/api/cart/destroy/${id}`)

            dispatch({
                type: GET_CARTS,
                payload: res.data,
            });

            dispatch({
                type: COUNT_PRICE,
                payload: parseInt(res.data.length) * 10,
            });

        }

    } catch (err) {
        console.log(err)
    }
};

export const decreaseQuantity = (id) => async (dispatch) => {
    try {
        const res = await api.put(`http://localhost:5000/api/cart/decrease/${id}`)

        dispatch({
            type: GET_CARTS,
            payload: res.data,
        });


    } catch (err) {
        console.log(err)
    }
};

export const increaseQuantity = (id) => async (dispatch) => {
    try {
        const res = await api.put(`http://localhost:5000/api/cart/increase/${id}`)

        dispatch({
            type: GET_CARTS,
            payload: res.data,
        });

    } catch (err) {
        console.log(err)
    }
};