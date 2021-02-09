import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const axios = require("axios").default;

const Profile = () => {
  let { id } = useParams();
  const [musicians, setMusicians] = useState([]);
  useEffect(() => {
    axios
      .get("/api/musician")
      .then(function (response) {
        setMusicians(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>ID: {id}</h1>
      <h1>This is the Profile page</h1>
    </div>
  );
};

export default Profile;
