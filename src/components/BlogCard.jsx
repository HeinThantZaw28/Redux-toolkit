import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className=" mt-10 flex flex-col w-60 border border-gray-600 rounded p-5 gap-3">
      <img src={blog.image} alt="" className="rounded shadow-xl w-48 h-48" />
      <p>{blog.title}</p>
      <p>{blog.desc}</p>
      <Link to={`/details/${blog.id}`}>
        <button className="btn bg-slate-700 text-white rounded px-3 py-1">
          Details
        </button>
      </Link>
    </div>
  );
};

export default BlogCard;
