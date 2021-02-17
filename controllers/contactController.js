const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const main = require("../extensions/mail");
const Profile = require("../models/musician");

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

router.post("/user/:id", (req, res) => {
  Profile.findById(req.params.id)
    .then((foundProfile) => {
      main(req.body, foundProfile.email)
        .then(function () {
          res.json([foundProfile.email]);
        })
        .catch(console.error);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

module.exports = router;
