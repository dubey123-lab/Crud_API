import {
  DELETE_DATA,
  SAVE_DATA,
  SAVE_UPDATE,
  SHOW_DATA,
  SORT_DATA,
  UPDATE,
} from "../Actions/constaint";

const initialState = {
  users: [],
  updateData: [],
  isToggle: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_DATA:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case SHOW_DATA:
      return {
        ...state,
        users: action.payload,
      };
    case DELETE_DATA:
      return {
        ...state,
        users: state.users.filter((users) => users.id !== action.payload),
      };

    case UPDATE:
      return {
        ...state,
        updateData: [action.payload],
        isToggle: true,
      };

    case SAVE_UPDATE:
      return {
        ...state,
        users: state.users.map((val) => {
         return  val.id === action.payload.id
            ? {
               ...state
              }
            : val
        }), isToggle : false
      };

    case SORT_DATA:
      return {
        ...state,
        users: state.users.slice().sort((a, b) => {
          if (a < b) return -1;
          if (a > b) return 1;
        }),
      };

    default:
      return state;
  }
}
