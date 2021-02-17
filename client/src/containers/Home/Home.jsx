import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import emptyStage from "../../assets/images/nomadHero470.png";
import "../Home/Home.css";

const Home = () => {
  const [instrument, setInstrument] = useState("");
  const [genre, setGenre] = useState("");
  // const [city, setCity] = useState("");
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

    // if (city) {
    //   baseURL = baseURL + `city=${city}&`;
    // }
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
          <tr className="bg-colorizinger" id={musician._id}>
            <td style={{maxWidth: "25px",}}>
              <img
                src={musician.imageURL}
                style={{width: "30%",}}
                alt={musician.name}
              />
            </td>
            <td style={{maxWidth: "30px",}}>{musician.name}</td>
            <td style={{maxWidth: "25px",}}>{musician.instrument}</td>
            <td style={{maxWidth: "25px",}}>{musician.genre}</td>
            <td style={{maxWidth: "25px",}}>{musician.city}</td>
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
      <div className="container" style={{marginTop:20}}>
        <div className="Row">
          <div className="col s12">
            <div className="Row">
              <div className="col s12">
                <select
                  id="instrument"
                  value={instrument}
                  onChange={(e) => {
                    setInstrument(e.target.value);
                  }}
                  className="browser-default"
                >
                  <option value="" disabled selected>
                    Choose Instrument
                  </option>
                  <option value="bass">Bass Player</option>
                  <option value="guitar">Guitar Player</option>
                  <option value="drums">Drummer</option>
                  <option value="singer">Lead Singer</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <select
                  placeholder="Genre"
                  id="genre"
                  name="genre"
                  value={genre}
                  onChange={(e) => {
                    setGenre(e.target.value);
                  }}
                  className="browser-default"
                >
                  <option value="" disabled selected>
                    Choose a Genre
                  </option>
                  <option value="blues">Rhythm and Blues</option>
                  <option value="country">Country Music</option>
                  <option value="jazz">Jazz Music</option>
                  <option value="pop">Pop Music</option>
                  <option value="rock">Rock Music</option>
                </select>
              </div>
            </div>
            <button
              onClick={handleFormSubmit}
              className="btn waves-effect waves-light"
            >
              Search Profiles
            </button>
          </div>
        </div>
      </div>

      <div className="background">
        <table>
          <thead>
            <tr>
              <th>Profile Pic</th>
              <th>Name</th>
              <th>Instrument</th>
              <th>Genre</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{musicianRows}</tbody>
        </table>
      </div>
      <img
        src={emptyStage}
        alt="empty stage with guitar drum an keyboards signifying find your band"
      />
    </>
  );
};

