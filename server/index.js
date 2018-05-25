/* eslint-disable no-console */
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const api = require("./routes/api");
const path = require("path");

// Connect to Mongoose
const dbURI = process.env.MONGODB_URI;
mongoose.Promise = global.Promise;
mongoose
  .connect(dbURI)
  .then(() => console.log("MongoDB connected!"))
  .catch(error => console.error(error));

mongoose.promise = global.Promise;

// Initialize Application
const app = express();
const port = process.env.PORT;

// Sessions
app.use(require("express-session"))({
  secret: process.env.EXPRESS_SESSION_SECRET,
  resave: false,
  saveUninitalized: false
});

// Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable API routes
app.use("/api", api);

// Single route for serving react file
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.listen(port, () =>
  console.log(`Express server running on http://localhost:${port}`)
);
