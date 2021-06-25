import {DELETE_DATA, SAVE_DATA, SHOW_DATA, SORT_DATA, UPDATE} from "./constaint"
import axios from "axios"


export const saveData = (fileddata) =>{
    console.log("filedData is" , fileddata);
  
    return (dispatch) =>{
        axios
        .post("https://jsonplaceholder.typicode.com/users" , fileddata)
        .then((res)=>{
             const user = res.data
            //  console.log(user);
            // console.log(res);
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


export const fetchUser = () =>{
    return (dispatch) =>{
        axios
        
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log(res);
            const data = res.data
            dispatch({
                type : SHOW_DATA,
                payload : data
            })
        })
        .catch((error) =>{
            console.log(error);
        })

    }
}

 export const deleteData = (id) =>{
     return (dispatch) =>{
         console.log("selected id is" , id);
         axios
         .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
         .then((res)=>{
             console.log(res);
             dispatch({
                 type : DELETE_DATA,
                 payload : id
             })
         })
         .catch((error)=>{
             console.log(error);
         })
     }
 }

 export const editValue = (data) =>{
     console.log("Select edit data is" , data);
     return (dispatch) =>{
      axios
      .get(`https://jsonplaceholder.typicode.com/users/${data.id}`)
      .then((res)=>{
          console.log(res.data);
          dispatch({
              type : UPDATE,
              payload : data
          })
      })
      .catch((error)=>{
          console.log(error);
      })
     }
 }

 export const saveUpdate = (data) =>{
    console.log("select data for update" , data);
    return (dispatch) =>{
     axios
     .put(`https://jsonplaceholder.typicode.com/users/${data.id}` , data )
     .then((res)=>{
         const save = res.data
         console.log("afther click " , save);
         dispatch({
             type : UPDATE,
             payload : data
         })
     })
     .catch((error)=>{
         console.log(error);
     })
    }
}


 export const sortData = () =>{
        return {
            type : SORT_DATA
        }
 }