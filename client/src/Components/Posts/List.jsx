import React from 'react';
import { useSelector } from 'react-redux';

function List() {
  const posts = useSelector((state) => state.posts);

  return (
    <div className='main'>
      {posts.map((post) => (
        <div className='post-container' key={post._id}>
          <div className='image-container'>
            <img src={post.image} alt='' />
          </div>
          <div className='content'>
            <h1>{post._id}</h1>
            <h2>{post.title}</h2>
            <p>{post.message}</p>
            <div className='buttons'>
              <button>Preview</button>
              <button>Code</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
