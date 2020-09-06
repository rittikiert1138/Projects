import axios from 'axios';
import api from '../../utils/api';
import { setAlert } from './alertAction';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';
import { API_URL } from '../../utils/config'

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('http://localhost:5000/api/admin');

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
export const registerUser = (formData, history) => async (dispatch) => {
  try {
    const res = await axios.post(
      API_URL + '/api/admin/register',
      formData
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('Register success', 'success'));

    setTimeout(function () {
      history.push('/login');
    }, 3000);

    //
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
export const login = (formData) => async (dispatch) => {

  try {
    const res = await axios.post(`${API_URL}/api/admin/login`, formData);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

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
export const logout = () => ({ type: LOGOUT });
