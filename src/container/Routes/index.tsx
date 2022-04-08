import * as React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";

import core from "@fubo/core";
const { FederatedModule } = core.components;

// @ts-ignore
const Home = React.lazy(() => import('smarttv/Home'));
// @ts-ignore
const Search = React.lazy(() => import('smarttv/Search'));
// @ts-ignore
const Users = React.lazy(() => import('smarttv/Users'));

const Routes = () => (
  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/search">Search</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
    <Switch>
      <Route
        path="/"
        element={
          <FederatedModule>
            <Home />
          </FederatedModule>
        }
      />
      <Route
        path="/search"
        element={
          <FederatedModule>
            <Search />
          </FederatedModule>
        }
      />
      <Route
        path="/users"
        element={
          <FederatedModule>
            <Users />
          </FederatedModule>
        }
      />
    </Switch>
  </Router>
);

export default Routes;
