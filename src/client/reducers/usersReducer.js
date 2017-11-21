import { GET_USERS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload.data;
    default:
      return state;
  }
};