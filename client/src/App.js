import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.jsx";
// import Upload from "./components/Upload/Upload.jsx"
import ContactPage from "./containers/ContactPage/ContactPage";
import Create from "./containers/CreateProfile/CreateProfile";
import Login from "./containers/Login/Login";
import Home from "./containers/Home/Home";
import InProfile from "./containers/InProfile/InProfile";
import Update from "./containers/UpdateProfile/UpdateProfile";
// import Footer from "./Components/Footer/Footer.jsx";


function App() {
  return (
    <div>
      <Router>
        <NavBar />
       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/contact/" component={ContactPage} />
          <Route exact path="/contact/:id" component={ContactPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/update" component={Update} />
          <Route path="/inProfile/:id" component={InProfile} />
          <Route exact path="/update/:id" component={Update} />
          {/* <Route exact path="/upload" component={Upload} /> */}
        </Switch>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
