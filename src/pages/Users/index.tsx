import * as React from "react";

import core from "@fubo/core";
const { FederatedModule } = core.components;

import UserList from "@fubo/users__components__user-list"; // imported from node_modules

// @ts-ignore
const FederatedUserList = React.lazy<typeof UserList>(() => import('users/UserList'));
// @ts-ignore
const UserCounter = React.lazy(() => import('users/UserCounter'));

const Users = () => (
  <main>
    <h2>SmartTV Users</h2>
    <FederatedModule>
      <FederatedUserList title="Users" />
    </FederatedModule>
    <FederatedModule>
      <UserCounter />
    </FederatedModule>
  </main>
);

export default Users;
