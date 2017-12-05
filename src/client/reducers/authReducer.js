import {
  GET_CURRENT_USER,
  USER_LOGIN
} from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case USER_LOGIN:
    case GET_CURRENT_USER:
      return action.payload.data || false;

    default:
      return state;
  }
};