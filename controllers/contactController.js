const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const main = require("../extensions/mail");

router.post("/", (req, res) => {
  console.log(req.body);
  Contact.create(req.body).then((newContact) => {
    console.log(newContact);
    res.json(newContact);
  });
});

router.post("/user", (req, res) => {
  main(req.body)
    .then(function () {
      res.json(["success"]);
    })
    .catch(console.error);
});

module.exports = router;
