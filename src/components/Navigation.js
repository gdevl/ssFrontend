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

const siteTitle = "songThrong";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            {siteTitle}
          </Typography>
          <UserProfileButton />
          <AddSongButton />
          <ViewLibrary />
          <SignOut />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
