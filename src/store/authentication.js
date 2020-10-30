import { baseUrl } from "../config";

const TOKEN_KEY = "soundcloud/authentication/token";
const SET_TOKEN = "soundcloud/authentication/SET_TOKEN";
const REMOVE_TOKEN = "soundcloud/authentication/REMOVE_TOKEN";

export const removeToken = (token) => ({ type: REMOVE_TOKEN });
export const setToken = (token, userId, userName) => ({
  type: SET_TOKEN,
  token,
  userId,
  userName,
});

export const loadToken = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  const userId = window.localStorage.getItem("USER_ID");
  const userName = window.localStorage.getItem("USER_NAME");
  if (token && userId && userName) {
    dispatch(setToken(token, userId, userName));
  }
};

export const login = (email, password) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/session`, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const res = await response.json();
    const token = res.token;
    const userId = res.user.id;
    const userName = res.user.username;
    window.localStorage.setItem(TOKEN_KEY, token);
    window.localStorage.setItem("USER_ID", userId);
    window.localStorage.setItem("USER_NAME", userName);
    dispatch(setToken(token, userId, userName));
  }
};

export const logout = () => async (dispatch, getState) => {
  const {
    authentication: { token },
  } = getState();
  const response = await fetch(`${baseUrl}/session`, {
    method: "delete",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.ok) {
    window.localStorage.removeItem(TOKEN_KEY);
    dispatch(removeToken());
  }
};

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        userName: action.userName,
      };
    }

    case REMOVE_TOKEN: {
      const newState = { ...state };
      delete newState.token;
      return newState;
    }

    default:
      return state;
  }
}
