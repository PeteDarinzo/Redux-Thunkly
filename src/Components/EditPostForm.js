import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import "./NewPostForm.css";

const EditPostForm = ({ id, title, description, body, editPost, toggleShowEdit }) => {

  const initialState = {
    title,
    description,
    body
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
    editPost(id, formData.title, formData.description, formData.body)
    setFormData(initialState);
    history.push("/");
  }

  const handleCancel = (e) => {
    e.preventDefault();
    toggleShowEdit();
  }

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col xs={6} md={4}>
          <Form onSubmit={handleSubmit} className="NewPostForm">
            <FormGroup>
              <Label htmlFor="title">Title:</Label>
              <Input
                id="title"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="title"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="description">Description:</Label>
              <Input
                id="description"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="title" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="body">Body:</Label>
              <Input
                id="body"
                type="textarea"
                name="body"
                value={formData.body}
                onChange={handleChange}
                placeholder="body" />
            </FormGroup>
            <Button color="primary" className="m-1">
              Save
            </Button>
            <Button onClick={handleCancel} className="m-1">
              Cancel
            </Button>
          </Form >
        </Col>
      </Row>
    </Container>
  );
}

export default EditPostForm;