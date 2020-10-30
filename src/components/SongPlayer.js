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
    // loopIcon: {
    //   color: "#3f51b5",
    //   "&.selected": {
    //     color: theme.primary,
    //   },
    //   "&:hover": {
    //     color: "#7986cb",
    //   },
    //   [theme.breakpoints.down("sm")]: {
    //     display: "none",
    //   },
    // },
    playIcon: {
      color: "white",
      "&:hover": {
        color: "#f57c00",
      },
    },
    volumeIcon: {
      // color: "rgba(0, 0, 0, 0.54)",
      color: "white",
      "&:hover": {
        color: "#f57c00",
      },
    },
    volumeSlider: {
      color: "black",
    },
    progressTime: {
      // color: "rgba(0, 0, 0, 0.54)",
      color: "white",
    },
    mainSlider: {
      color: "white",
      "& .MuiSlider-rail": {
        // color: "#7986cb",
        color: "white",
      },
      "& .MuiSlider-track": {
        // color: "#3f51b5",
        color: "white",
      },
      "& .MuiSlider-thumb": {
        // color: "#303f9f",
        color: "white",
        "&:hover": {
          color: "#f57c00",
        },
      },
    },
  };
});

const playerTheme = useStyles;

const SongPlayer = (props) => {
  const playSongSrc = useSelector((state) => state.songs.playSongSrc);
  // make isPlaying: bool for toggling play/pause buttons
  console.log("songplayer props: ", props);

  return (
    <AudioPlayer
      elevation={1}
      height="100%"
      width="100%"
      variation="default"
      spacing={1}
      // download={true}
      autoplay={true}
      order="standart"
      preload="auto"
      // loop={true}
      src={playSongSrc ? playSongSrc : null}
      useStyles={playerTheme}
    />
  );
};

export default SongPlayer;
