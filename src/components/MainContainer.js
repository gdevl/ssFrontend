import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SongList from "../components/SongList";

const MainContainer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography
          component="div"
          style={{ padding: "20px", height: "100vh" }}
        >
          <SongList />
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default MainContainer;
