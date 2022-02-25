import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, votePost } from "../Actions/actions";
import EditPostForm from "./EditPostForm";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { Redirect } from "react-router-dom";
import { fetchPost } from "../Actions/actions";
import "./PostDetail.css";


const PostDetail = () => {

  const { postId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, []);

  const post = useSelector(store => store.post);

  const { title, description, body, votes, comments } = post;

  const toggleShowEdit = () => {
    setShowEdit(!showEdit);
  }

  function handleUpvote(e) {
    e.preventDefault();
    dispatch(votePost(postId, "up"));
  }

  function handleDownvote(e) {
    e.preventDefault();
    dispatch(votePost(postId, "down"));
  }

  function handleDeletePost(e) {
    e.preventDefault();
    dispatch(deletePost(postId))
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
                <Button color="danger" className="btn-sm mx-1" onClick={handleDeletePost}>Delete</Button>
              </div>
              <div className="mt-3">
                <span className="mx-2">Votes: {votes}</span>
                <Button color="success" className="btn-sm" onClick={handleUpvote}>Vote Up</Button>
                <Button color="danger" className="btn-sm mx-1" onClick={handleDownvote}>Vote Down</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="PostDetail">
              <p>{body}</p>
            </div>
          </Row>
          {comments && <CommentList postId={postId} comments={comments} />}
          <CommentForm postId={postId} />
        </>
      }
    </Container>
  );
}

export default PostDetail;