import React from "react";
import "./style.css";
import Bio from "../../assets/IMG_6171.jpg";

const Profile = () => {
  return (
    <div>
      <main className="container cont">
        <div className="row float">
          <div className="col">
            <img className="img" src={Bio} alt="me" />
          </div>
          <div className="col s9">
            <h4>Dennis Francis</h4>
            <p>
              My name is Dennis Francis. I am currently enrolled in the Full
              Stack Flex Boot Camp with GA Tech. My back ground is in Exhibit
              Design and the design of large format graphics. I was in the
              Exhibit industry for 20 years. I enjoyed Exhibit Design because I
              not only was able to create a pretty picture but it also lead to
              the construction of a physical structure. In Web Development I am
              doing something very similar. I am creating a great design but
              also creating the bones of the web site. Along with making sure it
              all works together. I plan to blend my skills as a designer with
              the skills I learn in web development to be come a great Full
              Stack Web Developer.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>if you want to jam, reach out.
                <span>
                  <button className="btn waves-effect waves-light">
                    contact me

                  </button>
                </span></p>
                <p>5551234567</p>
                <p>rock and roll</p>
                <p>bass guitar</p>
            <button className="btn waves-effect waves-light">
              update profile
  
            </button>
            <button className="btn waves-effect waves-light">
            delete profile
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
