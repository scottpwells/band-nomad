const express = require("express");
const router = express.Router();
const Profile = require("../models/musician");

router.get("/", (req, res) => {
  Profile.find()
    .then((profile) => {
      res.json(profile);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.get("/:id", (req, res) => {
  Profile.findById(req.params.id)
    .then((foundProfile) => {
      res.json(foundProfile);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

router.post("/", (req, res) => {
  console.log(req.body);
  Profile.create(req.body).then((newProfile) => {
    console.log(newProfile);
    res.json(newProfile);
  });
});

router.put("/:id", (req, res) => {
  Profile.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedObject) => {
      res.json(updatedObject);
    }
  );
});

router.delete("/:id", (req, res) => {
  Profile.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

module.exports = router;
