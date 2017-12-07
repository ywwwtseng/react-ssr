import history from '../history';

export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = ({ username, password }) => async (dispatch, getState, api) => {

  try {
    const res = await api.post('/login', { username, password });

    dispatch({
      type: USER_LOGIN,
      payload: res
    });

    history.push('/');
  } catch (error) {
    throw error;
  }
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
export const getUsers = socket => async (dispatch, getState, api) => {
  try {

    if (process.env.BROWSER && socket) {

      socket.emit('user-list');
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

export const GET_MESSAGES = 'GET_MESSAGES';
export const getMessages = socket => async (dispatch, getState, api) => {
  try {

    if (process.env.BROWSER && socket) {

      socket.emit('messages');
      socket.on('messages-response', (data) => {

        dispatch({
          type: GET_MESSAGES,
          payload: data
        });
      });

    } else {

      const res = await api.get('/messages');

      dispatch({
        type: GET_MESSAGES,
        payload: res
      });

    }
  } catch (error) {

    throw error;

  }
};