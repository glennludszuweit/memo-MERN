import React from 'react';
import { useSelector } from 'react-redux';

function List() {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <div>
          <h2>{post.title}</h2>
          <img src={post.image} alt='' />
        </div>
      ))}
    </div>
  );
}

export default List;
