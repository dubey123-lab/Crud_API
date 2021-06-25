import React , {useState , useEffect} from "react";
import { Addform } from "./Addform";
import "./form.css";
import Table from "./Table";
import Updateform from "./Updateform";

const Form = (props) => {
    console.log(props);
    // const [myFiled, setmyFiled] = useState({
    //     id: Math.random() * 100,
    //     name: "",
    //     username: "",
    //     email: "",
    //     phone: "",
    // });

   
    useEffect(() => {
        props.fetchUser();
    }, []);

    // const handleChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;

    //     setmyFiled({ ...myFiled, [name]: value });
    //     console.log(myFiled);
    // };

    // const clearData = () => {
    //     setmyFiled({ name: "", username: "", email: "", phone: "" });
    // };}

 

    return (
        <>

          {props.userdata.reducer.isToggle  ? <Updateform value={props} />  : <Addform value={props} />}
            <Table
                tableData={props}
                
            />
        </>
    );
};

export default Form;
