import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logoBand100 from "../../assets/images/nomadLogo100.jpg";

function LogIn() {
  return (
    <div className="login col s6">
      <img
        style={{ Height: "auto" }}
        id="navImage"
        src={logoBand100}
        alt="band nomad logo"
      />
      <h3 className="loginTitle">Login to Band Nomad</h3>
      <label for="Email">Email</label>
      <input name="Email"></input>
      <label for="Password">Password</label>
      <input name="Password"></input>
      <button className="submitButton btn waves-effect waves-light">
        Submit
      </button>
    </div>
  );
}
function SignUp() {
  return (
    <div className="signup col s6">
      <h3 className="hello">Hello Friend!</h3>
      <h5>Sign-up for Band Nomad and connect with other musicians! </h5>
      <Link to="create/">
        <button className="signUpButton btn waves-effect waves-light">
          Sign-Up!
        </button>
      </Link>
    </div>
  );
}

const Login = () => {
  return (
    <div className="row" style={{ marginTop: "30px" }}>
      <LogIn></LogIn>
      <SignUp></SignUp>
    </div>
  );
};

export default Login;
