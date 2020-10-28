import { baseUrl } from "../config";

const GET_USER_DETAILS = "soundcloud/users/GET_USER_DETAILS";

export const getUser = (userId) => ({ type: GET_USER_DETAILS });

export default function reducer(state = {}, action) {
  switch (action.type) {
    case GET_USER_DETAILS: {
      return {
        ...state,
        user: action.token,
      };
    }

    default:
      return state;
  }
}
