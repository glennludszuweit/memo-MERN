import React from 'react';
import { useSelector } from 'react-redux';

function List() {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <h2>{post.title}</h2>
      ))}
    </div>
  );
}

export default List;
