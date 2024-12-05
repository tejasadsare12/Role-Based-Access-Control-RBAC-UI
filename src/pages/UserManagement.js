import React, { useState } from "react";
import { users } from "../data/models";

function UserManagement() {
  const [userList, setUserList] = useState(users);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUser, setEditedUser] = useState({ name: "", role: "", status: "" });
  const [searchQuery, setSearchQuery] = useState(""); 

  const addUser = () => {
    const newUser = {
      id: userList.length + 1,
      name: `New User ${userList.length + 1}`,
      role: "Viewer",
      status: "Active",
    };
    setUserList([...userList, newUser]);
  };

  const deleteUser = (id) => {
    setUserList(userList.filter((user) => user.id !== id));
  };

  const startEditing = (user) => {
    setEditingUserId(user.id);
    setEditedUser({
      name: user.name,
      role: user.role,
      status: user.status,
    });
  };

  const saveUser = () => {
    const updatedUsers = userList.map((user) =>
      user.id === editingUserId ? { ...user, ...editedUser } : user
    );
    setUserList(updatedUsers);
    setEditingUserId(null);
  };

  const cancelEditing = () => {
    setEditingUserId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = userList.filter((user) => {
    return user.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">User Management</h1>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search Users"
              value={searchQuery}
              onChange={handleSearchChange}
              className="px-4 py-2 border border-gray-300 rounded w-64"
            />
          </div>
          <button
            onClick={addUser}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Add User
          </button>
        </div>

        <table className="w-full border-collapse bg-gray-50 text-left text-sm text-gray-600">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-b border-gray-300 px-4 py-2 font-medium">Name</th>
              <th className="border-b border-gray-300 px-4 py-2 font-medium">Role</th>
              <th className="border-b border-gray-300 px-4 py-2 font-medium">Status</th>
              <th className="border-b border-gray-300 px-4 py-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="odd:bg-white even:bg-gray-100 hover:bg-gray-200 transition"
              >
                <td className="border-b border-gray-300 px-4 py-2">
                  {editingUserId === user.id ? (
                    <input
                      type="text"
                      name="name"
                      value={editedUser.name}
                      onChange={handleInputChange}
                      className="px-2 py-1 rounded border border-gray-300"
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {editingUserId === user.id ? (
                    <select
                      name="role"
                      value={editedUser.role}
                      onChange={handleInputChange}
                      className="px-2 py-1 rounded border border-gray-300"
                    >
                      <option value="Viewer">Viewer</option>
                      <option value="Admin">Admin</option>
                      <option value="Editor">Editor</option>
                    </select>
                  ) : (
                    user.role
                  )}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {editingUserId === user.id ? (
                    <select
                      name="status"
                      value={editedUser.status}
                      onChange={handleInputChange}
                      className="px-2 py-1 rounded border border-gray-300"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  ) : (
                    <span
                      className={`px-2 py-1 rounded text-sm font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {user.status}
                    </span>
                  )}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {editingUserId === user.id ? (
                    <>
                      <button
                        onClick={saveUser}
                        className="px-3 py-1 text-green-600 border border-green-600 rounded hover:bg-green-600 hover:text-white transition mr-2"
                      >
                        Save
                      </button>
                      <button
                        onClick={cancelEditing}
                        className="px-3 py-1 text-gray-600 border border-gray-600 rounded hover:bg-gray-600 hover:text-white transition"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => startEditing(user)}
                        className="px-3 py-1 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="px-3 py-1 text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white transition"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserManagement;
