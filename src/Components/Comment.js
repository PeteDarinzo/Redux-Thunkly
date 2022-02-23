import React from "react";
import { Button } from "reactstrap";


const Comment = ({ postId, id, text, deleteComment }) => {

  const handleDelete = (e) => {
    e.preventDefault();
    deleteComment(postId, id);
  }
  return (
    <p className="text-start"><Button color="danger" className="btn-sm m-1" onClick={handleDelete}>X</Button>{text}</p>
  );
}

export default Comment;