import React, { useState, useEffect } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";

const axios = require("axios").default;

const SearchResults = () => {
  const [musicians, setMusicians] = useState([]);
  let history = useHistory();
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

  function selectProfile(event) {
    let id = event.target.parentNode.dataset.id;
    history.push(`/profile/${id}`);
    // history.push('/profile/' +id)
    // window.location = "https://localhost:3000/profile/" + id;
  }

  let musicianRows =
    musicians.length > 0
      ? musicians.map((musician) => (
          <tr
            data-id={musician._id}
            onClick={selectProfile}
            className=" bg-colorizinger"
          >
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
          </tr>
        ))
      : "";
  return (
    <div>
      <h1>
        Welcome to the results page!!! {musicians[0] ? musicians[0].name : ""}
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
