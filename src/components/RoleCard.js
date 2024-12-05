import React from "react";

function RoleCard({ role, permissions, togglePermission }) {
  return (
    <div className="bg-gray-50 border rounded p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-gray-700">{role.name}</h3>
      <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
        {permissions.map((permission) => (
          <label
            key={permission}
            className="flex items-center space-x-2 bg-gray-200 px-3 py-2 rounded hover:bg-gray-300"
          >
            <input
              type="checkbox"
              className="accent-blue-500"
              checked={role.permissions.includes(permission)}
              onChange={() => togglePermission(role.id, permission)}
            />
            <span className="text-sm text-gray-600">{permission}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default RoleCard;
