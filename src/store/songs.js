import { baseUrl } from "../config";

const GET_ALL_SONGS = "bandbuddy/songs/GET_ALL_SONGS";
const SET_CURRENT_SONG = "bandbuddy/songs/SET_CURRENT_SONG";
const SHOW_FORM = "bandbuddy/songs/SHOW_FORM";
const HIDE_FORM = "bandbuddy/songs/HIDE_FORM";
const ADD_SONG = "bandbuddy/songs/ADD_SONG";
const PLAY_SONG = "bandbuddy/songs/PLAY_SONG";
const DESTROY_SONG = "bandbuddy/songs/DESTROY_SONG";

export const getAllSongs = (list) => ({ type: GET_ALL_SONGS, list });
export const setCurrentSong = (current) => ({
  type: SET_CURRENT_SONG,
  current,
});
export const showForm = () => ({ type: SHOW_FORM });
export const hideForm = () => ({ type: HIDE_FORM });
export const addSong = (song, list) => ({ type: ADD_SONG, song, list });
export const playSong = (playSongSrc) => ({
  type: PLAY_SONG,
  playSongSrc,
});
export const destroySong = (song, list) => ({ type: DESTROY_SONG, song, list });

export const deleteSong = (id) => async (dispatch, getState) => {
  const response = await fetch(`${baseUrl}/songs/${id}`, {
    method: "delete",
    headers: {},
  });

  if (response.ok) {
    const res = response.json();
    dispatch(destroySong(res));
    const { list } = getState();
    console.log("list: ", list);
    dispatch(getAllSongs(list));
  }
};

export const createSong = (data) => async (dispatch, getState) => {
  const response = await fetch(`${baseUrl}/songs`, {
    method: "post",
    headers: {
      // Authorization: `Bearer ${token}`,
    },
    body: data,
  });

  if (response.ok) {
    const { newSong } = await response.json();
    dispatch(hideForm());
    dispatch(addSong(newSong));
    return newSong;
  }
};

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

// export const fetchOneSong = (id) => async (dispatch, getState) => {
//   const {
//     authentication: { token },
//   } = getState();
//   const response = await fetch(`${baseUrl}/songs/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   if (response.ok) {
//     const current = await response.json();
//     dispatch(getOneSong(current));
//   }
// };

export default function reducer(
  state = { formVisible: false, playSongSrc: "" },
  action
) {
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

    case SHOW_FORM: {
      return {
        ...state,
        formVisible: true,
      };
    }

    case HIDE_FORM: {
      return {
        ...state,
        formVisible: false,
      };
    }

    case ADD_SONG: {
      return {
        ...state,
        list: [...state.list, action.song],
      };
    }

    case PLAY_SONG: {
      return {
        ...state,
        playSongSrc: action.playSongSrc,
      };
    }

    case DESTROY_SONG: {
      return {
        ...state,
        list: [
          ...state.list.slice(0, action.song),
          ...state.list.slice(action.song + 1),
        ],
      };
    }

    default:
      return state;
  }
}
