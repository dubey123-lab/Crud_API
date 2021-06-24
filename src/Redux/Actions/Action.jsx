import {SAVE_DATA} from "./constaint"
import axios from "axios"


export const saveData = (fileddata) =>{
    console.log("filedData is" , fileddata);
  
    return (dispatch) =>{
        axios
        .post("https://jsonplaceholder.typicode.com/users" , fileddata)
        .then((res)=>{
             const user = res.data
            //  console.log(user);
            console.log(res);
            dispatch({
                type : SAVE_DATA,
                payload : user
            })
        })
        .catch((error)=>{
            console.log("error is " ,error);
        })
    }
}

