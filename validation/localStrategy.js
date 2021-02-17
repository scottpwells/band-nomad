var LocalStrategy = require("passport-local").Strategy;
const Musician = require("../models/musician.js");

const strategy = new LocalStrategy(
  {
    usernameField: "email",
  },
  function (email, password, done) {
    Musician.findOne({ email: email }, (err, user) => {
      if (err) {
        console.log("Error Call:");
        return done(err);
      }
      if (!user) {
        console.log("User Found");
        return done(null, false, { message: "Incorrect username" });
      }
      if (!user.checkPassword(password)) {
        console.log("Password Input");
        return done(null, false, { message: "Incorrect password" });
      }
      console.log(user);
      return done(null, user);
    });
  }
);

module.exports = strategy;
