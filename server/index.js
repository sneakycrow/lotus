/* eslint-disable no-console */
const express = require("express");
const mongoose = require("mongoose");
const api = require("./routes/api");

// Connect to Mongoose
const dbURI = process.env.MONGODB_URI;
mongoose
  .connect(dbURI)
  .then(
    () => console.log("MongoDB connected!"),
    err =>
      console.error.bind(`MongoDB connection failed, here's the error: ${err}`)
  );

mongoose.promise = global.Promise;

// Initialize Application
const app = express();
const port = process.env.PORT;

// Enable API routes
app.use("/api", api);

// Single route for serving react file
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () =>
  console.log(`Express server running on http://localhost:${port}`)
);
