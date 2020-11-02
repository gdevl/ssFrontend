import React from "react";
import { useDispatch } from "react-redux";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import DeleteIcon from "@material-ui/icons/Delete";
import { playSong, setCurrentSong, deleteSong } from "../store/songs";

const SongTableRow = ({ songkey, title, artist, genre, url }) => {
  const dispatch = useDispatch();

  const handlePlay = (e) => {
    e.preventDefault();
    dispatch(playSong(url));
    dispatch(setCurrentSong(title));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteSong(songkey));
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
          <PlayArrowIcon onClick={handlePlay} />
        </IconButton>
      </TableCell>
      <TableCell align="right">
        <IconButton aria-label="delete">
          <DeleteIcon onClick={handleDelete} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default SongTableRow;
