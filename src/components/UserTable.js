import React, { useState, useEffect } from 'react';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const mockUsers = [
        { id: 1, name: 'Tejas Adsare', email: 'tejas@gmail.com', role: 'Admin' },
        { id: 2, name: 'Adsare', email: 'adsare@gmail.com', role: 'Editor' },
      ];
      setUsers(mockUsers);
    };

    fetchUsers();
  }, []);

  return (
    <table className="table-auto w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">ID</th>
          <th className="border border-gray-300 p-2">Name</th>
          <th className="border border-gray-300 p-2">Email</th>
          <th className="border border-gray-300 p-2">Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td className="border border-gray-300 p-2">{user.id}</td>
            <td className="border border-gray-300 p-2">{user.name}</td>
            <td className="border border-gray-300 p-2">{user.email}</td>
            <td className="border border-gray-300 p-2">{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
