import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

const handleClick = () => {
  alert("You clicked the user profile button!");
};

const UserProfileButton = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton
        color="secondary"
        onClick={handleClick}
        aria-label="View Profile"
      >
        <AccountCircleIcon />
      </IconButton>
    </div>
  );
};

export default UserProfileButton;
