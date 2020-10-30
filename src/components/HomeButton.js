import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { setUserView } from "../store/users";

const HomeButton = () => {
  let view = useSelector((state) => state.users.view);
  const dispatch = useDispatch();

  const handleClick = () => {
    view = "";
    dispatch(setUserView(view));
  };

  return (
    <Tooltip title="Home">
      <IconButton color="secondary" onClick={handleClick} aria-label="home">
        <HomeIcon />
      </IconButton>
    </Tooltip>
  );
};

export default HomeButton;
