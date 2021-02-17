var LocalStrategy = require("passport-local").Strategy;
var db = require("../models")

const strategy = new LocalStrategy(
    {
        usernameField: 'email'
    },
    function(email, password, done) {
        db.Musician
            .findOne({ email: email }, (err, user) => {
                if (err) {
                    console.log("Error Call:")
                    return done(err)
                }
                if(!user) {
                    console.log("User Found")
                    return done(null, false, { message: 'Incorrect username'})
                }
                if(!user.checkPassword(password)) {
                    console.log("Password Input")
                    return done(null, false, { message: 'Incorrect password'})
                }
                console.log(user)
                return done(null, user)
            })
    }
)

module.exports = strategy;