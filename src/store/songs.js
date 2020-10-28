import { baseUrl } from "../config";

const GET_ALL_SONGS = "soundcloud/songs/GET_ALL_SONGS";
const SET_CURRENT_SONG = "soundcloud/songs/SET_CURRENT_SONG";

export const getAllSongs = (list) => ({ type: GET_ALL_SONGS, list });
export const getOneSong = (current) => ({ type: SET_CURRENT_SONG, current });

export const fetchSongs = () => async (dispatch) => {
  const res = await fetch(`${baseUrl}/songs`, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const list = await res.json();
    dispatch(getAllSongs(list));
  }
};

export const fetchOneSong = (id) => async (dispatch, getState) => {
  const {
    authentication: { token },
  } = getState();
  const response = await fetch(`${baseUrl}/songs/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const current = await response.json();
    dispatch(getOneSong(current));
  }
};

export default function reducer(state = {}, action) {
  switch (action.type) {
    case GET_ALL_SONGS: {
      return {
        ...state,
        list: action.list,
      };
    }

    case SET_CURRENT_SONG: {
      return {
        ...state,
        current: action.current,
      };
    }

    default:
      return state;
  }
}
