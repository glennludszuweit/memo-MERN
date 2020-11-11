import * as api from '../../API';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();
    dispatch({ type: 'GET_POSTS', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.addPost(post);
    dispatch({ type: 'ADD_POST', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
