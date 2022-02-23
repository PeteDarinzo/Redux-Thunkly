import React from "react";
import { Link } from "react-router-dom";
import "./PostList.css";

const PostList = ({ posts }) => {

  return (
    <div>
      {posts.map(p => (
        <Link
          to={`/${p.id}`}
          key={p.id}
          className="PostList-link">
            <p className="Postlist-title">{p.title}</p>
            <p><i>{p.description}</i></p>
        </Link>
      ))}
    </div>
  );
}

export default PostList;