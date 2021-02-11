import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";

const ContactPage = ({ buttonText, handleFormSubmit }) => {
  const [name, setName] = useState("");
  const [bandName, setBandName] = useState("");
  const [genre, setGenre] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const { id } = useParams();

  return (
    <div>
      <form
        className="col s12"
        onSubmit={(e) => {
          handleFormSubmit(
            e,
            {
              name,
              bandName,
              genre,
              email,
              phone,
              message,
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
              value={bandName}
              onChange={(e) => {
                setBandName(e.target.value);
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
              value={genre}
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
              value={phone}
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
              placeholder="Message"
              id="message"
              type="text"
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <label htmlFor="Image URL">Message</label>
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

export default ContactPage;
