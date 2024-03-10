import React, { useState, useEffect } from "react";
import axios from "axios";
import IssueList from "./components/List";
import IssueForm from "./components/Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Issue Overview</h1>
      <IssueList />
      <IssueForm />
    </div>
  );
}

export default App;
