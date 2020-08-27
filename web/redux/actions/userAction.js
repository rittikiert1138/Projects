import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, USER_LOADED, LOGIN_FAIL, AUTH_ERROR, LOGOUT } from './types'
import { setAlert } from './alertAction'
import Router from 'next/router';
import api from '../../utils/api'

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('http://localhost:5000/api/user');

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

// Register User
export const registerUser = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      'http://localhost:5000/api/user/register',
      formData
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('Register success', 'success'));

    setTimeout(function () {
      Router.push('/login');
    }, 3000);

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
export const loginUser = (formData) => async (dispatch) => {

  try {
    const res = await axios.post(`http://localhost:5000/api/user/login`, formData);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    if (res.data) {
      localStorage.setItem('token', res.data.token)
    }

    dispatch(loadUser());

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