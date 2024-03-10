import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const IssueList = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/issues").then((response) => {
      setIssues(response.data);
    });
  }, [issues]);

  const updateIssue = (id) => {
    const updatedIssue = {
      title: document.querySelector("#title_" + id).value,
      description: document.querySelector("#description_" + id).value,
    };
    axios
      .put(`http://localhost:3001/api/issues/${id}`, updatedIssue)
      .then((response) => {
        setIssues(
          issues.map((issue) => (issue.id === id ? response.data : issue))
        );
      });
  };

  const deleteIssue = (id) => {
    axios.delete(`http://localhost:3001/api/issues/${id}`).then((response) => {
      setIssues(issues.filter((issue) => issue.id !== id));
    });
  };

  return (
    <Container className="bg-secondary py-3 text-white">
      <h2>Issue List</h2>
      {issues.map((issue, index) => (
        <Card key={index}>
          <Card.Header>Issue #{issue.id}</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  id={`title_${issue.id}`}
                  type="text"
                  defaultValue={issue.title}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  id={`description_${issue.id}`}
                  as="textarea"
                  rows={3}
                  defaultValue={issue.description}
                />
              </Form.Group>
            </Form>
            <Button variant="success" onClick={() => updateIssue(issue.id)}>
              Update
            </Button>
            <Button variant="danger" onClick={() => deleteIssue(issue.id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default IssueList;
