import React, { useState } from "react";

const CreateProfile = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [genre, setGenre] = useState("");
  const [instrument, setInstrument] = useState("");
  const [imageURL, setImageURL] = useState("");

  return (
    <div>
      <h1>create your profile.</h1>

      <div className="row">
        <form className="col s12">
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
            <div className="input-field col s12">
              <input
                placeholder="Instrument"
                id="instrument"
                type="text"
                name="instrument"
                value={instrument}
                onChange={(e) => {
                  setInstrument(e.target.value);
                }}
              />
              <label htmlFor="Instrument">Instrument</label>
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
            <div className="col s12">
              <button className="btn waves-effect waves-light">
                create profile
                {/* <i className="material-icons right">send</i> */}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
