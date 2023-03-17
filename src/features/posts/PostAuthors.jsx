import React from "react";
import { useSelector } from "react-redux";

const PostAuthors = ({ userId }) => {
    const users = useSelector((state) => state.users);
    // console.log(userId);
  const author = users.find((user) => user.id == userId);
  return (
    <>
      <span>by {author ? author.name : "Unknown Author"}</span>
    </>
  );
};

export default PostAuthors;
