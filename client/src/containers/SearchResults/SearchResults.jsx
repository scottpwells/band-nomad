import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
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
    </div>
  );
};

export default SearchResults;
