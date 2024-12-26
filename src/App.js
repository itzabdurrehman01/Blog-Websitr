import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import ViewBlogs from './components/ViewBlogs';
import BlogDetail from './components/BlogDetail';
import './App.css';
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/create">Create Blog</Link></li>
            <li><Link to="/blogs">View Blogs</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/blogs" element={<ViewBlogs />} />
          <Route path="/" element={<ViewBlogs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;