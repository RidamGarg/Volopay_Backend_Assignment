require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db");
const apiRoutes = require("./routes");

db();

app.use("/api", apiRoutes);

app.listen(8080, (req, res) => {
  console.log("Listening on port 8080");
});
