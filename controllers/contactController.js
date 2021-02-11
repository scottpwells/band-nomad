const express = require("express");
const router = express.Router();
const Profile = require("../models/contact");

router.post("/", (req, res) => {
  console.log(req.body);
  contact.create(req.body).then((newContact) => {
    console.log(newContact);
    res.json(newContact);
  });
});

module.exports = router;
