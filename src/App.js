import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import About from "./Component/Routingdemo/About";
import User from "./Component/Routingdemo/User";
import Home from "./Component/Routingdemo/Home";
import Dynamicform from "./Component/Dyanamicformcom/Dynamicform";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>

              <li>
                <Link to="/form">Dynamicform</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <User></User>
            </Route>{" "}
            <Route path="/form">
              <Dynamicform />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
