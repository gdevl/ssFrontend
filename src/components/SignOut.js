import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../store/authentication";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp";

const SignOut = () => {
  const loggedOut = useSelector((state) => !state.authentication.token);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return loggedOut ? (
    <Redirect to="/login" />
  ) : (
    <IconButton color="secondary" onClick={handleClick} aria-label="sign-out">
      <ExitToAppSharpIcon />
    </IconButton>
  );
};

export default SignOut;
