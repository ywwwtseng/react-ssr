export const GET_USERS = 'GET_USERS';
export const getUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');

  dispatch({
    type: GET_USERS,
    payload: res
  });
};