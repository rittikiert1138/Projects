import { combineReducers } from 'redux';
import users from './userReducer';

const rootReducer = combineReducers({
  users: users,
});

export default rootReducer;
