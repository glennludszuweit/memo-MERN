import React from 'react';
import { useSelector } from 'react-redux';

function List() {
  const users = useSelector((state) => state.users);

  return (
    <div className='main'>
      {users.map((user) => (
        <div key={user._id}>
          <h1>{user.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default List;
