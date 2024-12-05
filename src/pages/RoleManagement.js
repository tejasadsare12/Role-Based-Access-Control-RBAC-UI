import React, { useState } from "react";
import { roles, permissions } from "../data/models";
import RoleCard from "../components/RoleCard";

function RoleManagement() {
  const [roleList, setRoleList] = useState(roles);

  const addRole = () => {
    const newRole = { id: roleList.length + 1, name: `New Role ${roleList.length + 1}`, permissions: [] };
    setRoleList([...roleList, newRole]);
  };

  const togglePermission = (roleId, permission) => {
    const updatedRoles = roleList.map((role) =>
      role.id === roleId
        ? {
            ...role,
            permissions: role.permissions.includes(permission)
              ? role.permissions.filter((p) => p !== permission)
              : [...role.permissions, permission],
          }
        : role
    );
    setRoleList(updatedRoles);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Role Management</h1>
        <button
          onClick={addRole}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition mb-4"
        >
          Add Role
        </button>

        <div className="mt-6 space-y-4">
          {roleList.map((role) => (
            <RoleCard
              key={role.id}
              role={role}
              permissions={permissions}
              togglePermission={togglePermission}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoleManagement;
