const express = require("express");
const router = express.Router();
const fs = require("fs");

function readData() {
  const data = fs.readFileSync("issues.json");
  return JSON.parse(data);
}

function writeData(data) {
  fs.writeFileSync("issues.json", JSON.stringify(data, null, 2));
}

// Creat New Issue
router.post("/issues", (req, res) => {
  const issues = readData();
  const currentId = issues.length === 0 ? 1 : issues[issues.length - 1].id + 1;
  const newIssue = {
    id: currentId,
    title: req.body.title,
    description: req.body.description,
  };
  issues.push(newIssue);
  writeData(issues);
  res.status(201).json({ message: "New Issue created", data: newIssue });
});

// Get all Issues
router.get("/issues", (req, res) => {
  res.json(readData());
});

// Update a certain Issue
router.put("/issues/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const issues = readData();
  const index = issues.findIndex((issue) => issue.id === id);
  if (index !== -1) {
    issues[index].title = req.body.title;
    issues[index].description = req.body.description;
    writeData(issues);
    res.json({ message: `Issue ${id} updated` });
  } else {
    res.status(404).json({ message: "Issue not found" });
  }
});

// Delete a certain Issue
router.delete("/issues/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const issues = readData();
  const filteredIssues = issues.filter((issue) => issue.id !== id);
  if (filteredIssues.length < issues.length) {
    writeData(filteredIssues);
    res.json({ message: `Issue ${id} deleted` });
  } else {
    res.status(404).json({ message: "Issue not found" });
  }
});

module.exports = router;
