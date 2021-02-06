const express = require("express");
const router = express.Router();
const Product = require("../models/musician");

router.get("/", (req, res) => {
  Product.find()
    .then((profile) => {
      res.json(profile);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.post("/", (req, res) => {
  console.log(req.body);
  Product.create(req.body).then((newMusician) => {
    console.log(newMusician);
    res.json(newMusician);
  });
});

router.put("/:id", (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedObject) => {
      res.json(updatedObject);
    }
  );
});

router.delete("/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

module.exports = router;
