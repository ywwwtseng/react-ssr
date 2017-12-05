import _ from 'lodash';
import history from '../history';
import socket from '../socket-client';

export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = ({ username, password }) => async (dispatch, getState, api) => {
  const res = await api.post('/login', { username, password });

  dispatch({
    type: USER_LOGIN,
    payload: res
  });

  history.push('/');
};

export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const getCurrentUser = () => async (dispatch, getState, api) => {
  try {
    const res = await api.get('/current_user');

    dispatch({
      type: GET_CURRENT_USER,
      payload: res
    });
  } catch (error) {
    dispatch({
      type: GET_CURRENT_USER,
      payload: false
    });
  }
};

export const GET_USERS = 'GET_USERS';
export const getUsers = () => async (dispatch, getState, api) => {
  const userId = _.get(getState(), ['auth', '_id'], null);

  try {

    if (process.env.BROWSER) {

      socket.emit('user-list', { userId });
      socket.on('user-list-response', (data) => {

        dispatch({
          type: GET_USERS,
          payload: data
        });
      });

    } else {

      const res = await api.get('/users');

      dispatch({
        type: GET_USERS,
        payload: res
      });

    }
  } catch (error) {
    throw error;
  }
};