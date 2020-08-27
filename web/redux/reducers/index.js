import { combineReducers } from 'redux';
import users from './userReducer';
import alert from './alertReducer'

const rootReducer = combineReducers({
  users: users,
  alert: alert
});

export default rootReducer;
