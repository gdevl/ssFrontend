import React from "react";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const ViewLibrary = () => {
  const handleClick = () => {
    alert(`You clicked the ViewLibrary button!`);
  };

  return (
    <Tooltip title="My Songs">
      <IconButton color="secondary" onClick={handleClick} aria-label="sign-out">
        <LibraryMusicIcon />
      </IconButton>
    </Tooltip>
  );
};

export default ViewLibrary;
