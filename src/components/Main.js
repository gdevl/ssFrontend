import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Navigation from './Navigation';
import Footer from './Footer';
import AddSongFormDialog from './AddSongFormDialog';
import Hero from './Hero';
import SongList from './SongList';
import SongTable from './SongTable';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  stickyFooter: {
    bottom: 0,
    outline: 'red',
    position: 'absolute',
  },
  padMain: {
    flexGrow: 8,
    height: 'calc(100vh - 124px)',
    padding: '20px',
  },
  spacer: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
}));

const Main = () => {
  const formVisible = useSelector((state) => state.songs.formVisible);
  const view = useSelector((state) => state.users.view);
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction='column'
        justify='space-between'
        className={classes.root}
      >
        <Grid item>
          <Navigation />
        </Grid>
        <div className={classes.spacer}></div>
        <Grid
          item
          container
          className={classes.padMain}
          alignItems='center'
          justify='center'
          direction='column'
        >
          {formVisible ? <AddSongFormDialog /> : null}
          <Grid item>{view === 'my-songs' ? <SongTable /> : <Hero />}</Grid>
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
