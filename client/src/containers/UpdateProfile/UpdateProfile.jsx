import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Form from "../../Components/Form/Form";

const UpdateProfile = () => {
  const history = useHistory();

  const handleFormSubmit = (e, musicianData, id) => {
    e.preventDefault();
    axios
      .put(`/api/musician/${id}`, musicianData)
      .then((response) => {
        console.log(response.data);
        history.push(`/inProfile/${response.data._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 center-align">
          <h1>update your profile.</h1>
          <Form
            handleFormSubmit={handleFormSubmit}
            buttonText="Update Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
