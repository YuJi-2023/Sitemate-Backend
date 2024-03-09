const express = require("express");

const cors = require("cors");

const routes = require("./routes/index");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use("/api", routes);


module.exports = app;
