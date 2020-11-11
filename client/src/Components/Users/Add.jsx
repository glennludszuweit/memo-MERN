import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../Redux/Actions/users';

function Add() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(userData));
  };

  const clear = () => {};

  return (
    <div className='form'>
      <h1>Add User</h1>
      <form autoComplete='off' noValidate onSubmit={handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='name'
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          name='email'
          type='email'
          placeholder='email'
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          name='password'
          type='password'
          placeholder='password'
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <button type='submit'>Submit</button>
        <button onClick={clear}>Clear</button>
      </form>
    </div>
  );
}

export default Add;
