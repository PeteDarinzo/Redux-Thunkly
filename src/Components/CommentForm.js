import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { v4 as uuid } from "uuid";
import "./NewPostForm.css";

const CommentForm = ({ postId, addComment }) => {

  const initialState = {
    text: ""
  };

  const [formData, setFormData] = useState(initialState);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.text) {
      addComment(postId, uuid(), formData.text);
      setFormData(initialState);
    }
  }

  return (
    <Row className="justify-content-md-center">
      <Col>
        <Form onSubmit={handleSubmit} className="NewPostForm">
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
          <Button onClick={handleSubmit} className="m-1">
            Add
          </Button>
        </Form >
      </Col>
    </Row>
  );
}

export default CommentForm;