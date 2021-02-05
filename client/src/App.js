import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Contact from "./containers/ContactPage/ContactPage";
import Create from "./containers/CreateProfile/CreateProfile";
import Login from "./containers/Login/Login";
import Home from "./containers/Home/Home";
import Profile from "./containers/Profile/Profile";
import Update from "./containers/UpdateProfile/UpdateProfile";
import Ressults from "./containers/SearchResults/SearchResults";

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
          <Route path="/profile" component={Profile} />
          <Route exact path="/update" component={Update} />
          <Route exact path="/results" component={Ressults} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;