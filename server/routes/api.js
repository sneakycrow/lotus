const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log("API Request, Time: ", Date.now()); // eslint-disable-line no-console
  next();
});

module.exports = router;
