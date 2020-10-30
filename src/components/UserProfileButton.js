import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Tooltip from "@material-ui/core/Tooltip";
import { deepPurple } from "@material-ui/core/colors";

const UserProfileButton = () => {
  const handleClick = () => {
    alert("You clicked the user profile button!");
  };
  return (
    <Tooltip title="Profile">
      <IconButton color="secondary" onClick={handleClick} aria-label="Profile">
        <AccountCircleIcon />
      </IconButton>
    </Tooltip>
  );
};

export default UserProfileButton;
