import React from "react";
import Comment from "./Comment";
import { Container, Row, Col } from "reactstrap";


const CommentList = ({ postId, comments }) => {

  return (
    <Row className="justify-content-center">
      <hr></hr>
      <h3>Comments:</h3>
      <Col sm={6} md={4} className="mx-auto">
        {comments.map(c => (<Comment key={c.id} postId={postId} id={c.id} text={c.text} />))}
      </Col>
    </Row>
  );
}

export default CommentList;