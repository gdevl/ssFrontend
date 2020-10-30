import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import SongDetailRow from "./SongDetailRow";
import { fetchSongs } from "../store/songs";

const SongList = () => {
  const songs = useSelector((state) => state.songs.list);
  const userName = useSelector((state) => state.authentication.userName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!songs) return null;

  return (
    <>
      <Grid
        container
        direction="column"
        justify="stretch"
        alignItems="center"
        spacing={1}
      >
        {songs.map((song) => {
          return (
            <Grid item direction="row" xs={12}>
              <SongDetailRow
                songkey={song.id}
                title={song.title}
                artist={userName}
                genre={song.genre}
                url={song.songUrl}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default SongList;
