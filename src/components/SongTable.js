import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { fetchSongs } from "../store/songs";
import SongTableRow from "./SongTableRow";

const useStyles = makeStyles({
  table: {
    width: "100%",
    minWidth: 340,
  },
  header: {
    fontFamily: "Ubuntu",
    textAlign: "center",
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5,
  },
});

const SongTable = () => {
  const songs = useSelector((state) => state.songs.list);
  const userName = useSelector((state) => state.authentication.userName);
  const dispatch = useDispatch();
  const componentHeader = "My Songs";
  const emptySongAlert = "Woops! Looks like you haven't uploaded anything.";
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchSongs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (songs === undefined) {
    return (
      <>
        <Grid
          item
          container
          direction="column"
          justify="center"
          xs={12}
          md={12}
        >
          <Typography
            variant="h3"
            component="h3"
            gutterBottom
            className={classes.header}
          >
            {emptySongAlert}
          </Typography>
        </Grid>
      </>
    );
  }

  return (
    <>
      <Grid item container direction="column" justify="center" xs={12} md={12}>
        <Typography
          variant="h3"
          component="h3"
          gutterBottom
          className={classes.header}
        >
          {componentHeader}
        </Typography>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            padding="default"
            size="small"
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Artist</TableCell>
                <TableCell align="right">Genre</TableCell>
                <TableCell align="right">Play</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {songs.map((song) => {
                return (
                  <SongTableRow
                    songkey={song.id}
                    title={song.title}
                    artist={userName}
                    genre={song.genre}
                    url={song.songUrl}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};

export default SongTable;
