import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { showForm, hideForm, createSong } from "../store/songs";
import AddSongGenreSelect from "./AddSongGenreSelect";
import SongUpload from "./SongUpload";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 100,
    width: "500px",
    height: "500px",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const AddSongFormDialog = () => {
  const classes = styles();
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [song, setSong] = useState("");

  const formVisible = useSelector((state) => state.songs.formVisible);
  const userId = useSelector((state) => state.authentication.userId);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(true);

  const [openspinner, setOpenSpinner] = React.useState(false);

  const handleClose = () => {
    setOpenSpinner(false);
  };
  const handleToggle = () => {};

  const handleCancel = () => {
    dispatch(hideForm());
  };

  const updateProperty = (callback) => (e) => {
    callback(e.target.value);
  };

  const handleSongSubmit = (e) => {
    e.preventDefault();
    setOpenSpinner(!openspinner);
    const songData = new FormData();
    songData.append("title", title);
    songData.append("genre", genre);
    songData.append("file", song);
    songData.append("creatorId", userId);
    dispatch(createSong(songData));
  };

  return (
    <div className={classes.root}>
      <Dialog
        open={formVisible}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSongSubmit}>
          <DialogTitle id="form-dialog-title">Add Song</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter song details below</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Song Title"
              type="text"
              fullWidth
              value={title}
              onChange={updateProperty(setTitle)}
            />
            <AddSongGenreSelect
              autoFocus
              margin="dense"
              id="genre"
              name="genre"
              fullWidth
              genre={genre}
              setGenre={setGenre}
            />
            <input
              type="file"
              placeholder="Upload an mp3"
              required
              onChange={(e) => setSong(e.target.files[0])}
            />
            {/* <SongUpload /> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancel} color="primary">
              Cancel
            </Button>
            {/* <Button type="submit" color="primary">
              Submit
            </Button> */}
            <button type="submit">Submit</button>
            <Backdrop
              className={classes.backdrop}
              openspinner={openspinner}
              onClick={handleClose}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default AddSongFormDialog;
