import { baseUrl } from "../config";

const GET_ALL_SONGS = "soundcloud/songs/GET_ALL_SONGS";

export const getAllSongs = () => ({ type: GET_ALL_SONGS });

export const fetchSongs = () => async (dispatch) => {
  const res = await fetch(`${baseUrl}/songs`, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const { songs } = await res.json();
    dispatch(getAllSongs(songs));
  }
};

export default function reducer(state = {}, action) {
  switch (action.type) {
    case GET_ALL_SONGS: {
      return {
        ...state,
        songs: action.songs,
      };
    }

    default:
      return state;
  }
}
