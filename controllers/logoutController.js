const express = require("express");
const router = express.Router();
const Profile = require("../models/musician");
const passport = require("passport");

router.route("/").get(function (req, res) {
  req.logout();
  res.send(["logged out"]);
});

module.exports = router;
