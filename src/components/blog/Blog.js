import React from "react";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="mini-blog">
        {/* <img src="" alt="" /> */}
        <h3>Check Your Engine Now!</h3>
        <button>Read More</button>
        <hr />
      </div>
      <div className="mini-blog">
        {/* <img src="" alt="" /> */}
        <h3>I'm Tired With Tires</h3>
        <button>Read More</button>
        <hr />
      </div>
      <div className="full-blog">
        {/* <img src="" alt="" /> */}
        <h3>Basic stuff to adjust your belt</h3>
        <button>Read More</button>
        <hr />
      </div>
    </div>
  );
};

export default Blog;
