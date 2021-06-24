import React, { useState } from 'react'
import "./form.css"

const Form = (props) => {
    console.log(props);
    const [myFiled, setmyFiled] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: ""

    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setmyFiled({ ...myFiled, [name]: value })
        console.log(myFiled);
    }


    
   
    return (
        <>
            <div className="form-div">

                <form>
                    <div class="input-div">
                        <label>First Name</label>
                        <input type="text" name="firstname" value={myFiled.firstname} placeholder="Enter First Name" onChange={handleChange} autoComplete="off" />
                    </div>

                    <div class="input-div">
                        <label>Last Name</label>
                        <input type="text" name="lastname" value={myFiled.lastname} placeholder="Enter Last Name" onChange={handleChange} autoComplete="off" />
                    </div>

                    <div class="input-div">
                        <label>Email</label>
                        <input type="email" name="email" value={myFiled.email} placeholder="Enter Email" onChange={handleChange} autoComplete="off" />
                    </div>

                    <div class="input-div">
                        <label>Mobile Number</label>
                        <input type="text" name="phone" value={myFiled.phone} placeholder="Enter Mobile Number" onChange={handleChange} autoComplete="off" />
                    </div>

                    <button type="button" className="btn-submit" onClick={()=>{props.saveData(myFiled)}}>Submit</button>
                    <button className="btn-submit">Clear</button>

                </form>
            </div>

        </>
    )
}

export default Form
