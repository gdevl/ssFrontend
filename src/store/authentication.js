import { baseUrl } from '../config';

const TOKEN_KEY = 'bandbuddy/authentication/token';
const SET_TOKEN = 'bandbuddy/authentication/SET_TOKEN';
const REMOVE_TOKEN = 'bandbuddy/authentication/REMOVE_TOKEN';
const ADD_USER = 'bandbuddy/authentication/ADD_USER';
const SET_CURRENT_USER = 'bandbuddy/authentication/SET_CURRENT_USER';

export const removeToken = (token) => ({ type: REMOVE_TOKEN });
export const setToken = (token, userId, userName) => ({
  type: SET_TOKEN,
  token,
  userId,
  userName,
});

export const addUser = (user) => ({ type: ADD_USER, user });
export const setCurrentUser = (user) => ({ type: SET_CURRENT_USER, user });

export const createUser = (data) => async (dispatch, getState) => {
  console.log('posted user data: ', data);
  const response = await fetch(`${baseUrl}/users`, {
    method: 'post',
    headers: {
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const { newUser } = await response.json();
    dispatch(addUser(newUser));
    return newUser;
  }
};

export const loadToken = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  const userId = window.localStorage.getItem('USER_ID');
  const userName = window.localStorage.getItem('USER_NAME');
  if (token && userId && userName) {
    dispatch(setToken(token, userId, userName));
  }
};

export const login = (email, password) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/session`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const res = await response.json();
    const token = res.token;
    const userId = res.user.id;
    const userName = res.user.username;
    window.localStorage.setItem(TOKEN_KEY, token);
    window.localStorage.setItem('USER_ID', userId);
    window.localStorage.setItem('USER_NAME', userName);
    dispatch(setToken(token, userId, userName));
  }
};

export const logout = () => async (dispatch, getState) => {
  const {
    authentication: { token },
  } = getState();
  const response = await fetch(`${baseUrl}/session`, {
    method: 'delete',
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

    case ADD_USER: {
      return {
        ...state,
        user: action.user,
      };
    }

    default:
      return state;
  }
}
