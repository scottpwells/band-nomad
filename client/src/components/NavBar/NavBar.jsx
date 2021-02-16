import {useEffect} from "react";
import {Link,NavLink} from "react-router-dom";
import "./NavBar.css"
import logoBand100 from "../../assets/images/nomadLogo100.jpg";
import M from 'materialize-css/dist/js/materialize.min.js';


const NavBar = () => {
useEffect(() => {
      //initialize materialize
      M.AutoInit();
    });
    return (

    <nav>
    <div className="nav-wrapper">
      <div className="container-fluid" id="navContainer">
      <Link to="/" className="brand-logo center blue-text text-darken-2 img-fluid"><img style={{Height: "auto",}} id="navImage" src={logoBand100}
       alt="band nomad logo"/></Link>
      <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i class="material-icons">menu</i></Link>
    
    <ul id="link-align" class="right hide-on-med-and-down">
    <li><NavLink 
    to="/" activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
    >Home</NavLink></li>
            
            <li>
            <NavLink
           
              to="/create"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Sign Up
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
              to="/update"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              My Account
            </NavLink>
          </li>
        </ul>
      </div>
        </div>
   
<ul className="sidenav" id="mobile-demo">
<li><NavLink to="/" activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}>Home</NavLink></li>
<li><NavLink to="/Create" activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}>Create Profile</NavLink></li>
<li><NavLink to="/Contact" activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}>Contact</NavLink></li>
<li><NavLink to="/Login" activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}>Login</NavLink></li>
<li><NavLink to="/Update" activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}>My Account</NavLink></li>
</ul>
</nav> 
  
  ); 
} 
  


export default NavBar;