import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Contact from "./Containers/ContactPage/ContactPage";
import Create from "./Containers/CreateProfile/CreateProfile";
import Login from "./Containers/Login/Login";
import Home from "./Containers/Home/Home";
import Profile from "./Containers/Profile/Profile";
import Update from "./Containers/UpdateProfile/UpdateProfile";
import Results from "./Containers/SearchResults/SearchResults";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route path="/profile/:id" component={Profile} />
          <Route exact path="/update" component={Update} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
