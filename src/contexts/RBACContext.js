import React, { createContext, useContext, useState } from "react";
import {
  getUsers,
  getRoles,
  getPermissions,
  addUser,
  updateUser,
  deleteUser,
  addRole,
  updateRole,
  deleteRole,
} from "../data/models";


const RBACContext = createContext();

export const useRBAC = () => useContext(RBACContext);

const RBACProvider = ({ children }) => {
  const [users, setUsers] = useState(getUsers());
  const [roles, setRoles] = useState(getRoles());
  const [permissions] = useState(getPermissions());

  const createUser = (user) => {
    const newUser = addUser(user);
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const editUser = (id, updatedUser) => {
    const updated = updateUser(id, updatedUser);
    if (updated) {
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === id ? updated : user))
      );
    }
  };

  const removeUser = (id) => {
    deleteUser(id);
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const createRole = (role) => {
    const newRole = addRole(role);
    setRoles((prevRoles) => [...prevRoles, newRole]);
  };

  const editRole = (id, updatedRole) => {
    const updated = updateRole(id, updatedRole);
    if (updated) {
      setRoles((prevRoles) =>
        prevRoles.map((role) => (role.id === id ? updated : role))
      );
    }
  };

  const removeRole = (id) => {
    deleteRole(id);
    setRoles((prevRoles) => prevRoles.filter((role) => role.id !== id));
  };

  const getRolePermissions = (roleId) => {
    const role = roles.find((role) => role.id === roleId);
    return role ? role.permissions : [];
  };

  const value = {
    users,
    roles,
    permissions,
    createUser,
    editUser,
    removeUser,
    createRole,
    editRole,
    removeRole,
    getRolePermissions,
  };

  return <RBACContext.Provider value={value}>{children}</RBACContext.Provider>;
};

export default RBACProvider;
