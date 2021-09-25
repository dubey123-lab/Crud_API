import React, { useContext } from 'react'
import "./Css/navbar.css"
import { NavLink, useHistory } from "react-router-dom";
import LoginContext from '../../Contexts/login';

const Navbar = () => {
    const history = useHistory();
    const context = useContext(LoginContext);


    const logout = () => {
        context.setUserData(null);
        localStorage.setItem('uservalue', null);
        history.push('/');
    }

    console.log(" navbar context", context);
    return (
        <>
            <div className="nav-div">
                <div className="logo-div">
                    <h3>ReactRouting</h3>
                </div>

                <div className="logout-div">
                    <p onClick={logout} className="nav-link"  >
                        logout
                    </p>
                </div>
            </div>
        </>
    )
}

export default Navbar
