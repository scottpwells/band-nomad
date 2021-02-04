import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Contact from "./containers/ContactPage/ContactPage";
import Create from "./containers/CreateProfile/CreateProfile";
import Login from "./containers/Login/Login";
import Home from "./containers/Home/Home";
import Profile from "./containers/Profile/Profile";
import Update from "./containers/UpdateProfile/UpdateProfile";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/new-product" component={NewProduct} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;