import axios from 'axios';
import api from '../../utils/api'
import { setAlert } from './alert';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    GET_PROFILE,
    UPDATE_PROFILE
} from '../types.js';
import { API_URL } from '../../utils/config'

// Register User
export const registerSeller = (formData) => async (dispatch) => {
    try {
        const res = await axios.post(
            API_URL + '/apis/seller/register',
            formData
        );
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });

        dispatch(setAlert('Register success', 'success'));

        // setTimeout(function () {
        //     history.push('/login');
        // }, 3000);

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
        }

        dispatch({
            type: REGISTER_FAIL,
        });
    }
};

// Login User
export const loginSeller = (formData, history) => async (dispatch) => {

    try {
        const res = await axios.post(`${API_URL}/apis/seller/login`, formData);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });

        if (res.data) {
            localStorage.setItem('token', res.data.token)
        }

        history.push('/dashboard')

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
        }

        dispatch({
            type: LOGIN_FAIL,
        });
    }
};

// Logout
export const logout = () => async (dispatch) => {


    dispatch({
        type: LOGOUT,
    });

    localStorage.removeItem('token');

}

// Load User
export const loadUser = () => async (dispatch) => {
    try {
        const res = await api.get(`http://localhost:5000/apis/seller`);

        dispatch({
            type: USER_LOADED,
            payload: res.data,
        });

    } catch (err) {
        dispatch({
            type: AUTH_ERROR,
        });
    }
};

// Get profile
export const getProfile = () => async (dispatch) => {
    try {
        const res = await api.get(`http://localhost:5000/apis/seller/me`);

        dispatch({
            type: GET_PROFILE,
            payload: res.data,
        });

    } catch (err) {
        dispatch({
            type: AUTH_ERROR,
        });
    }
};

// Get profile
export const updateProfile = (formData) => async (dispatch) => {
    try {
        const res = await api.put(`http://localhost:5000/apis/seller/update-profile`, formData);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data,
        });

    } catch (err) {
        dispatch({
            type: AUTH_ERROR,
        });
    }
};