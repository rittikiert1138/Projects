import { ADD_ITEM, GET_CARTS, COUNT_PRICE } from '../actions/types';

const initialState = {
    loading: true,
    carts: [],
    totalprice: 0
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_ITEM:
            return {
                ...state,
                loading: false,
                carts: payload,
            };
        case GET_CARTS:
            return {
                ...state,
                loading: false,
                carts: payload,
                // totalprice: 100
            };

        case COUNT_PRICE:
            return {
                ...state,
                totalprice: payload
            }
        default:
            return state;
    }
}
