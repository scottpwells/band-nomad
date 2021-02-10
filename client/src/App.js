import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Contact from "./containers/ContactPage/ContactPage";
import Create from "./containers/CreateProfile/CreateProfile";
import Login from "./containers/Login/Login";
import Home from "./containers/Home/Home";
import Profile from "./containers/Profile/Profile";
import InProfile from "./containers/InProfile/InProfile";
import Update from "./containers/UpdateProfile/UpdateProfile";
import Results from "./containers/SearchResults/SearchResults";


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
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/inProfile/id" component={InProfile} />
          <Route exact path="/update/:id" component={Update} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
