import { FETCH_PRODUCTS, FETCH_PRODUCT } from '../actions/types';

const initialState = {
  loading: true,
  product: null,
  products: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: payload,
        product: null,
      };
    case FETCH_PRODUCT:
      return {
        ...state,
        loading: false,
        products: [],
        product: payload,
      };
    default:
      return state;
  }
}
