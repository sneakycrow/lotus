const express = require("express");
const mongoose = require("mongoose");
const api = require("./routes/api");
require("dotenv").config();

// Connect to Mongoose

const dbUri = process.env.MONGODB_URI;

const app = express();

const port = process.env.PORT;

// Enable API routes
app.use("/api", api);

// Single route for serving react file
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(
  port,
  () => console.log(`Express server running on http://localhost:${port}`) // eslint-disable-line no-console
);
