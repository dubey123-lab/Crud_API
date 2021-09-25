import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./Css/sidebar.css";
import DashBord from "./DashBord";
import styled from "styled-components";
import Protected from "./Protected";
const SideBarNavbar = () => {



    //     const DashBord = styled.button`
    //     background: ${(props) => (props.primary ? "palevioletred" : "white")};
    //     color: ${(props) => (this.props.primary ? "white" : "palevioletred")};
    //     font-size: 1em;
    //     padding: 0.25em 1em;
    //     border: 2px solid palevioletred;
    //     border-radius: 3px;
    //   `;
    return (

        <>
            <div>
                <div className="sidebar-div">
                    <Router>
                        <div className="sidebar-menu">
                            <ul>
                                <li>
                                    <Link exact to="/home/dash">
                                        Dashbord
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/home/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/home/contact">Contactus</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <Switch>
                                <Route exact path="/home/dash">
                                    <DashBord primary />
                                </Route>
                                <Route path="/home/about">
                                    <About />
                                </Route>
                                <Route path="/home/contact">
                                    <Contact />
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        </>
    );
};

export default SideBarNavbar;
