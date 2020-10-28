import React from "react";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const AddToLibrary = () => {
  const handleClick = (e) => {
    alert(`You clicked the AddToLibrary button!`);
  };

  return (
    <Tooltip title="New Song">
      <IconButton color="secondary" onClick={handleClick} aria-label="sign-out">
        <LibraryAddIcon />
      </IconButton>
    </Tooltip>
  );
};

export default AddToLibrary;
