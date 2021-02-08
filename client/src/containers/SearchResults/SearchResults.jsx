import React, { useState, useEffect } from "react";

const axios = require("axios").default;

const SearchResults = () => {
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
  let musicianRows =
    musicians.length > 0
      ? musicians.map((musician) => (
          <tr>
            <td style={{ maxWidth: "25px" }}>
              <img src={musician.imageURL} style={{ width: "30%" }} />
            </td>
            <td>{musician.name}</td>
            <td>{musician.instrument}</td>
            <td>{musician.genre}</td>
            <td>musician.location</td>
          </tr>
        ))
      : "";
  return (
    <div>
      <h1>This is the results page {musicians[0] ? musicians[0].name : ""}</h1>
      <table>
        <tr>
          <th>Profile Pic</th>
          <th>Name</th>
          <th>Instrument</th>
          <th>Genre</th>
          <th>Location</th>
        </tr>
        {musicianRows}
      </table>
    </div>
  );
};

export default SearchResults;
