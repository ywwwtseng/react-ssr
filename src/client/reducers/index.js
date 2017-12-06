import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import messagesReducer from './messagesReducer';

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  messages: messagesReducer
});