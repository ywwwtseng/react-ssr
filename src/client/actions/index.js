import history from '../history';

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