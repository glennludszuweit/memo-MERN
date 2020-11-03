import React from 'react';
import Main from './Containers/Main';
import Nav from './Containers/Nav';

import './App.scss';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Main />
    </React.Fragment>
  );
}

export default App;
