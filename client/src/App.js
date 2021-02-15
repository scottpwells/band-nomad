import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import ContactPage from "./containers/ContactPage/ContactPage";
import Create from "./containers/CreateProfile/CreateProfile";
import Login from "./containers/Login/Login";
import Home from "./containers/Home/Home";
import InProfile from "./containers/InProfile/InProfile";
import Update from "./containers/UpdateProfile/UpdateProfile";



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
          <Route path="/inProfile/:id" component={InProfile} />
          <Route exact path="/update/:id" component={Update} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
