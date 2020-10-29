import React from "react";
import Box from "@material-ui/core/Box";
import { useRowFlexStyles } from "@mui-treasury/styles/flex/row";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const SongDetailRow = ({ songkey, title, artist, genre, url }) => {
  const flexStyles = useRowFlexStyles();
  return (
    <Box
      className={flexStyles.parent}
      minWidth={{ xs: 300, sm: 500, md: 800 }}
      bgcolor={"grey.100"}
      songkey={songkey}
    >
      <Box height={64} width={200} m={1}>
        <p className="song__detail-row__meta song__detail-row__meta-artist">
          {artist}
        </p>
        <p className="song__detail-row__meta">{title}</p>
      </Box>
      <Box className={flexStyles.rightChild} height={40} width={100} m={1}>
        <IconButton aria-label="play/pause">
          <PlayArrowIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SongDetailRow;
