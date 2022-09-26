import React from "react";
import "./Blog.css";

import { blog1, blog2, blog3 } from "../../assets";

const Blog = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-title">Blog</h2>
      <div className="blog-content">
        <div className="mini-blog">
          <img src={blog1} alt="" />
          <h3>Check Your Engine Now!</h3>
          <button>Read More</button>
          <hr />
        </div>
        <div className="mini-blog">
          <img src={blog2} alt="" />
          <h3>I'm Tired With Tires</h3>
          <button>Read More</button>
          <hr />
        </div>
        <div className="full-blog">
          <img src={blog3} alt="" />
          <h3>Basic stuff to adjust your belt</h3>
          <button>Read More</button>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Blog;
