import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const getUsers = () => async dispatch => {
  const res = await axios.get('https://react-ssr-api.herokuapp.com/users');

  dispatch({
    type: GET_USERS,
    payload: res
  });
};