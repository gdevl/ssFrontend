import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SongList from "../components/SongList";
import Hero from "./Hero";

const MainContainer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ padding: "60px" }} maxWidth="md">
        <Typography
          component="div"
          style={{ padding: "20px", height: "100vh" }}
        >
          <Hero />

          {/* <SongList /> */}
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default MainContainer;
