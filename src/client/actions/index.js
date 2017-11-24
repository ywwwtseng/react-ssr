export const GET_USERS = 'GET_USERS';
export const getUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');

  dispatch({
    type: GET_USERS,
    payload: res
  });
};

export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const getCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');

  dispatch({
    type: GET_CURRENT_USER,
    payload: res
  });
};