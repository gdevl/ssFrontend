import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const genres = [
  "avant-garde",
  "blues",
  "carribean",
  "classical",
  "comedy",
  "country",
  "easy listening",
  "electronic",
  "flamenco",
  "folk",
  "heavy metal",
  "hip hop",
  "jazz",
  "latin",
  "pop",
  "punk rock",
  "R&B",
  "rock",
  "soul",
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AddSongGenreSelect = (props) => {
  const classes = useStyles();

  const handleChange = (event) => {
    props.setGenre(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={props.genre}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {genres.map((genre, i) => {
            return (
              <MenuItem key={`genre-${i}`} value={genre}>
                {genre}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText>Select a genre for your song</FormHelperText>
      </FormControl>
    </div>
  );
};

export default AddSongGenreSelect;
