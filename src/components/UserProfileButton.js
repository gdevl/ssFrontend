import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Tooltip from "@material-ui/core/Tooltip";
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
      <Tooltip title="Profile">
        <IconButton
          color="secondary"
          onClick={handleClick}
          aria-label="Profile"
        >
          <AccountCircleIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default UserProfileButton;
