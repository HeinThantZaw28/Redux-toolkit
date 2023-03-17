import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdd } from "./postSlice";

const AddPostsForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const onSavePostClick = () => {
    if (title && content) {
      dispatch(postAdd(title, content, userId));
      setTitle("");
      setContent("");
    } else {
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  // console.log(userOptions.user);
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <section>
      <h2 style={{ fontStretch: "italic" }}>Add a New Post</h2>
      <form action="">
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value="">Select Author</option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Post Content:</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={onSavePostClick} disabled={!canSave}>
          Add Post
        </button>
      </form>
    </section>
  );
};

export default AddPostsForm;
