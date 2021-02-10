import React from "react";
import axios from "axios";
import Form from "../../Components/Form/Form";


const CreateProfile = () => {
  const handleFormSubmit = (e, musicianData) => {
    e.preventDefault();
    axios
      .post("/api/musician", musicianData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>create your profile.</h1>
      <Form handleFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default CreateProfile;
