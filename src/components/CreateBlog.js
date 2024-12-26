import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    const blog = { title, content };
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    localStorage.setItem('blogs', JSON.stringify([...existingBlogs, blog]));
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <input 
        type="text" 
        placeholder="Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ReactQuill value={content} onChange={setContent} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default CreateBlog;