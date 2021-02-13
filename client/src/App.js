import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import NavBar from "./Components/NavBar/NavBar";
import Contact from "./containers/ContactPage/ContactPage";
=======
import NavBar from "./components/NavBar/NavBar";
import ContactPage from "./containers/ContactPage/ContactPage";
>>>>>>> 83c980acb9742a234942561748244a5aac8a0d4c
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
          <Route exact path="/contact/" component={ContactPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/update" component={Update} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/inProfile/:id" component={InProfile} />
          <Route exact path="/update/:id" component={Update} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
