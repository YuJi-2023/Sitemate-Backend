import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";


const IssueList = ({ issues, setIssues }) => {
  const updateIssue = (id) => {
    const updatedIssue = {
      title: "Updated Issue",
      description: "This issue has been updated",
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
    <Container className="bg-secondary py-3">
      <h2>Issue List</h2>
      {issues.map((issue) => (
        <Card key={issue.id}>
          <Card.Header>Issue #{issue.id}</Card.Header>
          <Card.Body>
            <Card.Title>{issue.title}</Card.Title>
            <Card.Text>{issue.description}</Card.Text>
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
