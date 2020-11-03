import axios from 'axios';

const URL = 'http://localhost:5000/posts';

export const getPosts = () => axios.get(URL);
export const addPost = (newPost) => axios.post(URL, newPost);
