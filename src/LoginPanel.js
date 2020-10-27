import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "./store/authentication";

const LoginPanel = (props) => {
  const token = useSelector((state) => state.authentication.token);
  const [email, setEmail] = useState("demo@example.com");
  const [password, setPassword] = useState("password");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (token) {
    return <Redirect to="/" />;
  }
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Box color="text.primary">
        <form onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            label="Standard"
            placeholder="Email"
            type="text"
            value={email}
            onChange={updateEmail}
          />
          <TextField
            id="standard-basic"
            label="Standard"
            type="password"
            placeholder="password"
            value={password}
            onChange={updatePassword}
          />
          <Button variant="contained">Default</Button>
        </form>
      </Box>
    </Grid>
  );
  // return (
  //   <main className="centered middled">
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         placeholder="Email"
  //         value={email}
  //         onChange={updateEmail}
  //       />
  //       <input
  //         type="password"
  //         placeholder="Password"
  //         value={password}
  //         onChange={updatePassword}
  //       />
  //       <button type="submit">Login</button>
  //     </form>
  //   </main>
  // );
};

export default LoginPanel;
