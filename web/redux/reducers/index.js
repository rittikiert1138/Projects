import { combineReducers } from 'redux';
import users from './userReducer';
import alert from './alertReducer';
import product from './productReducer';

const rootReducer = combineReducers({
  users: users,
  alert: alert,
  product: product,
});

export default rootReducer;
