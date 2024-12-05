# README: Role-Based Access Control (RBAC) UI Dashboard

# Project Overview
This project implements a Role-Based Access Control (RBAC) User Interface, designed to manage users, roles, and permissions securely and efficiently. It serves as an admin dashboard that provides a seamless, user-friendly experience for administrators tasked with managing access control.

# Features
1. User Management
View all registered users in a clean and organized list.
Add new users with roles and customizable permissions.
Edit user information, including role assignment and status (Active/Inactive).
Delete users securely with confirmation dialogs.
2. Role Management
Create new roles with a descriptive name.
Edit roles to update their associated permissions using checkboxes.
Delete roles that are no longer required.
Display roles and their assigned permissions for easy reference.
3. Dynamic Permissions
Assign or modify permissions (Read, Write, Delete) for each role.
Real-time updates to roles and permissions using mock API integration.
A role-permission matrix for quick and intuitive role management.
4. API Simulation
Mock API calls for CRUD operations on users and roles.
Simulate server responses, including success and error handling, for testing functionality.
5. Responsive Design
The UI is fully responsive, ensuring compatibility with desktops, tablets, and mobile devices.
The layout adapts to different screen sizes for an optimal user experience.
Technology Stack
Frontend: React, Tailwind CSS
State Management: React useState
Routing: React Router
Mock API Integration: Simulated server responses
Design: Tailwind CSS for styling


# Setup Instructions

## Download the Project
Download the project zip file from the provided link.
Extract the contents of the zip file to a folder on your local system.

## Navigate to the Project Directory Open a terminal and navigate to the folder where you extracted the project files:

cd /path-to-extracted-folder

# Install Dependencies Ensure you have Node.js and npm installed. Then, run the following command to install all required dependencies:

npm install

# Run the Development Server Start the application locally using the following command:

npm start
The application will be available at http://localhost:3000 in your web browser.

# Usage Instructions
** Access the Dashboard: Navigate to the homepage to view the admin dashboard.
** Manage Users: Use the "User Management" section to add, edit, or delete users and assign them roles.
** Manage Roles: Use the "Role Management" section to define roles, assign permissions using checkboxes, and manage existing roles.
** Test Functionality: Interact with mock APIs to simulate CRUD operations and validate role-based workflows.

# Folder Structure
rbac-ui/
├── src/
│   ├── components/     # Reusable UI components (e.g., RoleCard, UserCard)
│   ├── data/           # Mock data for users, roles, and permissions
│   ├── pages/          # Main application pages (e.g., UserManagement, RoleManagement)
│   ├── App.js          # Entry point for the React application
│   ├── index.js        # Application bootstrap and rendering
│   └── styles/         # Custom Tailwind CSS configurations
├── public/             # Public assets (e.g., index.html)
├── package.json        # Dependencies and scripts
└── README.md 

# Features Demonstration
** Adding Users: Create a new user and assign roles directly from the dashboard.
** Editing Roles: Update permissions for roles in real time with a clear, checkbox-based interface.
** Deleting Data: Securely delete users or roles with confirmation modals to prevent accidental deletions.


## Installation Commands

npx create-react-app rbac-dashboard
cd rbac-dashboard
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
npm install zustand
npm install axios
npm install msw --save-dev
npm install eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-prettier --save-dev
npm install react-icons
npm install formik yup
npm install @tanstack/react-table

