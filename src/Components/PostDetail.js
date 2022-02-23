import React, { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";
import EditPostForm from "./EditPostForm";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const PostDetail = ({ posts, editPost, deletePost, addComment, deleteComment }) => {

  const { postId } = useParams();
  const history = useHistory();

  const { title, description, body, comments } = posts.find(p => postId === p.id);
  const [showEdit, setShowEdit] = useState(false);

  const toggleShowEdit = () => {
    setShowEdit(!showEdit);
  }

  const handleDelete = (e) => {
    e.preventDefault();
    deletePost(postId);
    history.push("/");
  }

  return (
    <Container>
      {showEdit ?
        <EditPostForm
          id={postId}
          title={title}
          description={description}
          body={body}
          editPost={editPost}
          toggleShowEdit={toggleShowEdit} />
        :
        <>
          <Row>
            <Col>
              <div className="mt-3">
                <h2>{title}</h2>
                <p><i>{description}</i></p>
              </div>
            </Col>
            <Col>
              <div className="mt-3">
                <Button color="primary" className="btn-sm" onClick={toggleShowEdit}>Edit</Button>
                <Button color="danger" className="btn-sm mx-1" onClick={handleDelete}><span className="material-icons-outlined">Delete</span></Button>
              </div>
            </Col>
          </Row>
          <Row>
            <div>
              <p>{body}</p>
            </div>
          </Row>
          <CommentList postId={postId} comments={comments} deleteComment={deleteComment} />
          <CommentForm postId={postId} addComment={addComment} />
        </>
      }
    </Container>
  );
}

export default PostDetail;