import { combineReducers } from 'redux';
import posts from './Reducers/posts';
import users from './Reducers/users';

export default combineReducers({
  posts,
  users,
});
