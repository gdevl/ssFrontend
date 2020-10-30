import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SongDetailRow from "./SongDetailRow";
import { fetchSongs } from "../store/songs";

const useStyles = makeStyles((theme) => ({
  header: {
    fontFamily: "Ubuntu",
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
  },
}));

const SongList = () => {
  const songs = useSelector((state) => state.songs.list);
  const userName = useSelector((state) => state.authentication.userName);
  const dispatch = useDispatch();
  const componentHeader = "My Songs";
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchSongs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!songs) return null;

  return (
    <>
      <Grid item container direction="column" justify="center">
        <Typography
          variant="h3"
          component="h3"
          gutterBottom
          className={classes.header}
        >
          {componentHeader}
        </Typography>
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
