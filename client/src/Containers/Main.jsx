import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Add from '../Components/Add';
import Edit from '../Components/Edit';
import List from '../Components/List';
import View from '../Components/View';

function Main() {
  return (
    <div className='main'>
      <Switch>
        <Route exact path='/' component={List} />
        <Route path='/add' component={Add} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/:id' component={View} />
      </Switch>
    </div>
  );
}

export default Main;
