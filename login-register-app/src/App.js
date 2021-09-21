import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import ShowDetails from "./components/ShowDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import UserLoggedIn from "./components/UserLoggedIn";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/success">
            <ShowDetails />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/userloggedin">
            <UserLoggedIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
