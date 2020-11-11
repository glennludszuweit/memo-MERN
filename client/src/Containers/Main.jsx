import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddPost from '../Components/Posts/Add';
import PostList from '../Components/Posts/List';
import AddUser from '../Components/Users/Add';
import UserList from '../Components/Users/List';

function Main() {
  return (
    <div className='main'>
      <Switch>
        <Route exact path='/' component={PostList} />
        <Route path='/Killdsug@r666' component={AddPost} />
        <Route path='/users/add' component={AddUser} />
        <Route path='/users' component={UserList} />
      </Switch>
    </div>
  );
}

export default Main;
