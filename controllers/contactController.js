const express = require("express");
const router = express.Router();
const Profile = require("../models/musician");

router.post("/", (req, res) => {
  console.log(req.body);
  ContactPage.create(req.body).then((newProfile) => {
    console.log(newProfile);
    res.json(newProfile);
  });
});

module.exports = router;
