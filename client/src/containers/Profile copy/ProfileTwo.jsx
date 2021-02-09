import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";

const Profile = () => {
  const [musician, setMusician] = useState([]);

  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = () => {
    axios
      .get("/api/musician")
      .then((response) => {
        console.log(response.data);
        setMusician(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteProfile = (id) => {
    axios
      .delete(`/api/musician/${id}`)
      .then(() => {
        getProfile();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        {musician.map((musician) => (
          <main className="container cont">
            <div className="row">
              <div className="col">
                <img
                  className="img"
                  src={musician.imageURL}
                  alt={musician.name}
                />
              </div>
              <div className="col s9">
                <h4>{musician.name}</h4>
                <p>{musician.bio}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>
                  {musician.contact}
                  <span>
                  <Link to={`/contact/${musician._id}`}>
                  <button className="btn waves-effect waves-light">
                    contact me
                  </button>
                </Link>
                  </span>
                </p>
                <p>{musician.phone}</p>
                <p>{musician.genre}</p>
                <p>{musician.instrument}</p>
                <Link to={`/update/${musician._id}`}>
                  <button className="btn waves-effect waves-light">
                    update profile
                  </button>
                </Link>

                <button className="btn waves-effect waves-light" onClick=
                  {() => {
                    deleteProfile(musician._id);
                  }}>
                  delete profile
                </button>
              </div>
            </div>
          </main>
        ))}
      </div>
    </div>
  );
};

export default Profile;
