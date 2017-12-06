import { GET_MESSAGES } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return action.payload.data;
    default:
      return state;
  }
};