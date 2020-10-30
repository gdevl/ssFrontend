import { baseUrl } from "../config";

const GET_USER_DETAILS = "bandbuddy/users/GET_USER_DETAILS";
const SET_USER_VIEW = "bandbuddy/users/SET_USER_VIEW";

export const getUser = (userId) => ({ type: GET_USER_DETAILS });
export const setUserView = (view) => ({ type: SET_USER_VIEW, view });

export default function reducer(state = { view: "" }, action) {
  switch (action.type) {
    case GET_USER_DETAILS: {
      return {
        ...state,
        user: action.token,
      };
    }

    case SET_USER_VIEW: {
      return {
        ...state,
        view: action.view,
      };
    }

    default:
      return state;
  }
}
