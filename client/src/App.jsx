import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './Actions/posts';
import Main from './Containers/Main';
import Nav from './Containers/Nav';

import './App.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Nav />
      <Main />
    </React.Fragment>
  );
}

export default App;
