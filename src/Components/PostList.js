import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "reactstrap";
import "./PostList.css";
import { fetchTitles, voteTitle } from "../Actions/actions";


const PostList = () => {

  const titles = useSelector(store => store.titles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTitles());
  }, [dispatch]);

  function handleUpvote(e, postId) {
    e.preventDefault();
    dispatch(voteTitle(postId, "up"));
  }

  function handleDownvote(e, postId) {
    e.preventDefault();
    dispatch(voteTitle(postId, "down"));
  }

  return (
    <div>
      {titles && titles.map(t => {
        return (
          <Link
            key={t.id}
            to={`/${t.id}`}
            className="PostList-link">
            <p className="Postlist-title">{t.title}</p>
            <p><i>{t.description}</i></p>
            <p><span className="mx-2">Votes: {t.votes}</span>
              <Button color="success" className="btn-sm" onClick={(e) => { handleUpvote(e, t.id) }}>Vote Up</Button>
              <Button color="danger" className="btn-sm mx-1" onClick={(e) => { handleDownvote(e, t.id) }}>Vote Down</Button>
            </p>
          </Link>);
      })}
    </div>
  );
}

export default PostList;