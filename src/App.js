import React, { useState, useEffect } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import Main from "./components/Main";
import { loadToken } from "./store/authentication";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      rest.needLogin === true ? (
        <Redirect to="/login" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#9e9e9e",
      main: "#424242",
      dark: "#212121",
      contrastText: "#fff",
    },
    secondary: {
      light: "#e0e0e0",
      main: "#f57c00",
      dark: "#e65100",
      contrastText: "#000",
    },
  },
});

const styles = makeStyles((theme) => ({
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
    document.title = "BandBuddy";
  }, []);

  if (!loaded) {
    return null;
  }
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/login" component={SignIn} />
          <PrivateRoute
            path="/"
            exact={true}
            needLogin={needLogin}
            component={Main}
          />
          <PrivateRoute
            path="/me"
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
