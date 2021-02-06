import React from "react";

const createProfile = () => {
  return (
    <div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Name" id="name" type="text" />
              <label htmlFor="name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Contact Note" id="contact" type="text" />
              <label htmlFor="Contact Note">Contact Note</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Phone Number" id="phone" type="number" />
              <label htmlFor="Phone Number">Phone Number</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Genre" id="genre" type="text" />
              <label htmlFor="Genre">Genre</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Instrument" id="instrument" type="text" />
              <label htmlFor="Instrument">Instrument</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Image URL" id="imageURL" type="text" />
              <label htmlFor="Image URL">Image URL</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button
                className="btn waves-effect waves-light">
                create profile
                {/* <i className="material-icons right">send</i> */}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default createProfile;
