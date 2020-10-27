import React from "react";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import IconButton from "@material-ui/core/IconButton";

const AddToLibrary = () => {
  const handleClick = (e) => {
    alert(`You clicked the AddToLibrary button!`);
  };

  return (
    <IconButton color="secondary" onClick={handleClick} aria-label="sign-out">
      <LibraryAddIcon />
    </IconButton>
  );
};

export default AddToLibrary;
