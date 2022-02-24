import React from "react";
import Comment from "./Comment";
import { Container, Row, Col } from "reactstrap";


const CommentList = ({ postId, comments, deleteComment }) => {

  const commentIds = Object.keys(comments);

  return (
    <Row className="justify-content-center">
      <hr></hr>
      <h3>Comments:</h3>
      <Col sm={6} md={4} className="mx-auto">
        {commentIds.map(id => (<Comment key={id} postId={postId} id={id} text={comments[id]} />))}
      </Col>
    </Row>
  );
}

export default CommentList;