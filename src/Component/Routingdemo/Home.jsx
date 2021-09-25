import React from 'react'
import Navbar from './Navbar'
import SideBarNavbar from './SideBarNavbar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



const Home = () => {
    return (
        <div>
            <Navbar />
            <SideBarNavbar />
        </div>
    )
}

export default Home
