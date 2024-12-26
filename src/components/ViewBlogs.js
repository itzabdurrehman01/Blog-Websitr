import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ViewBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(existingBlogs);
  }, []);

  return (
    <div>
      <h2>View Blogs</h2>
      {blogs.map((blog, index) => (
        <div key={index}>
          <Link to={`/blogs/${index}`}>
            <h3>{blog.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ViewBlogs;