import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const Profile = () => {
  const [musician, setMusician] = useState([]);

  useEffect(() => {
    axios
      .get("/api/musician")
      .then((response) => {
        setMusician(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
       <div>
        {musician.map((musician) => (
          <main className="container cont">
          <div className="row">
            <div className="col">
            <img className="img"
                  src={musician.imageURL}
                  alt={musician.name}
                />
            </div>
            <div className="col s9">
              <h4>{musician.name}</h4>
              <p>
              {musician.bio}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>{musician.contact}
                  <span>
                    <button className="btn waves-effect waves-light">
                      contact me
                    </button>
                  </span></p>
                  <p>{musician.phone}</p>
                  <p>{musician.genre}</p>
                  <p>{musician.instrument}</p>
              <button className="btn waves-effect waves-light">
                update profile
    
              </button>
              <button className="btn waves-effect waves-light">
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
