import axios from 'axios';

const URL = 'http://localhost/posts';

export const fetchPost = () => axios.get(URL);
