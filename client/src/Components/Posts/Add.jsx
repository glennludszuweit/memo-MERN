import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { addPost } from '../../Redux/Actions/posts';

function Add() {
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    image: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(postData));
  };

  const clear = () => {};

  return (
    <div className='form'>
      <h1>Add Post</h1>
      <form autoComplete='off' noValidate onSubmit={handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='title'
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <input
          name='message'
          type='text'
          placeholder='message'
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <FileBase
          type='file'
          multiple={false}
          onDone={async ({ base64 }) =>
            setPostData({ ...postData, image: base64 })
          }
        />
        <button type='submit'>Submit</button>
        <button onClick={clear}>Clear</button>
      </form>
    </div>
  );
}

export default Add;
