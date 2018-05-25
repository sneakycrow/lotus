const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.use((req, res, next) => {
  console.log("API Request, Time: ", Date.now()); // eslint-disable-line no-console
  next();
});

router.post("/register", (req, res) => {
  if (req.body.username && req.body.password) {
    const userData = {
      username: req.body.username,
      password: req.body.password
    };

    User.create(userData, err => {
      if (err) {
        return res.send(err);
      }
      return res.send("User created!");
    });
  } else {
    res.send("Username and Password required");
  }
});

module.exports = router;
