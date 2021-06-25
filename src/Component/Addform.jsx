import React, {useEffect , useState} from 'react'

export const Addform = (props) => {

    console.log(props);
    const [myFiled, setmyFiled] = useState({
        id: Math.random() * 100,
        name: "",
        username: "",
        email: "",
        phone: "",
    });

  
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setmyFiled({ ...myFiled, [name]: value });
        console.log(myFiled);
    };

    const clearData = () => {
        setmyFiled({ name: "", username: "", email: "", phone: "" });
    };

    return (
        <>
            <div className="form-div">
                <form>
                    <div class="input-div">
                        <label>First Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </div>

                    <div class="input-div">
                        <label>User Name</label>
                        <input
                            type="text"
                            name="username"
                            value={myFiled.username}
                            placeholder="Enter User Name"
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </div>

                    <div class="input-div">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={myFiled.email}
                            placeholder="Enter Email"
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </div>

                    <div class="input-div">
                        <label>Mobile Number</label>
                        <input
                            type="text"
                            name="phone"
                            value={myFiled.phone}
                            placeholder="Enter Mobile Number"
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </div>

                     <button
                        type="reset"
                        className="btn-submit"
                        onClick={() => {
                            props.value.saveData(myFiled);
                            setmyFiled({ name: "", username: "", email: "", phone: "" });
                        }}
                    >
                        Submit
                    </button>
                    <button type="button" className="btn-submit" onClick={clearData}>
                        Clear
                    </button>
                </form>
            </div>


        </>
    )
}
