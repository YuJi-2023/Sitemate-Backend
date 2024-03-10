import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const IssueForm = () => {
  const [newIssue, setNewIssue] = useState({ title: "", description: "" });

  const createIssue = () => {
    axios
      .post("http://localhost:3001/api/issues", newIssue)
      .then((response) => {
        setNewIssue({ title: "", description: "" });
      });
  };

  return (
    <Container className="bg-secondary py-3 text-white">
      <h3>Add New Issue</h3>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={newIssue.title}
            onChange={(e) =>
              setNewIssue({ ...newIssue, title: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={newIssue.description}
            onChange={(e) =>
              setNewIssue({ ...newIssue, description: e.target.value })
            }
          />
        </Form.Group>
      </Form>

      <Button variant="primary" onClick={createIssue}>
        Create
      </Button>
    </Container>
  );
};

export default IssueForm;
