import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import Navigation from './components/Navigation';
import Main from './components/Main';
import { loadToken } from './store/authentication';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      rest.needLogin === true ? (
        <Redirect to='/login' />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[700],
    },
    secondary: {
      main: blue[900],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = () => {
  const token = useSelector((state) => state.authentication.token);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const needLogin = !token;

  useEffect(() => {
    setLoaded(true);
    dispatch(loadToken());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.title = 'Sound Shroud';
  }, []);

  if (!loaded) {
    return null;
  }
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path='/login' component={SignIn} />
          <PrivateRoute
            path='/'
            exact={true}
            needLogin={needLogin}
            component={Main}
          />
          <PrivateRoute
            path='/pokemon/:pokemonId'
            exact={true}
            needLogin={needLogin}
            component={Main}
          />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
