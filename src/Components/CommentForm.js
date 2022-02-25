import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { addComment } from "../Actions/actions";
import { useDispatch } from "react-redux";
import "./NewPostForm.css";

const CommentForm = ({ postId }) => {

  const initialState = {
    text: ""
  };

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  function handleAddComment(e) {
    e.preventDefault();
    dispatch(addComment(postId, formData.text));
    setFormData(initialState);
  }

  return (
    <Row className="justify-content-md-center">
      <Col>
        <Form onSubmit={handleAddComment} className="NewPostForm">
          <FormGroup>
            <Label htmlFor="text">New Comment:</Label>
            <Input
              id="text"
              type="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              placeholder="new comment"
              required
            />
          </FormGroup>
          <Button className="m-1">
            Add
          </Button>
        </Form >
      </Col>
    </Row>
  );
}

export default CommentForm;