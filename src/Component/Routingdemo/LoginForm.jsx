import React, { Component, useState, useEffect, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import LoginContext from "../../Contexts/login";
import "./Css/login.css";

const LoginForm = () => {

    const [userValue, setUserValue] = useState({
        email: "",
        password: ""
    })

    const [userData, setUserData] = useState([])
    const [isValid, setisValid] = useState(false)
    const context = useContext(LoginContext);

    console.log(" context ", context);
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        /// create object
        setUserValue({ ...userValue, [name]: value })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userValue.email === "" && userValue.password === "") {
            alert("enter user Email and password ")
        }

        else {
            setisValid(true)
            const newRecord = { ...userValue, id: new Date().getTime().toString() }
            localStorage.setItem("uservalue", JSON.stringify(newRecord));
            context.setUserData(newRecord);
            // setUserData([...userData, newRecord])
            // console.log(userData.length);
            setUserValue({ email: "", password: "" });
        }
    }

    if (context.userData) {
        return <Redirect to="/home" />
    }



    return (
        <>
            <div className="div1">
                <div className="form-div">
                    <form onSubmit={handleSubmit}>

                        <div class="input-div">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Enter UserName" value={userValue.email} onChange={handleChange} autoComplete="off" />
                        </div>


                        <div class="input-div">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Enter UserName" value={userValue.password} onChange={handleChange} autoComplete="off" />
                        </div>

                        <button type="submit" className="btn-submit">Login</button>

                    </form>
                </div>


            </div>
            <div className="display-div">
                {userData.map((element) => {
                    return <div key={element.id}>

                        {element.email}

                        {element.password}
                    </div>
                })}
            </div>

        </>
    )

};

export default LoginForm;
