import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../Actions/actions";
import EditPostForm from "./EditPostForm";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { Redirect } from "react-router-dom";
import { fetchPost } from "../Actions/actions";
import "./PostDetail.css";

const PostDetail = () => {

  const { postId } = useParams();
  // const posts = useSelector(store => store.posts);

  const dispatch = useDispatch();
  const history = useHistory();
  const [showEdit, setShowEdit] = useState(false);

  // const post = posts[postId];

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, []);

  const post = useSelector(store => store.post);

  // if (postId !== post.id) return (<Redirect to="/" />);

  const { title, description, body, comments } = post;

  const toggleShowEdit = () => {
    setShowEdit(!showEdit);
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
                <Button color="danger" className="btn-sm mx-1" onClick={handleDeletePost}><span className="material-icons-outlined">Delete</span></Button>
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