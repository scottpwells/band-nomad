import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Form = ({ buttonText, handleFormSubmit }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [genre, setGenre] = useState("");
  const [instrument, setInstrument] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [bio, setBio] = useState("");
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    if (id) {
      axios
        .get(`/api/musician/${id}`)
        .then((response) => {
          console.log(response.data);
          const {
            name,
            password,
            contact,
            phone,
            city,
            email,
            genre,
            instrument,
            imageURL,
            bio,
          } = response.data;
          setName(name);
          setPassword(password);
          setContact(contact);
          setPhone(phone);
          setCity(city);
          setEmail(email);
          setGenre(genre);
          setInstrument(instrument);
          setImageURL(imageURL);
          setBio(bio);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);
  return (
    <div>
      <form
        className="col s12"
        style={{
          backgroundColor: "rgba(206, 206, 206, 0.53)",
          marginTop: "15px",
        }}
        onSubmit={(e) => {
          handleFormSubmit(
            e,
            {
              name,
              password,
              contact,
              phone,
              city,
              email,
              genre,
              instrument,
              imageURL,
              bio,
            },
            id
          );
        }}
      >
        <div className="row">
          <div className="input-field col s12">
            <input
              style={{
                borderBottom: "2px dashed hotpink",
              }}
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label
              htmlFor="name"
              style={{
                color: "black",
              }}
            >
              Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              style={{
                borderBottom: "2px dashed hotpink",
              }}
              id="password"
              type="text"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label
              htmlFor="password"
              style={{
                color: "black",
              }}
            >
              Password
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              style={{
                borderBottom: "2px dashed hotpink",
              }}
              id="contact"
              type="text"
              name="contact"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
            />
            <label
              htmlFor="Contact Note"
              style={{
                color: "black",
              }}
            >
              Contact Note
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              style={{
                borderBottom: "2px dashed hotpink",
              }}
              id="phone"
              type="number"
              name="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <label
              htmlFor="Phone Number"
              style={{
                color: "black",
              }}
            >
              Phone Number
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              style={{
                borderBottom: "2px dashed hotpink",
              }}
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label
              htmlFor="email"
              style={{
                color: "black",
              }}
            >
              Email
            </label>
          </div>
        </div>
        {/* <div className="row">
          <div className="input-field col s12">
            <input
              id="city"
              type="text"
              name="city"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <label htmlFor="City">City</label>
          </div>
        </div> */}
        <div className="row">
          <div className="col s12">
            <select
              id="city"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              className="browser-default"
            >
              <option value="" disabled selected>
                Choose your city
              </option>
              <option value="Atlanta">Atlanta</option>
              <option value="Midtown">Midtown</option>
              <option value="Buckhead">Buckhead</option>
              <option value="Decatur">Decatur</option>
              <option value="Alpharetta">Alpharetta</option>
              <option value="Marrietta">Marrietta</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              style={{
                borderBottom: "2px dashed hotpink",
              }}
              id="imageURL"
              type="text"
              name="imageURL"
              value={imageURL}
              onChange={(e) => {
                setImageURL(e.target.value);
              }}
            />
            <label
              htmlFor="imageURL"
              style={{
                color: "black",
              }}
            >
              ImageURL
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              style={{
                borderBottom: "2px dashed hotpink",
              }}
              id="bio"
              type="text"
              name="bio"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
            <label
              htmlFor="bio"
              style={{
                color: "black",
              }}
            >
              Bio
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <select
              id="instrument"
              value={instrument}
              onChange={(e) => {
                setInstrument(e.target.value);
              }}
              className="browser-default"
            >
              <option value="" disabled selected>
                Choose Instrument
              </option>
              <option value="bass">Bass Player</option>
              <option value="guitar">Guitar Player</option>
              <option value="drums">Drummer</option>
              <option value="singer">Lead Singer</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select
              placeholder="Genre"
              id="genre"
              name="genre"
              value={genre}
              onChange={(e) => {
                setGenre(e.target.value);
              }}
              className="browser-default"
            >
              <option value="" disabled selected>
                Choose a Genre
              </option>
              <option value="blues">Rhythm and Blues</option>
              <option value="country">Country Music</option>
              <option value="jazz">Jazz Music</option>
              <option value="pop">Pop Music</option>
              <option value="rock">Rock Music</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <button
              className="btn waves-effect waves-light"
              style={{ backgroundColor: "#004AAD", color: "ffff" }}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;