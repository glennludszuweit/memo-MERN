import axios from 'axios';

//POSTS
const POSTS = 'http://localhost:5000/posts';
export const getPosts = () => axios.get(POSTS);
export const addPost = (newPost) => axios.post(POSTS, newPost);

//USERS
const USERS = 'http://localhost:5000/users';
export const getUsers = () => axios.get(USERS);
export const addUser = (newUser) => axios.post(USERS, newUser);
