import {
    CREATE_PRODUCT,
    GET_PRODUCTS,
    GET_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} from '../actions/types';

const initialState = {
    loading: true,
    product: null,
    products: []
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_PRODUCT:
            return {
                ...state,
                ...payload,
                loading: false,
            };
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload,
                loading: false,
                product: null,
            };
        case GET_PRODUCT:
        case UPDATE_PRODUCT:
            return {
                ...state,
                product: payload,
                loading: false
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                posts: state.products.filter(product => product._id !== payload),
                loading: false
            };
        default:
            return state;
    }
}
