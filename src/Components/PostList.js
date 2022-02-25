import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./PostList.css";
import { fetchTitles } from "../Actions/actions";


const PostList = () => {

  const titles = useSelector(store => store.titles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTitles());
  }, [dispatch]);

  const postIds = Object.keys(titles);

  return (
    <div>
      {postIds.map(id => {
        const post = titles[id];
        return (
          <Link
            key={id}
            to={`/${post.id}`}
            className="PostList-link">
            <p className="Postlist-title">{post.title}</p>
            <p><i>{post.description}</i></p>
          </Link>);
      })}
    </div>
  );
}

export default PostList;