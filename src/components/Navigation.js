import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SignOut from "./SignOut";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import AddSongButton from "./AddSongButton";
import ViewLibrary from "./ViewLibraryButton";
import UserProfileButton from "./UserProfileButton";
import HomeButton from "./HomeButton";

const siteTitle = "BandBuddy";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontFamily: "Ubuntu",
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {siteTitle}
        </Typography>
        <HomeButton />
        <UserProfileButton />
        <AddSongButton />
        <ViewLibrary />
        <SignOut />
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
