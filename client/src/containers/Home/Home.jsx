import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import emptyStage from "../../assets/images/nomadHero470.png";
import "../Home/Home.css";

const Home = () => {
  const [instrument, setInstrument] = useState("");
  const [genre, setGenre] = useState("");
  const [city, setCity] = useState("");
  const [musicians, setMusicians] = useState([]);

  // const handleInputChange = (event) => {
  //   const { value } = event.target;
  //   setInstrument(value);
  //   console.log(value);
  // };

  const handleFormSubmit = (event) => {
    // When the form is submitted, prevent its default behavior,
    event.preventDefault();
    searchProfiles();
  };

  const searchProfiles = () => {
    let baseURL = "/api/musician/?";
    if (instrument) {
      baseURL = baseURL + `instrument=${instrument}&`;
    }
    if (genre) {
      baseURL = baseURL + `genre=${genre}&`;
    }

    if (city) {
      baseURL = baseURL + `city=${city}&`;
    }
    console.log(baseURL);

    axios
      .get(baseURL)
      .then(function (response) {
        setMusicians(response.data);
        console.log(response.data);
        console.log(instrument);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  let musicianRows =
    musicians.length > 0
      ? musicians.map((musician) => (
          <tr className="bg-colorizinger">
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
            <td style={{ maxWidth: "25px" }}>{musician.city}</td>
            <td>
              {" "}
              <Link to={`/inProfile/${musician._id}`}>
                <button className="btn waves-effect waves-light">
                  view profile
                </button>
              </Link>
            </td>
          </tr>
        ))
      : "";

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="row">
              <div className="col-sm-6">
                <div className="col-sm-6">
                  <select
                    id="instrument"
                    value={instrument}
                    onChange={(e) => {
                      setInstrument(e.target.value);
                    }}
                    className="browser-default"
                  >
                    <option value="" disabled selected>
                      Find Your Band Member
                    </option>
                    <option value="bass">Bass Player</option>
                    <option value="guitar">Guitar Player</option>
                    <option value="drums">Drummer</option>
                    <option value="singer">Lead Singer</option>
                  </select>
                  <button
                    onClick={handleFormSubmit}
                    className="btn waves-effect waves-light"
                  >
                    Search Profiles
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <table>
          <tr>
            <th>Profile Pic</th>
            <th>Name</th>
            <th>Instrument</th>
            <th>Genre</th>
            <th>City</th>
          </tr>
          {musicianRows}
        </table>
        <img
          className="hero-text"
          id="hero"
          src={emptyStage}
          alt="empty stage with guitar drum an keyboards signifying find your band"
        />
      </div>
    </>
  );
};

export default Home;
