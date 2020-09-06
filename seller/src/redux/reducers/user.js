import { REGISTER_SUCCESS, USER_LOADED, LOGIN_SUCCESS, AUTH_ERROR, LOGOUT } from '../types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuth: null,
    loading: true,
    user: null,
    status: false
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuth: true,
                loading: false,
                user: payload,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuth: false,
                loading: false,
                status: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuth: true,
                loading: false,
            };
        case AUTH_ERROR:
        case LOGOUT:
            return {
                ...state,
                token: null,
                isAuth: false,
                loading: false,
                user: null,
            };
        default:
            return state;
    }
}
