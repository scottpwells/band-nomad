const express = require("express");
const router = express.Router();
const Profile = require("../models/musician");

app.post("/login", passport.authenticate("local"), function (req, res) {
  res.redirect("/");
});
