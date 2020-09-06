import { combineReducers } from 'redux';
import users from './userReducer';
import alert from './alertReducer';
import product from './productReducer';
import cart from './cartReducer'

const rootReducer = combineReducers({
  users: users,
  alert: alert,
  product: product,
  cart: cart
});

export default rootReducer;
