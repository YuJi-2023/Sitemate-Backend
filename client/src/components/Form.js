import React, { useState } from "react";
import axios from "axios";

const Form = ({ onAddIssue }) => {
  const [newIssue, setNewIssue] = useState({ title: "", description: "" });

  const createIssue = () => {
    axios
      .post("http://localhost:3001/api/issues", newIssue)
      .then((response) => {
        onAddIssue(response.data);
        setNewIssue({ title: "", description: "" });
      });
  };

  return (
    <div>
      <h2>Create Issue</h2>
      <input
        placeholder="Title"
        type="text"
        value={newIssue.title}
        onChange={(e) => setNewIssue({ ...newIssue, title: e.target.value })}
      />
      <textarea
      placeholder="Description"
        value={newIssue.description}
        onChange={(e) =>
          setNewIssue({ ...newIssue, description: e.target.value })
        }
      />
      <button onClick={createIssue}>Create</button>
    </div>
  );
};

export default Form;