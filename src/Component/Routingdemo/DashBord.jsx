import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink,
} from "react-router-dom";

import Button from "../StyledComponents/Button"
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Pages from "./Pages";

const DashBord = () => {

    let { path, url } = useRouteMatch();

    console.log("<!------Path and Url --------->", path, url);

    return (
        <>
            <div>
                <Router>
                    <NavLink to={`${url}/page1`}>
                        <Button primary>
                            Page1
                        </Button>

                    </NavLink>

                    <NavLink to={`${url}/page2`}>
                        <Button secondary>
                            Page2
                        </Button>
                    </NavLink>


                    <NavLink to={`${url}/page3`}>
                        <Button primary>
                            Page3
                        </Button>
                    </NavLink>

                    {/* <Switch>
                        <Route exact path="/home/dash/page1">
                            <Page1 />
                        </Route>
                        <Route path="/home/dash/page2">
                            <Page2 />
                        </Route>
                        <Route path="/home/dash/page3">
                            <Page3 />
                        </Route>
                    </Switch> */}

                    <Switch>
                        <Route exact path={path}>
                            <h3>Please select a topic.</h3>
                        </Route>
                        <Route path={`${path}/:pagesID`}>
                            <Pages />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </>
    );
};

export default DashBord;
