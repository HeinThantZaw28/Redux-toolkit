import React from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateBlogMutation } from "../features/blogApi";

const EditBlog = ({ editBlog, setEditBlog }) => {
  const [updateBlog] = useUpdateBlogMutation();
  const navigate = useNavigate();
  const updateHandler = (e) => {
    e.preventDefault();
    const updateDetails = {
      id: editBlog.id,
      title: editBlog.title,
      desc: editBlog.desc,
      image: editBlog.image,
    };
    // console.log(updateDetails);
    updateBlog(updateDetails);
    navigate("/");
  };
  return (
    <>
      <form action="" id="create" onSubmit={updateHandler}></form>
      <div className="mt-10 flex justify-center items-center h-screen">
        <div className="p-5 flex flex-col gap-7 w-52 border border-slate-900 rounded-md">
          <input
            value={editBlog.title}
            onChange={(e) =>
              setEditBlog({ ...editBlog, title: e.target.value })
            }
            form="create"
            type="text"
            placeholder="Title..."
            className="outline-none boder-b-2 border-b-slate-800"
          />
          <input
            value={editBlog.desc}
            onChange={(e) => setEditBlog({ ...editBlog, desc: e.target.value })}
            form="create"
            type="text"
            placeholder="Description..."
            className="outline-none boder-b-2 border-b-gray-800"
          />
          <input
            value={editBlog.image}
            onChange={(e) =>
              setEditBlog({ ...editBlog, image: e.target.value })
            }
            form="create"
            type="text"
            placeholder="Image..."
            className="outline-none boder-b-2 border-b-slate-800"
          />
          <button
            // disabled={!onSave}
            type="submit"
            form="create"
            className=" mx-auto px-3 py-2 rounded-md border-gray-500 border w-20"
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default EditBlog;
