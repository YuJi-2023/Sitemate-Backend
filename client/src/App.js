import React, { useState, useEffect } from "react";
import axios from "axios";
import IssueList from './components/List';
import "./App.css";
import IssueForm from "./components/Form";

function App() {

  const [issues, setIssues] = useState([]);

   useEffect(() => {
     axios.get("http://localhost:3001/api/issues").then((response) => {
       setIssues(response.data);
     });
   }, [issues]);

  const addIssue = (newIssue) => {
    setIssues((prevIssues) => [...prevIssues, newIssue]);
  };

  return (
    <div className="App">
      <h1>Issues</h1>
      <IssueForm onAddIssue={addIssue} />
      <IssueList  issues={issues} setIssues={setIssues} />
    </div>
  );
}

export default App;
