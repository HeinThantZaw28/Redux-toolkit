import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateBlogMutation } from "../features/blogApi";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const onSave = Boolean(title) && Boolean(desc) && Boolean(image);
  const [createBlog] = useCreateBlogMutation();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const newBlog = { id: Date.now(), title, desc, image };
    createBlog(newBlog);

    setTitle("");
    setDesc("");
    setImage("");
    navigate("/");
  };
  return (
    <>
      <form action="" id="create" onSubmit={submitHandler}></form>
      <div className="mt-10 flex justify-center items-center h-screen">
        <div className="p-5 flex flex-col gap-7 w-52 border border-slate-900 rounded-md">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            form="create"
            type="text"
            placeholder="Title..."
            className="outline-none boder-b-2 border-b-slate-800"
          />
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            form="create"
            type="text"
            placeholder="Description..."
            className="outline-none boder-b-2 border-b-gray-800"
          />
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            form="create"
            type="text"
            placeholder="Image..."
            className="outline-none boder-b-2 border-b-slate-800"
          />
          <button
            disabled={!onSave}
            type="submit"
            form="create"
            className=" mx-auto px-3 py-2 rounded-md border-gray-500 border w-20"
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default NewBlog;
