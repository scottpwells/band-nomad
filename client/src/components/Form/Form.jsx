import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";

const Form = ({ buttonText, handleFormSubmit }) => {
  const [name, setName] = useState("");
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
        onSubmit={(e) => {
          handleFormSubmit(
            e,
            {
              name,
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
              placeholder="Name"
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
              placeholder="Contact Note"
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
              placeholder="Phone Number"
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
              placeholder="City"
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
              >
                <option value="" disabled selected>
                  Choose Instrument
                </option>
                
                <option value="blues">Guitar Player</option>
                <option value="country">Drummer</option>
                <option value="pop">Lead Singer</option>
                <option value="rock">Bass Player</option>
              </select>
            <input
              placeholder="Genre"
              id="genre"
              type="text"
              name="genre"
              value={genre}
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            />
            <label htmlFor="Genre">Genre</label>
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
            <input
              placeholder="Image URL"
              id="imageURL"
              type="text"
              name="imageURL"
              value={imageURL}
              onChange={(e) => {
                setImageURL(e.target.value);
              }}
            />
            <label htmlFor="Image URL">Image URL</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Bio"
              id="bio"
              type="text"
              name="bio"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
            <label htmlFor="Image URL">Bio</label>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            {/* <Link to={`/inProfile/${_id}`}>
              <button className="btn waves-effect waves-light">
                {buttonText}
              </button>
            </Link> */}
            <button className="btn waves-effect waves-light">
              {buttonText}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
