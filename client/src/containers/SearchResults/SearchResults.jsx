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
  });
  return (
    <div>
      <h1>This is the results page {musicians[0] ? musicians[0].name : ""}</h1>
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
          <th>Country</th>
        </tr>
      </table>
    </div>
  );
};

export default SearchResults;
