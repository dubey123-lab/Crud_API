import {SAVE_DATA} from "../Actions/constaint"


const initialState = {
    users: []
}

export default function reducer(state = initialState , action){
    switch(action.type){

        case SAVE_DATA :
            return{
                ...state , users : [ ...state.users , action.payload]
            }
            default :
            return state;
    }
}