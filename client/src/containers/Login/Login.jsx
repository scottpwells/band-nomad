import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logoBand100 from "../../assets/images/nomadLogo100.jpg";
import gettingStarted from "../../assets/images/startaband.png";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

function LogIn() {
  const [cookies, setCookie] = useCookies(["username"]);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(cookies["username"]);

  const handleFormSubmit = (e, musicianLogin) => {
    e.preventDefault();
    console.log(email, password);
    axios
      .post("/api/login", { email, password })
      .then((response) => {
        console.log(response.data);
        setCookie("username", response.data.username);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login col s6">
      <img
        style={{ Height: "auto" }}
        id="navImage"
        src={logoBand100}
        alt="band nomad logo"
      />
      <h3 className="loginTitle">Login to Band Nomad</h3>
      <form onSubmit={handleFormSubmit}>
        <label for="Email">Email</label>
        <input
          name="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label for="Password">Password</label>
        <input
          name="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button className="submitButton btn waves-effect waves-light">
          Submit
        </button>
      </form>
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
