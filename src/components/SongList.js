import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SongDetails from "./SongDetails";
import { fetchSongs } from "../store/songs";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  stickyFooter: {
    bottom: 0,
    outline: "red",
    position: "absolute",
  },
}));

const SongList = () => {
  const songs = useSelector((state) => state.songs.list);
  console.log("songs: ", songs);
  const dispatch = useDispatch();
  const classes = useStyles();

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
        justify="center"
        alignItems="center"
        spacing={1}
      >
        {songs.map((song) => {
          return (
            <Grid item direction="row" xs={12}>
              <SongDetails
                key={song.id}
                title={song.title}
                artist={song.creatorId}
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
