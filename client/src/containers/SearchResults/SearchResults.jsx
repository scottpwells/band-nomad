import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
              <img
                src={musician.imageURL}
                style={{ width: "30%" }}
                alt={musician.name}
              />
            </td>
            <td style={{ maxWidth: "30px" }}>{musician.name}</td>
            <td style={{ maxWidth: "25px" }}>{musician.instrument}</td>
            <td style={{ maxWidth: "25px" }}>{musician.genre}</td>
            <td style={{ maxWidth: "25px" }}>musician.location</td>
            <td> <Link to={`/inProfile/${musician._id}`}>
                  <button className="btn waves-effect waves-light">
                    view profile
                  </button>
                </Link></td>
          </tr>
        ))
      : "";
  return (
    <div>
      <h1>
        {/* Welcome to the results page!!! {musicians[0] ? musicians[0].name : ""} */}
      </h1>
      <form style={{ textAlign: "center" }}>
        <label for="search">Input Search Here</label>

        <input type="text" id="search" name="search" style={{ width: "40%" }} />
        <button style={{ padding: "6px" }}>Search</button>
      </form>

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
