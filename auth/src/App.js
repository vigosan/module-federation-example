import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { Signin, Signup, Signout } from "./components";

import "./App.css";

function App({ history, onSignIn, onSignOut }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth/signin">
          <Signin onSignIn={onSignIn} />
        </Route>
        <Route path="/auth/signout">
          <Signout onSignOut={onSignOut} />
        </Route>
        <Route path="/auth/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
