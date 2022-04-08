import * as React from "react";

import core from "@fubo/core";
const { FederatedModule } = core.components;

// @ts-ignore
const UserCounter = React.lazy(() => import('users/UserCounter'));
// @ts-ignore
const STACCounter = React.lazy(() => import('stac/STACCounter'));

const Search = () => (
  <main>
    <h2>SmartTV Search</h2>
    <FederatedModule>
      <UserCounter />
      <STACCounter />
    </FederatedModule>
  </main>
);

export default Search;
