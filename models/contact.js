const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter your Name",
  },
  bandName: {
    type: String,
    trim: true,
    required: "Please enter a band name",
  },
  genre: {
    type: String,
    trim: true,
    required: "Please enter a genre",
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  phone: {
    type: Number,
    trim: true,
    required: "Please enter a phone number",
  },
  message: {
    type: String,
    trim: true,
    required: "Please enter a message ;)",
  },
});

const musician = mongoose.model("Musician", musicianSchema);

module.exports = musician;
