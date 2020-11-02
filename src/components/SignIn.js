import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { login } from '../store/authentication';
import { setUserView } from '../store/users';
import SignUp from './SignUp';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  ubuntu: {
    fontFamily: 'Ubuntu',
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const token = useSelector((state) => state.authentication.token);
  const view = useSelector((state) => state.users.view);
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('password');
  const dispatch = useDispatch();

  function Copyright() {
    return (
      <Typography
        variant='body2'
        color='textSecondary'
        align='center'
        className={classes.ubuntu}
      >
        {'Copyright © '}
        BandBuddy{` `}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    dispatch(setUserView('signup'));
  };

  if (token) {
    return <Redirect to='/' />;
  }

  if (view === 'signup') {
    return <SignUp />;
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography className={classes.ubuntu} component='h1' variant='h2'>
          BandBuddy
        </Typography>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={classes.ubuntu} component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            value={email}
            onChange={updateEmail}
            className={classes.ubuntu}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            value={password}
            onChange={updatePassword}
            className={classes.ubuntu}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
            className={classes.ubuntu}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={(classes.submit, classes.ubuntu)}
          >
            Sign In
          </Button>
          <Grid container justify='center'>
            <Grid item>
              <Link
                href='#'
                onClick={handleSignUp}
                variant='body2'
                className={classes.ubuntu}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
