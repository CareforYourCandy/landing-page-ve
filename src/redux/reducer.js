const initialState = {
  users: [],
  error: "",
  currentUser: {},
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "EDIT_USER":
      return {
        ...state,
        users: state.users.map((user, i) =>
          i === action.index ? action.payload : user
        ),
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user, i) => i !== action.payload),
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
