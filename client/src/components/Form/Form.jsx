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
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="name">Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="password"
              type="text"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="contact"
              type="text"
              name="contact"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
            />
            <label htmlFor="Contact Note">Contact Note</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="phone"
              type="number"
              name="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <label htmlFor="Phone Number">Phone Number</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input
              id="imageURL"
              type="text"
              name="imageURL"
              value={imageURL}
              onChange={(e) => {
                setImageURL(e.target.value);
              }}
            />
            <label htmlFor="imageURL">ImageURL</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="bio"
              type="text"
              name="bio"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
            <label htmlFor="bio">Bio</label>
          </div>
        </div>
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
              <option value="Bass Player">Bass Player</option>
              <option value="Guitar Player">Guitar Player</option>
              <option value="Drummer">Drummer</option>
              <option value="Lead Singer">Lead Singer</option>
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
              <option value="Rhythm and Blues">Rhythm and Blues</option>
              <option value="Country Music">Country Music</option>
              <option value="Jazz Music">Jazz Music</option>
              <option value="Pop Music">Pop Music</option>
              <option value="Rock Music">Rock Music</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <button className="btn waves-effect waves-light"style={{ backgroundColor: "#004AAD", color: "ffff" }}>
              {buttonText}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
