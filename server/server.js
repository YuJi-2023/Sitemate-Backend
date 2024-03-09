const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
module.exports = app;
