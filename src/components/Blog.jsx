import React from "react";
import { Link } from "react-router-dom";
import { useGetBlogsQuery } from "../features/blogApi";
import BlogCard from "./BlogCard";

const Blog = () => {
  const { data: blogs } = useGetBlogsQuery();
  console.log(blogs);
  return (
    <>
      <div className=" flex justify-center items-center mt-10">
        <Link to={"/newBlog"}>
          <button className="px-3 py-2 rounded btn bg-slate-700 text-white">
            Create
          </button>
        </Link>
      </div>

      <div className=" justify-center items-center flex flex-wrap gap-3 my-10">
        {blogs?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default Blog;
