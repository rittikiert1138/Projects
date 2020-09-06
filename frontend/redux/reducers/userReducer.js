import {
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
  AUTH_ERROR,
  LOGOUT,
  GET_CARTS,
  REMOVE_CART
} from '../actions/types';

const initialState = {
  token: null,
  isAuthenticated: null,
  loading: true,
  user: null,
  carts: []
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: false,
        loading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_ERROR:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    case GET_CARTS:
      return {
        ...state,
        carts: payload
      };
    case REMOVE_CART:
      return {
        ...state,
        carts: []
      };
    default:
      return state;
  }
}
