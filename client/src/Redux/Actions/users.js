import * as api from '../../API';

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getUsers();
    dispatch({ type: 'GET_USERS', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.addUser(user);
    dispatch({ type: 'ADD_USER', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
