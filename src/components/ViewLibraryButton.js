import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { setUserView } from "../store/users";

const ViewLibraryButton = () => {
  const view = useSelector((state) => state.users.view);
  const dispatch = useDispatch();
  const destination = "my-songs";
  const handleClick = () => {
    dispatch(setUserView(destination));
  };

  return (
    <Tooltip title="My Songs">
      <IconButton
        color="secondary"
        onClick={handleClick}
        name="view-my-songs"
        aria-label="my-songs"
      >
        <LibraryMusicIcon />
      </IconButton>
    </Tooltip>
  );
};

export default ViewLibraryButton;
