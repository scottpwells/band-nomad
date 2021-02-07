const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const musicianSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter your Name",
  },
  contact: {
    type: String,
    trim: true,
    required: "Enter a contact note",
  },
  phone: {
    type: Number,
    trim: true,
    required: "Enter a phone number",
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  genre: {
    type: String,
    trim: true,
    required: "Enter a genre",
  },
  instrument: {
    type: String,
    trim: true,
    required: "Enter an instrument",
  },
  imageURL: {
    type: String,
    trim: true,
    required: "Enter an image URL",
  },
});

const musician = mongoose.model("Musician", musicianSchema);

module.exports = musician;