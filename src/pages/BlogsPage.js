import React from "react";
import allBlogs from "../components/allBlogs";
import Title from "../components/Title";

const BlogsPage = () => {
  return (
    <div>
      <div className="blog-title">
        <Title title={"Recent Blogs"} span={"Recent Blogs"} />
      </div>
      <div className="blogs-page">
        {allBlogs.map((blog) => {
          return (
            <div className="blog" key={blog.id}>
              <div className="blog-content">
                <img src={blog.image} alt="blog" />
                <a href={blog.link} className="blog-link">
                  {blog.title}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsPage;
