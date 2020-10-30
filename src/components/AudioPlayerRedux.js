import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";

const AudioPlayerRedux = () => {
  const playSongSrc = useSelector((state) => state.songs.playSongSrc);
  // return ;
  return (
    <Grid container spacing={2} direction="row">
      <Grid
        item
        xs={12}
        // sm={6}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <AudioPlayer src={playSongSrc} style={{ padding: "5px" }} />
        <Typography style={{ padding: "5px" }}>Now playing...</Typography>
      </Grid>
    </Grid>
  );
};

export default AudioPlayerRedux;
