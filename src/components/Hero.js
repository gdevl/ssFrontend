import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hero: {
    fontFamily: "Ubuntu",
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
  },
}));

const Hero = () => {
  const userName = useSelector((state) => state.authentication.userName);
  const classes = useStyles();

  return (
    <>
      <Grid container direction="column">
        <Grid item container justify="center">
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h3"
              gutterBottom
              className={classes.hero}
            >
              Welcome to Band Buddy{userName ? ", " + userName : null}
            </Typography>
            <Typography variant="h4" gutterBottom className={classes.hero}>
              Your practice repository solution
            </Typography>
            <Typography variant="h5" gutterBottom className={classes.hero}>
              Upload rehearsal demos and share with bandmates
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
