
export const users = [
    {
      id: 1,
      name: "Tejas Adsare",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Ubed Shaikh",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Sanket Patil",
      role: "Viewer",
      status: "Active",
    },
  ];
  
  export const roles = [
    {
      id: 1,
      name: "Admin",
      permissions: ["read", "write", "delete"],
    },
    {
      id: 2,
      name: "Editor",
      permissions: ["read", "write"],
    },
    {
      id: 3,
      name: "Viewer",
      permissions: ["read"],
    },
  ];
  
  export const permissions = ["read", "write", "delete"];
  
  export const getUsers = () => users;
  
  export const addUser = (user) => {
    const newUser = { id: users.length + 1, ...user };
    users.push(newUser);
    return newUser;
  };
  
  export const updateUser = (id, updatedUser) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUser };
      return users[index];
    }
    return null;
  };
  
  export const deleteUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      return users.splice(index, 1);
    }
    return null;
  };
  
  export const getRoles = () => roles;
  
  export const addRole = (role) => {
    const newRole = { id: roles.length + 1, ...role };
    roles.push(newRole);
    return newRole;
  };
  
  export const updateRole = (id, updatedRole) => {
    const index = roles.findIndex((role) => role.id === id);
    if (index !== -1) {
      roles[index] = { ...roles[index], ...updatedRole };
      return roles[index];
    }
    return null;
  };
  
  export const deleteRole = (id) => {
    const index = roles.findIndex((role) => role.id === id);
    if (index !== -1) {
      return roles.splice(index, 1);
    }
    return null;
  };
  
 
  export const getPermissions = () => permissions;
  