import React from "react";
import { useDispatch } from "react-redux";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { playSong, setCurrentSong } from "../store/songs";

const SongTableRow = ({ songkey, title, artist, genre, url }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(playSong(url));
    dispatch(setCurrentSong(title));
  };
  return (
    <TableRow key={songkey}>
      <TableCell component="th" scope="row">
        {title}
      </TableCell>
      <TableCell align="right">{artist}</TableCell>
      <TableCell align="right">{genre}</TableCell>
      <TableCell align="right">
        <IconButton aria-label="play/pause">
          <PlayArrowIcon onClick={handleClick} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default SongTableRow;
