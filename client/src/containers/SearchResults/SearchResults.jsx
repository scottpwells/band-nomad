import React, { useState, useEffect } from "react";
const axios = require("axios").default;

const SearchResults = () => {
  useEffect(() => {
    axios
      .get("/api/musician")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return (
    <div>
      <h1>This is the results page</h1>
    </div>
  );
};

export default SearchResults;
