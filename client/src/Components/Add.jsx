import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { addPost } from '../Actions/posts';

function Add() {
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    tags: '',
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
        <input
          name='tags'
          type='text'
          placeholder='tags'
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div name='image' type='file'>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
          <button type='submit'>Submit</button>
          <button onClick={clear}>Clear</button>
        </div>
      </form>
    </div>
  );
}

export default Add;
