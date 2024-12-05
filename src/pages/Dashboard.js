import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        
        <div className="bg-blue-100 p-6 rounded-lg shadow-md transition-all hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Users</h3>
          <p className="text-sm text-gray-600">Manage all registered users here.</p>
        </div>

        <div className="bg-green-100 p-6 rounded-lg shadow-md transition-all hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Roles</h3>
          <p className="text-sm text-gray-600">Define and edit user roles and permissions.</p>
        </div>

        <div className="bg-purple-100 p-6 rounded-lg shadow-md transition-all hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Statistics</h3>
          <p className="text-sm text-gray-600">View user and role activity statistics.</p>
        </div>

        <div className="bg-yellow-100 p-6 rounded-lg shadow-md transition-all hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Reports</h3>
          <p className="text-sm text-gray-600">Generate and view detailed reports.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
