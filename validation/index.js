const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const Musician = require("../models/musician.js");

passport.serializeUser((user, done) => {
  console.log("serializeUser called: user: ", user);
  console.log("-------------------------------");
  done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
  console.log("DeserializeUser Called");
  Musician.findOne({ _id: id }, "email", (err, user) => {
    console.log("Deserialized User, user: ", user);
    console.log("-------------------------------------");
    done(err, user);
  });
});

passport.use(LocalStrategy);

module.exports = passport;
