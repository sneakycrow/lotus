const express = require("express");
const api = require("./routes/api");

const app = express();

const port = 3000;

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
