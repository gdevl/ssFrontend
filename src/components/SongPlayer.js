import React from "react";
import { makeStyles } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";

const src = "https://open.spotify.com/track/1yb3G1zT0Hy3BaIVNJoBtA";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      backgroundColor: "#ffcc80",
    },
    loopIcon: {
      color: "#3f51b5",
      "&.selected": {
        color: theme.primary,
      },
      "&:hover": {
        color: "#7986cb",
      },
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    playIcon: {
      color: "#f50057",
      "&:hover": {
        color: "#ff4081",
      },
    },
    volumeIcon: {
      color: "rgba(0, 0, 0, 0.54)",
    },
    volumeSlider: {
      color: "black",
    },
    progressTime: {
      color: "rgba(0, 0, 0, 0.54)",
    },
    mainSlider: {
      color: "#3f51b5",
      "& .MuiSlider-rail": {
        color: "#7986cb",
      },
      "& .MuiSlider-track": {
        color: "#3f51b5",
      },
      "& .MuiSlider-thumb": {
        color: "#303f9f",
      },
    },
  };
});

const playerTheme = useStyles;

const SongPlayer = (props) => {
  return (
    <AudioPlayer
      elevation={1}
      height="100%"
      width="100%"
      variation="default"
      spacing={1}
      download={true}
      autoplay={true}
      order="standart"
      preload="auto"
      loop={true}
      src={src}
      useStyles={playerTheme}
    />
  );
};

export default SongPlayer;
