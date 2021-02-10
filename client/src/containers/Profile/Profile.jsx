import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const axios = require("axios").default;

const Profile = () => {
  let { id } = useParams();
  const [musician, setMusician] = useState([]);
  useEffect(() => {
    axios
      .get("/api/musician/" + id)
      .then(function (response) {
        setMusician(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      
      <img src={musician.imageURL} style={{ width: "35%" }} />
      <h2>{musician.name}</h2>
      <ul>
        <li>Musical Genre: {musician.genre}</li>
        <li>Instrument: {musician.instrument}</li>
        <li>Location: musician.location</li>
        <li>Phone Number: {musician.phone}</li>
        <li>E-mail: {musician.email}</li>
        <li>Contact Note: {musician.contact}</li>
      </ul>
    </div>
  );
};

export default Profile;
