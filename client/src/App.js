import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from './components/Form';
import List from './components/List';
import "./App.css";

function App() {

  const [issues, setIssues] = useState([]);

   useEffect(() => {
     axios.get("http://localhost:3001/api/issues").then((response) => {
       setIssues(response.data);
     });
   }, []);

  const addIssue = (newIssue) => {
    setIssues((prevIssues) => [...prevIssues, newIssue]);
  };

  return (
    <div className="App">
      <h1>Issues</h1>
      <Form onAddIssue={addIssue} />
      <List issues={issues} setIssues={setIssues} />
    </div>
  );
}

export default App;
