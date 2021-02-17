const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));

app.use(express.static("client/build"));

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

const UploadController = require("./controllers/uploadController");

app.use(express.static("client/build"));

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.use("/api/musician", MusicianController);

app.use("/api/contact", ContactController);

app.use("/api/contact", UploadController);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
