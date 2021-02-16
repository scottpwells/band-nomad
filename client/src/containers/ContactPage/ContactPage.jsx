import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";
// import axios from "axios";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [bandName, setBandName] = useState("");
  const [genre, setGenre] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const { id } = useParams();

  console.log(id, "we found the id");

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 center-align">
          <h1>Please enter your information and write a message!</h1>
          <div>
            <form
              className="col s12"
              onSubmit={(e) => {
                e.preventDefault();
                axios
                  .post("/api/contact/user/" + id, {
                    name,
                    bandName,
                    genre,
                    email,
                    phone,
                    message,
                  })
                  .then((response) => {
                    console.log(response.data._id);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
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
                    placeholder="Band Name"
                    id="bandName"
                    type="text"
                    name="bandName"
                    value={bandName}
                    onChange={(e) => {
                      setBandName(e.target.value);
                    }}
                  />
                  <label htmlFor="Band Name">Band Name</label>
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
                    placeholder="Phone"
                    id="phone"
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                  <label htmlFor="Phone">Phone</label>
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
                  <label htmlFor="Message">Message</label>
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
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
