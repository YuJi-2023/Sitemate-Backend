import React from "react";
import axios from "axios";

const List = ({ issues, setIssues }) => {

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
    <div>
      <h2>Issue List</h2>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            <h3>{issue.title}</h3>
            <p>{issue.description}</p>
            <button onClick={() => updateIssue(issue.id)}>Update</button>
            <button onClick={() => deleteIssue(issue.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;