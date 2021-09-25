import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import HomeComponent from './HomeComponent';
import Topics from './Topics';

const NestingExample = () => {
    return (
        <>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>

                    <hr />

                    <Switch>
                        <Route exact path="/">
                            <HomeComponent />
                        </Route>
                        <Route path="/topics">
                            <Topics />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default NestingExample
