const express = require("express");
const router = express.Router();
const Profile = require("../models/musician");
const passport = require("passport");

router.route("/").post(passport.authenticate("local"), function (req, res) {
  console.log("logged in", req.body.email);
  var userInfo = {
    username: req.body.email,
  };
  res.cookie("hello world", "hello world");
  res.send(userInfo);
});

module.exports = router;
