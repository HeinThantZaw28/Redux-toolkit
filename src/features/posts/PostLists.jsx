import React from "react";
import { useSelector } from "react-redux";
import PostAuthors from "./PostAuthors";
import ReactionButton from "./ReactionButton";
import TimeAgo from "./TimeAgo";

const PostLists = () => {
  const posts = useSelector((state) => state.posts);
  // console.log(posts);
  const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date));
  const renderedPost = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p className="postCredit">
        <PostAuthors userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButton post={post}/>
    </article>
  ));
  return (
    <div>
      <h2>Posts</h2>
      {renderedPost}
    </div>
  );
};

export default PostLists;
