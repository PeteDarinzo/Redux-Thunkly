import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./PostList.css";

const PostList = () => {

  const posts = useSelector(store => store.posts);


  const postIds = Object.keys(posts);

  return (
    <div>
      {postIds.map(id => {
        const post = posts[id];
        return (
          <Link
            key={id}
            to={`/${id}`}
            className="PostList-link">
            <p className="Postlist-title">{post.title}</p>
            <p><i>{post.description}</i></p>
          </Link>)
      })}
    </div>
  );
}

export default PostList;