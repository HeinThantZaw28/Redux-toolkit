import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useBlogDeletionMutation,
  useGetSingleBlogQuery,
} from "../features/blogApi";

const Detail = ({ setEditBlog }) => {
  const { id } = useParams();
  const { data: blog } = useGetSingleBlogQuery(id);
  const [blogDeletion] = useBlogDeletionMutation(id);
  const navigate = useNavigate();

  // console.log(blog);
  // console.log(editBlog);
  const deleteBlog = (id) => {
    if (confirm("Are you sure to delete?")) {
      blogDeletion(id);
      navigate("/");
    }
  };
  return (
    <div className="flex justify-center items-center mt-10">
      <div className=" mt-10 flex flex-col w-60 border border-gray-600 rounded p-5 gap-3">
        <h1 className="text-xl">Details of Blog {blog?.title}</h1>
        <img src={blog?.image} alt="" className="rounded shadow-xl w-48 h-48" />
        <p className="text-xl font-semibold">{blog?.title}</p>
        <p>{blog?.desc}</p>
        <div className=" flex justify-around">
          <button
            onClick={() => deleteBlog(blog?.id)}
            className="btn bg-red-700 text-white rounded px-3 py-1"
          >
            Delete
          </button>
          <button
            onClick={() => {
              setEditBlog({
                id: blog?.id,
                title: blog?.title,
                desc: blog?.desc,
                image: blog?.image,
              }),
                navigate("/edit");
            }}
            className="btn bg-yellow-700 text-white rounded px-3 py-1"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
