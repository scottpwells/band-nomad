const express = require("express");
const router = express.Router();
const Profile = require("../models/musician");

router.get("/", (req, res) => {
  // console.log(req.query)
  const queryParams = {};
  if (req.query.instrument) {
    queryParams.instrument = req.query.instrument.toLowerCase();
  }
  if (req.query.genre) {
    queryParams.genre = req.query.genre.toLowerCase();
  }
  if (req.query.city) {
    queryParams.city = req.query.city;
  }

  console.log(queryParams);
  Profile.find(queryParams)
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

// router.get("/:id", (req, res) => {
//   Profile.findById(req.params.id, function (err, profile) {
//     if (err) {
//       res.status(500).end();
//     }
//     console.log(profile);
//     res.json(profile);
//   });
// });

// router.get("/?instrument=drums", (req, res) => {
//   Profile.find({
//     instrument: { $regex: new RegExp(req.query.q, 'i')}
//   })
//     .then((foundProfile) => {
//       res.json(foundProfile);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(404).end();
//     });
// });

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
