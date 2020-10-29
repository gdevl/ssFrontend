import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { showForm, hideForm } from "../store/songs";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 100,
    width: "500px",
    height: "500px",
  },
}));

const AddSongFormDialog = () => {
  const classes = styles();
  const formVisible = useSelector((state) => state.songs.formVisible);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    dispatch(hideForm());
  };

  const handleSongSubmit = () => {
    alert("You added a song!");
  };

  return (
    <div className={classes.root}>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog
        open={formVisible}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
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
          />
          <TextField
            autoFocus
            margin="dense"
            id="genre"
            label="Genre"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSongSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddSongFormDialog;
