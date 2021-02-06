const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const musicianSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter your Name",
  },
  contactNote: {
    type: String,
    trim: true,
    required: "Enter a contact note",
  },
  phoneNumber: {
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
  Instrument: {
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

const Product = mongoose.model("Musician", musicianSchema);

module.exports = musician;