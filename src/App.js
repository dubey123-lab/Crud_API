import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import About from "./Component/Routingdemo/About";
import User from "./Component/Routingdemo/User";
import Home from "./Component/Routingdemo/Home";
import Dynamicform from "./Component/Dyanamicformcom/Dynamicform";
import SideBarNavbar from "./Component/Routingdemo/SideBarNavbar";
import LoginForm from "./Component/Routingdemo/LoginForm";
import Protected from "./Component/Routingdemo/Protected";
import LoginContext from "./Contexts/login";
import DynamicForm from "./Component/Dyanamicformcom/Dynamicform";

function App() {
  // const [userData, _setUserData] = useState(null);
  // const [isLoading, _setIsLoading] = useState(true);

  // useEffect(() => {
  //   const userData = JSON.parse(localStorage.getItem("uservalue"));

  //   _setUserData(userData);
  //   _setIsLoading(false);
  // }, []);

  // const setUserData = (data) => _setUserData(data);

  // if (isLoading) return <h1>Loading ......</h1>;

  return (
    <>
      {/* <LoginContext.Provider value={{ userData, setUserData }}>
        <Router>
          <div>
          

            <Route exact path="/" component={LoginForm} />
            <Route path="/home/dash">
              <Protected Cmp={Home} />
            </Route>
          </div>
        </Router>
      </LoginContext.Provider> */}
      <DynamicForm />
    </>
  );
}

export default App;
