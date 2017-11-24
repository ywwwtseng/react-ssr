import { GET_ADMINS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case GET_ADMINS:
      return action.payload.data;

    default:
      return state;
  }
};