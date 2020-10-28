import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navigation from "./Navigation";
import Footer from "./Footer";
import MainContainer from "./MainContainer";

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
  const classes = useStyles();
  return (
    <>
      <Navigation />
      <div className={classes.root}>
        <MainContainer className={classes.padMain} />
      </div>
      <Grid item xs={12} className={classes.stickyFooter}>
        <Footer />
      </Grid>
    </>
  );
};

export default Main;
