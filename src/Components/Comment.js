import React from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { deleteComment } from "../Actions/actions";

const Comment = ({ postId, id, text }) => {

  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteComment(postId, id));
  }

  return (
    <p className="text-start"><Button color="danger" className="btn-sm m-1" onClick={handleDelete}>X</Button>{text}</p>
  );
}

export default Comment;