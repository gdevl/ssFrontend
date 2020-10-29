import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navigation from "./Navigation";
import Footer from "./Footer";
import MainContainer from "./MainContainer";
import AddSongFormDialog from "./AddSongFormDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  stickyFooter: {
    bottom: 0,
    outline: "red",
    position: "absolute",
  },
  padMain: {
    padding: "20px",
  },
}));

const Main = () => {
  const formVisible = useSelector((state) => state.songs.formVisible);
  const classes = useStyles();

  return (
    <>
      <Navigation />
      <div className={classes.root}>
        <MainContainer className={classes.padMain} />
        {formVisible ? (
          <AddSongFormDialog className="add-song-form-dialog" />
        ) : (
          <h2>We are here!</h2>
        )}
      </div>
      <Grid item xs={12} className={classes.stickyFooter}>
        <Footer />
      </Grid>
    </>
  );
};

export default Main;
