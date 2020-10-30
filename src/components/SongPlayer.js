import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      [theme.breakpoints.down("sm")]: {
        width: "60%",
      },
      backgroundColor: "#424242",
    },
    playIcon: {
      color: "white",
      "&:hover": {
        color: "#f57c00",
      },
    },
    volumeIcon: {
      color: "white",
      "&:hover": {
        color: "#f57c00",
      },
    },
    volumeSlider: {
      color: "black",
    },
    progressTime: {
      color: "white",
    },
    mainSlider: {
      color: "white",
      "& .MuiSlider-rail": {
        color: "white",
      },
      "& .MuiSlider-track": {
        color: "white",
      },
      "& .MuiSlider-thumb": {
        color: "white",
        "&:hover": {
          color: "#f57c00",
        },
      },
    },
  };
});

const playerTheme = useStyles;

const SongPlayer = () => {
  const playSongSrc = useSelector((state) => state.songs.playSongSrc);

  return (
    <AudioPlayer
      elevation={1}
      height="100%"
      width="100%"
      variation="default"
      spacing={1}
      autoplay={true}
      order="standart"
      preload="auto"
      src={playSongSrc ? playSongSrc : null}
      useStyles={playerTheme}
    />
  );
};

export default SongPlayer;
