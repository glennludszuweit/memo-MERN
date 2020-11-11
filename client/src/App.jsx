import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './Redux/Actions/posts';
import { getUsers } from './Redux/Actions/users';
import Main from './Containers/Main';
import Nav from './Containers/Nav';

import './App.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Nav />
      <Main />
    </React.Fragment>
  );
}

export default App;
