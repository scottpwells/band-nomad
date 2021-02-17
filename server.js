const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const passport = require("./validation/index.js");
const session = require("express-session");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

app.use(
  session({
    secret: "donuts-opossum",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  console.log("req.session", req.session);
  return next();
});
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/band-nomad", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected!");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

const MusicianController = require("./controllers/musicianController");

const ContactController = require("./controllers/contactController");

const LoginController = require("./controllers/loginController");

const LogoutController = require("./controllers/logoutController");

app.use(express.static("client/build"));

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("/api/data/session", (req, res) => {
  console.log("===== user!! =====");
  console.log(req.session.passport.user);
  if (req.session.passport.user) {
    res.json({ user: req.session.passport.user._id });
  }
});
app.use("/api/musician", MusicianController);

app.use("/api/contact", ContactController);

app.use("/api/login", LoginController);
app.use("/api/logout", LogoutController);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
