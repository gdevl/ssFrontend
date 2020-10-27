import React from "react";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import IconButton from "@material-ui/core/IconButton";

const ViewLibrary = () => {
  const handleClick = () => {
    alert(`You clicked the ViewLibrary button!`);
  };

  return (
    <IconButton color="secondary" onClick={handleClick} aria-label="sign-out">
      <LibraryMusicIcon />
    </IconButton>
  );
};

export default ViewLibrary;
