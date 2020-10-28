import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navigation from './Navigation';
import Footer from './Footer';
import { CallReceived } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  stickyFooter: {
    bottom: 0,
    outline: 'red',
    position: 'absolute',
  },
}));

const MainContainer = () => {
  const classes = useStyles();

  return (
    <>
      <Navigation />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>
              When a Free Captain named Magna Stormeyes discovered the natural
              harbor on Windward Isle over 2 centuries ago, she immediately
              recognized that it would make the perfect haven from which to
              launch a pirate fleet. Starting with just one ship and a small
              encampment on Windward’s harbor, she began to ply the trade of
              piracy. With the plunder from her initial hauls, she set about
              building a keep, which she called Tidewater Rock. From the vantage
              point atop the Rock, she found she could pick out particularly
              ripe targets while receiving ample of warning of hostile ships
              approaching.
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              Over time, Stormeyes’ successes enabled her to build a sizeable
              fleet, as well as more strongholds on several different islands.
              She became the scourge of the southern sea lanes and eventually
              claimed the Hurricane Crown as her own. Shortly after becoming the
              Hurricane King and relocating to Port Peril, she was assassinated
              by rival Free Captains. Stormeyes’ burgeoning fleet fell apart
              among its squabbling captains. Gerta Frome, first mate of
              Stormeyes’ flagship, the Cocksure, seized control of the Rock.
              Within only a few years, Frome became a powerful Free Captain
              herself, and the legend of Tidewater Rock as both a powerful good
              luck talisman and an impregnable bastion was born. The most recent
              lord of Tidewater Rock was Bertram Smythee, captain of the Vale
              and three other brigs. Like his predecessors, he held Tidewater
              Rock as his seat, but controlled a few other small castles on
              surrounding islands as well. Over a decade ago, “Iron Bert”
              Smythee went to sea with his small fleet in a feud with Free
              Captain Carola Antiochus and was never seen again. Word came back
              that Antiochus had lured Smythee into the edges of the Eye of
              Abendego and ambushed him with the help of a previously unknown
              ally—one Barnabas Harrigan—and that Smythee’s fleet was cut to
              pieces between the enemy fleets. Though Captain Smythee managed to
              sink Antiochus’s Pergador, he was last seen on the deck of the
              crippled and sinking Vale at the mercy of the Eye’s hurricane
              winds.Captain Harrigan claimed the remainder of Antiochus’s fleet
              and took control of several of Smythee’s undefended castles. He
              made an attempt to take the Tidewater Rock as well, only to
              discover that Smythee’s able widow had taken charge of its
              defenses. She managed to fend off his attack with such alacrity
              that Harrigan decided to leave the widow to rot in her tower.
              Although Tidewater Rock remains a secure base and harbor, it does
              not command the reputation it once did. The current owner of the
              Rock is Agasta Smythee, widow of the late Iron Bert. Though Lady
              Smythee is a competent and formidable figure, without any of her
              late husband’s ships or network of castles, the Lady of the Rock
              has fallen upon hard times. Lady Smythee’s forces have been
              reduced to a small body of loyal guards and a few family retainers
              whom she employs to eke out a living. The Rock still commands some
              treasures—its favorable location, its security, and the late
              captain’s fabled iron shirt from which he gained his nickname—but
              it is otherwise remote and at the mercy of what the sea chooses to
              throw upon its shores.
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              Over the many years since, control of Tidewater Rock has passed
              from hand to hand, and its strategic location and practical
              defensibility have enabled its owners to enrich themselves
              substantially. With the rebellion of Sargava and its ostensible
              alliance with the Free Captains, Tidewater Rock became of less
              strategic importance, and its owners came to be of less
              prominence, but the age-old axiom of “Good fortune and sure sail
              await what one can crack the Tidewater Rock” has stood the test of
              time among the pirates of the Shackles and is oft-quoted—if seldom
              heeded—even today.
            </Paper>
          </Grid>
        </Grid>
      </div>
      <Grid item xs={12} className={classes.stickyFooter}>
        <Footer />
      </Grid>
    </>
  );
};

export default MainContainer;
