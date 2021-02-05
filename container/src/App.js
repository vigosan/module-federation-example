import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Layout, Loader } from "./components/ui";
import { useApp } from "./hooks";

// TODO
// import { Auth, Payments, Dashboard, Welcome } from "./components";

import { Welcome } from "./components/Welcome";
const AuthLazy = lazy(() => import("./components/Auth/Auth"));
const DashboardLazy = lazy(() => import("./components/Dashboard/Dashboard"));
const PaymentsLazy = lazy(() => import("./components/Payments/Payments"));

import "./App.css";

function App() {
  const { isSignedIn } = useApp();

  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/payments">
              <PaymentsLazy />
            </Route>
            <Route path="/dashboard">
              {!isSignedIn && <Redirect to="/" />}
              <DashboardLazy />
            </Route>
            <Route path="/auth">
              <AuthLazy />
            </Route>
            <Route path="/">
              {isSignedIn ? <DashboardLazy /> : <Welcome />}
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
