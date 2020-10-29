import React from "react";
import { useDispatch } from "react-redux";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { showForm } from "../store/songs";

const AddSongButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showForm());
  };

  return (
    <>
      <Tooltip title="New Song">
        <IconButton
          color="secondary"
          onClick={handleClick}
          aria-label="new-song"
        >
          <LibraryAddIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default AddSongButton;
