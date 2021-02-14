import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css"
import logoBand250 from "../../assets/images/band-nomad-logo-ph.psd";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
      <img src={logoBand250} alt="band nomad logo" className="brand-logo center"/> 
      <Link to="/" data-target="mobile-demo" class="sidenav-trigger">
      <i class="material-icons">menu</i>
      </Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <NavLink
              to="/create"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Create
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/update"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Update
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/results"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Results
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
